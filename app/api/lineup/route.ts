import { NextRequest, NextResponse } from 'next/server';
import { getLineupForCategory, getDynamicBumpersFromSnapshot } from '@/lib/youtube';
import { getQuotaStatus } from '@/lib/quota';
import { SEED_LINEUPS } from '@/lib/seed-catalog';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categoryId = searchParams.get('category') || searchParams.get('id');
  const idsParam = searchParams.get('ids') || searchParams.get('categories');

  if (categoryId) {
    try {
      const [lineup, dynamicBumpers] = await Promise.all([
        getLineupForCategory(categoryId),
        getDynamicBumpersFromSnapshot(),
      ]);
      return NextResponse.json(
        {
          ...lineup,
          dynamicBumpers: dynamicBumpers[categoryId] || [],
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600',
          },
        }
      );
    } catch (error) {
      console.error(`Lineup error for ${categoryId}:`, error);
      const fallback = SEED_LINEUPS[categoryId] || null;
      if (fallback) {
        return NextResponse.json(fallback);
      }
      return NextResponse.json(
        { error: 'Failed to fetch lineup' },
        { status: 500 }
      );
    }
  }

  if (idsParam) {
    const ids = idsParam.split(',').map((id) => id.trim()).filter(Boolean);
    try {
      const [lineups, dynamicBumpers] = await Promise.all([
        Promise.all(ids.map((id) => getLineupForCategory(id))),
        getDynamicBumpersFromSnapshot(),
      ]);
      const quota = getQuotaStatus();
      return NextResponse.json(
        {
          lineups,
          quota,
          dynamicBumpers,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600',
          },
        }
      );
    } catch (err: any) {
      console.error('Lineups batch error:', err);
      return NextResponse.json({ error: err?.message || 'Failed to load lineups' }, { status: 500 });
    }
  }

  return NextResponse.json(
    { error: 'category or ids parameter is required' },
    { status: 400 }
  );
}
