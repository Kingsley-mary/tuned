export const MAX_SHORT_DURATION_SEC = 210;

const SHORT_CHECK_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  Cookie: 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg',
};

/**
 * Checks whether a YouTube video ID is a YouTube Short.
 * YouTube serves /shorts/<id> with HTTP 200 for Shorts (including 61s-180s vertical Shorts)
 * and redirects (303/302) to /watch?v=<id> for standard horizontal videos.
 */
export async function isYouTubeShort(videoId: string): Promise<boolean> {
  if (!videoId) return false;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(
        `https://www.youtube.com/shorts/${encodeURIComponent(videoId)}`,
        {
          method: 'HEAD',
          redirect: 'manual',
          headers: SHORT_CHECK_HEADERS,
          signal: AbortSignal.timeout(6000),
        }
      );
      return res.status === 200;
    } catch {
      // Retry once on transient timeout/network error
    }
  }
  return false;
}
