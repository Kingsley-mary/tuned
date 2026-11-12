/**
 * Device capability and orientation utilities for mobile landscape television experience.
 */

/**
 * Detects whether the current device is a mobile or touch device.
 */
export function isMobileTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const hasTouch =
    'ontouchstart' in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  if (!hasTouch) return false;

  const isCoarse =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(pointer: coarse)').matches
      : false;
  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
      navigator.userAgent
    );
  const isSmallScreen =
    Math.min(window.screen.width, window.screen.height) <= 1024;

  return isCoarse || isMobileUA || isSmallScreen;
}

/**
 * Robustly checks if the device / viewport is currently in landscape orientation.
 */
export function isLandscapeViewport(): boolean {
  if (typeof window === 'undefined') return true;

  // 1. Standard Screen Orientation API
  if (window.screen?.orientation?.type) {
    return window.screen.orientation.type.includes('landscape');
  }

  // 2. Legacy window.orientation (iOS Safari: 90 / -90 is landscape, 0 / 180 is portrait)
  if (typeof (window as any).orientation === 'number') {
    const o = (window as any).orientation;
    if (o === 90 || o === -90) return true;
    if (o === 0 || o === 180) return false;
  }

  // 3. CSS Media Query
  if (typeof window.matchMedia === 'function') {
    const mql = window.matchMedia('(orientation: landscape)');
    if (mql && typeof mql.matches === 'boolean') {
      return mql.matches;
    }
  }

  // 4. Viewport Dimensions Fallback
  return window.innerWidth > window.innerHeight;
}

/**
 * Requests native fullscreen on the provided element (defaults to document.documentElement).
 * Automatically locks orientation to landscape if the Screen Orientation API is supported.
 */
export async function enterAppFullscreen(targetElement?: Element | null): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  const target = targetElement || document.documentElement;
  const docAny = document as any;
  const isAlreadyFs = !!(document.fullscreenElement || docAny.webkitFullscreenElement);

  // Attempt orientation lock
  if (typeof screen !== 'undefined' && screen.orientation && 'lock' in screen.orientation) {
    try {
      await (screen.orientation as any).lock('landscape');
    } catch {}
  }

  if (isAlreadyFs) return true;

  try {
    const elAny = target as any;
    if (elAny.requestFullscreen) {
      await elAny.requestFullscreen({ navigationUI: 'hide' } as any);
      return true;
    } else if (elAny.webkitRequestFullscreen) {
      await elAny.webkitRequestFullscreen();
      return true;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Exits native fullscreen if active and unlocks screen orientation.
 */
export async function exitAppFullscreen(): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  const docAny = document as any;
  const isAlreadyFs = !!(document.fullscreenElement || docAny.webkitFullscreenElement);

  if (typeof screen !== 'undefined' && screen.orientation && 'unlock' in screen.orientation) {
    try {
      screen.orientation.unlock();
    } catch {}
  }

  if (!isAlreadyFs) return true;

  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
      return true;
    } else if (docAny.webkitExitFullscreen) {
      await docAny.webkitExitFullscreen();
      return true;
    }
    return true;
  } catch {
    return false;
  }
}
