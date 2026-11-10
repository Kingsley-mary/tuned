import { NextRequest, NextResponse } from 'next/server';
import { resolveYouTubeChannel } from '../../../lib/youtube';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q');
  if (!query) {
    return NextResponse.json({ error: 'Missing channel query q' }, { status: 400 });
  }

  const result = await resolveYouTubeChannel(query);
  if ('error' in result) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
