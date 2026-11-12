import { NextResponse } from 'next/server';
import { BROADCAST_CHANNELS_MAP } from '@/lib/youtube';
import { refreshAllLineups } from '@/lib/catalog-refresher';
import { readFullCatalogSnapshot, writeCatalogSnapshot } from '@/lib/catalog-storage';

// Fluid Compute allows up to 300s on Hobby and 800s on Pro
export const maxDuration = 300;
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get('authorization');

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const existing = await readFullCatalogSnapshot();
    const result = await refreshAllLineups(
      BROADCAST_CHANNELS_MAP,
      existing?.lineups,
      existing?.dynamicBumpers
    );
    const stored = await writeCatalogSnapshot({
      lineups: result.snapshot,
      dynamicBumpers: result.dynamicBumpers,
    });

    return NextResponse.json({
      ok: true,
      mode: result.mode,
      categoriesUpdated: result.categoriesUpdated,
      creatorsChecked: result.creatorsChecked,
      newVideosFound: result.newVideosFound,
      dynamicBumpersFound: result.dynamicBumpersFound,
      refreshedAt: result.refreshedAt,
      blobPathname: stored.pathname,
    });
  } catch (err: any) {
    console.error('[cron/refresh-lineups] Failed to refresh catalog:', err);
    return NextResponse.json(
      { ok: false, error: err?.message || 'Catalog refresh failed' },
      { status: 500 }
    );
  }
}
