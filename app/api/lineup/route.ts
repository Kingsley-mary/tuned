import { NextRequest, NextResponse } from 'next/server';
import { getLineupForCategory } from '../../../lib/youtube';
import { getQuotaStatus } from '../../../lib/quota';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const idsParam = searchParams.get('ids');

  if (!idsParam) {
    return NextResponse.json({ error: 'Missing ids parameter' }, { status: 400 });
  }

  const ids = idsParam.split(',').map((id) => id.trim()).filter(Boolean);
  if (ids.length === 0) {
    return NextResponse.json({ error: 'No valid channel ids provided' }, { status: 400 });
  }

  try {
    const lineups = await Promise.all(ids.map((id) => getLineupForCategory(id)));
    const quota = getQuotaStatus();

    return NextResponse.json({
      lineups,
      quota,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Failed to load lineup' }, { status: 500 });
  }
}
