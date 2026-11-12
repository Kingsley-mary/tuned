import { get, put } from '@vercel/blob';
import { CatalogSnapshot, ChannelLineup } from './types';

export const CATALOG_BLOB_PATH = 'lineups/catalog.json';

interface CachedSnapshot {
  data: CatalogSnapshot;
  fetchedAt: number;
}

let inMemorySnapshot: CachedSnapshot | null = null;
const SNAPSHOT_CACHE_TTL_MS = 60 * 1000; // 60s local instance guard

function hasBlobCredentials(): boolean {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
      process.env.BLOB_STORE_ID ||
      process.env.VERCEL_OIDC_TOKEN
  );
}

/**
 * Normalizes both modern `{ lineups, dynamicBumpers }` snapshots and legacy
 * top-level `Record<string, ChannelLineup>` snapshots into a unified CatalogSnapshot.
 */
function normalizeSnapshot(parsed: unknown): CatalogSnapshot | null {
  if (!parsed || typeof parsed !== 'object') return null;
  const obj = parsed as Record<string, any>;

  if (obj.lineups && typeof obj.lineups === 'object' && !Array.isArray(obj.lineups)) {
    if (Object.keys(obj.lineups).length === 0) return null;
    return {
      lineups: obj.lineups as Record<string, ChannelLineup>,
      dynamicBumpers:
        obj.dynamicBumpers && typeof obj.dynamicBumpers === 'object'
          ? obj.dynamicBumpers
          : undefined,
    };
  }

  // Legacy format: top-level keys are category IDs mapping directly to ChannelLineup objects
  if (Object.keys(obj).length === 0) return null;
  return {
    lineups: obj as Record<string, ChannelLineup>,
    dynamicBumpers: undefined,
  };
}

/**
 * Reads the full catalog snapshot ({ lineups, dynamicBumpers }) from private Vercel Blob storage.
 * Returns null if Blob is unconfigured, empty, or unreachable.
 */
export async function readFullCatalogSnapshot(): Promise<CatalogSnapshot | null> {
  if (inMemorySnapshot && Date.now() - inMemorySnapshot.fetchedAt < SNAPSHOT_CACHE_TTL_MS) {
    return inMemorySnapshot.data;
  }

  if (!hasBlobCredentials()) {
    return null;
  }

  try {
    const result = await get(CATALOG_BLOB_PATH, {
      access: 'private',
      useCache: false,
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return null;
    }

    const text = await new Response(result.stream).text();
    const parsed = JSON.parse(text);
    const normalized = normalizeSnapshot(parsed);
    if (!normalized) {
      return null;
    }

    inMemorySnapshot = {
      data: normalized,
      fetchedAt: Date.now(),
    };
    return normalized;
  } catch (err) {
    console.error('[catalog-storage] Failed to read catalog snapshot from Vercel Blob:', err);
    return null;
  }
}

/**
 * Reads the shared channel lineups map from private Vercel Blob storage.
 * Returns null if Blob is unconfigured, empty, or unreachable so callers cleanly fall back to SEED_LINEUPS.
 */
export async function readCatalogSnapshot(): Promise<Record<string, ChannelLineup> | null> {
  const full = await readFullCatalogSnapshot();
  return full?.lineups || null;
}

/**
 * Atomically overwrites the shared catalog snapshot in private Vercel Blob storage.
 * Supports either full `{ lineups, dynamicBumpers }` or a legacy lineups map.
 */
export async function writeCatalogSnapshot(
  snapshot: CatalogSnapshot | Record<string, ChannelLineup>
): Promise<{ url: string; pathname: string }> {
  const normalized: CatalogSnapshot =
    'lineups' in snapshot && snapshot.lineups && typeof snapshot.lineups === 'object'
      ? (snapshot as CatalogSnapshot)
      : { lineups: snapshot as Record<string, ChannelLineup> };

  const payload = JSON.stringify(normalized);
  const blob = await put(CATALOG_BLOB_PATH, payload, {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 300,
  });

  inMemorySnapshot = {
    data: normalized,
    fetchedAt: Date.now(),
  };

  return {
    url: blob.url,
    pathname: blob.pathname,
  };
}
