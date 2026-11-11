import { get, put } from '@vercel/blob';
import { ChannelLineup } from './types';

export const CATALOG_BLOB_PATH = 'lineups/catalog.json';

interface CachedSnapshot {
  data: Record<string, ChannelLineup>;
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
 * Reads the shared channel catalog snapshot from private Vercel Blob storage.
 * Returns null if Blob is unconfigured, empty, or unreachable so callers cleanly fall back to SEED_LINEUPS.
 */
export async function readCatalogSnapshot(): Promise<Record<string, ChannelLineup> | null> {
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
    const parsed = JSON.parse(text) as Record<string, ChannelLineup>;
    if (!parsed || typeof parsed !== 'object' || Object.keys(parsed).length === 0) {
      return null;
    }

    inMemorySnapshot = {
      data: parsed,
      fetchedAt: Date.now(),
    };
    return parsed;
  } catch (err) {
    console.error('[catalog-storage] Failed to read catalog snapshot from Vercel Blob:', err);
    return null;
  }
}

/**
 * Atomically overwrites the shared channel catalog snapshot in private Vercel Blob storage.
 */
export async function writeCatalogSnapshot(
  snapshot: Record<string, ChannelLineup>
): Promise<{ url: string; pathname: string }> {
  const payload = JSON.stringify(snapshot);
  const blob = await put(CATALOG_BLOB_PATH, payload, {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 300,
  });

  inMemorySnapshot = {
    data: snapshot,
    fetchedAt: Date.now(),
  };

  return {
    url: blob.url,
    pathname: blob.pathname,
  };
}
