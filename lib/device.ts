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

  // 1. Direct viewport dimensions (immediate, accurate to layout reflow)
  const isWidthGreater = window.innerWidth > window.innerHeight;

  // 2. Standard Screen Orientation API
  if (window.screen?.orientation?.type) {
    const isApiLandscape = window.screen.orientation.type.includes('landscape');
    if (isApiLandscape || isWidthGreater) return true;
    return false;
  }

  // 3. Legacy window.orientation (iOS Safari: 90 / -90 is landscape, 0 / 180 is portrait)
  if (typeof (window as any).orientation === 'number') {
    const o = (window as any).orientation;
    if (o === 90 || o === -90) return true;
    if (o === 0 || o === 180) return false;
  }

  // 4. CSS Media Query
  if (typeof window.matchMedia === 'function') {
    const mql = window.matchMedia('(orientation: landscape)');
    if (mql && typeof mql.matches === 'boolean') {
      return mql.matches || isWidthGreater;
    }
  }

  return isWidthGreater;
}

/**
 * Checks whether the browser is currently in native fullscreen.
 */
export function isDeviceFullscreen(): boolean {
  if (typeof document === 'undefined') return false;
  const docAny = document as any;
  return !!(
    document.fullscreenElement ||
    docAny.webkitFullscreenElement ||
    docAny.mozFullScreenElement ||
    docAny.msFullscreenElement
  );
}

/**
 * Requests native fullscreen on the target element (defaults to document.documentElement).
 * Automatically locks orientation to landscape once fullscreen is engaged.
 * Preserves transient user activation by synchronously executing requestFullscreen first.
 */
export async function enterAppFullscreen(_targetElement?: Element | null): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  // Always fullscreen the root document element so all application screens (WatchScreen, GuideScreen, ManageScreen, PowerScreen)
  // remain fully visible and operational inside the browser's native Top Layer.
  const target = document.documentElement;

  // 1. If already in native fullscreen, ensure orientation lock is active and return true
  if (isDeviceFullscreen()) {
    if (typeof screen !== 'undefined' && screen.orientation && 'lock' in screen.orientation) {
      try {
        await (screen.orientation as any).lock('landscape');
      } catch {}
    }
    return true;
  }

  // 2. Request native fullscreen (SYNCHRONOUS invocation first to preserve transient user activation!)
  let entered = false;
  try {
    const elAny = target as any;
    if (elAny.requestFullscreen) {
      await elAny.requestFullscreen({ navigationUI: 'hide' } as any);
      entered = true;
    } else if (elAny.webkitRequestFullscreen) {
      await elAny.webkitRequestFullscreen();
      entered = true;
    } else if (elAny.mozRequestFullScreen) {
      await elAny.mozRequestFullScreen();
      entered = true;
    } else if (elAny.msRequestFullscreen) {
      await elAny.msRequestFullscreen();
      entered = true;
    }
  } catch {
    // If target element failed (e.g. element inside container), fall back to document.documentElement
    try {
      const docEl = document.documentElement as any;
      if (docEl && docEl !== target) {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen({ navigationUI: 'hide' } as any);
          entered = true;
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
          entered = true;
        }
      }
    } catch {}
  }

  // 3. AFTER entering fullscreen, lock screen orientation to landscape
  if (typeof screen !== 'undefined' && screen.orientation && 'lock' in screen.orientation) {
    try {
      await (screen.orientation as any).lock('landscape');
    } catch {}
  }

  // 4. Mobile browser viewport scroll trick (iOS Safari / mobile Chrome toolbar collapse)
  if (typeof window !== 'undefined') {
    try {
      window.scrollTo(0, 1);
      setTimeout(() => window.scrollTo(0, 0), 50);
    } catch {}
  }

  return entered || isDeviceFullscreen();
}

/**
 * Exits native fullscreen if active and unlocks screen orientation.
 */
export async function exitAppFullscreen(): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  const docAny = document as any;

  if (typeof screen !== 'undefined' && screen.orientation && 'unlock' in screen.orientation) {
    try {
      screen.orientation.unlock();
    } catch {}
  }

  if (!isDeviceFullscreen()) return true;

  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
      return true;
    } else if (docAny.webkitExitFullscreen) {
      await docAny.webkitExitFullscreen();
      return true;
    } else if (docAny.mozCancelFullScreen) {
      await docAny.mozCancelFullScreen();
      return true;
    } else if (docAny.msExitFullscreen) {
      await docAny.msExitFullscreen();
      return true;
    }
    return true;
  } catch {
    return false;
  }
}
