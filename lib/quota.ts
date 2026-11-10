// Quota Guard: Max 10,000 units/day. PRD Section 8: Stop non-essential refreshes at 80% (8,000 units).
const DAILY_LIMIT = 10000;
const GUARD_THRESHOLD = 8000;

let unitsUsedToday = 0;
let lastResetDate = getPacificDateString();

function getPacificDateString(): string {
  // YouTube API quota resets at midnight Pacific Time
  const now = new Date();
  const pacific = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  return pacific;
}

export function checkAndResetQuota(): void {
  const today = getPacificDateString();
  if (today !== lastResetDate) {
    unitsUsedToday = 0;
    lastResetDate = today;
  }
}

export function canMakeApiCall(cost: number = 1): boolean {
  checkAndResetQuota();
  return unitsUsedToday + cost <= GUARD_THRESHOLD;
}

export function recordApiUnits(cost: number): void {
  checkAndResetQuota();
  unitsUsedToday += cost;
}

export function getQuotaStatus() {
  checkAndResetQuota();
  return {
    used: unitsUsedToday,
    threshold: GUARD_THRESHOLD,
    maxLimit: DAILY_LIMIT,
    isGuarded: unitsUsedToday >= GUARD_THRESHOLD,
    pacificDate: lastResetDate,
  };
}
