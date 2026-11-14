'use client';

import React, { useCallback, useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export type CaptionFontSize = -1 | 0 | 1 | 2 | 3;

export interface CaptionTrack {
  languageCode: string;
  displayName: string;
  isDefault?: boolean;
}

export type VideoQualityPreference =
  | 'auto'
  | 'hd2160'
  | 'hd1440'
  | 'hd1080'
  | 'hd720'
  | 'large'
  | 'medium'
  | 'small';

export interface VideoQualityInfo {
  actualQuality: string;
  availableQualities: string[];
}

const VIDEO_QUALITY_ORDER: Exclude<VideoQualityPreference, 'auto'>[] = [
  'hd2160',
  'hd1440',
  'hd1080',
  'hd720',
  'large',
  'medium',
  'small',
];

const QUALITY_VIEWPORT_DIMENSIONS: Record<Exclude<VideoQualityPreference, 'auto'>, { width: number; height: number }> = {
  hd2160: { width: 3840, height: 2160 },
  hd1440: { width: 2560, height: 1440 },
  hd1080: { width: 1920, height: 1080 },
  hd720: { width: 1280, height: 720 },
  large: { width: 854, height: 480 },
  medium: { width: 640, height: 360 },
  small: { width: 426, height: 240 },
};

function readActualPlaybackQuality(player: any): string {
  if (!player) return '';
  try {
    const videoData = typeof player.getVideoData === 'function' ? player.getVideoData() : null;
    const fromVideoData = typeof videoData?.video_quality === 'string' ? videoData.video_quality : '';
    if (fromVideoData && fromVideoData !== 'auto' && fromVideoData !== 'unknown') {
      return fromVideoData;
    }
    const fromApi = typeof player.getPlaybackQuality === 'function' ? (player.getPlaybackQuality() || '') : '';
    if (fromApi && fromApi !== 'auto' && fromApi !== 'unknown') {
      return fromApi;
    }
    return fromVideoData || fromApi || '';
  } catch {
    return '';
  }
}

export interface YouTubePlayerHandle {
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  setVolume: (volume: number) => void;
  mute: () => void;
  unMute: () => void;
}

interface YouTubePlayerProps {
  videoId: string;
  startSeconds?: number;
  tuneKey?: number;
  isPlaying: boolean;
  isMuted?: boolean;
  allowShortClip?: boolean;
  prebufferOnly?: boolean;
  captionsEnabled?: boolean;
  disableCaptions?: boolean;
  captionFontSize?: CaptionFontSize;
  captionLanguage?: string;
  preferredQuality?: VideoQualityPreference;
  onQualityInfoChange?: (info: VideoQualityInfo) => void;
  onCaptionTracksChange?: (tracks: CaptionTrack[]) => void;
  onPrebuffered?: (videoId: string) => void;
  onEnded: () => void;
  onError: (errorCode: number) => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
  onBuffering: (isBuffering: boolean) => void;
  onReady?: () => void;
  onShortDetected?: (videoId: string) => void;
}

export const YouTubePlayer = React.forwardRef<YouTubePlayerHandle, YouTubePlayerProps>((props, ref) => {
  const {
    videoId,
    startSeconds = 0,
    tuneKey = 0,
    isPlaying,
    isMuted = false,
    allowShortClip = false,
    prebufferOnly = false,
    captionsEnabled = false,
    disableCaptions = false,
    captionFontSize = 0,
    captionLanguage = 'auto',
    preferredQuality = 'auto',
    onQualityInfoChange,
    onCaptionTracksChange,
    onPrebuffered,
    onEnded,
    onError,
    onTimeUpdate,
    onBuffering,
    onReady,
    onShortDetected,
  } = props;

  const boxRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);
  const prebufferedKeyRef = useRef<string | null>(null);
  const shortCheckDoneRef = useRef<string | null>(null);
  const endedFiredRef = useRef<string | null>(null);
  const errorFiredRef = useRef<string | null>(null);
  const loadedVideoIdRef = useRef<string>('');
  const loadedTuneKeyRef = useRef<number>(tuneKey);
  const loadedStartSecRef = useRef<number>(Math.floor(startSeconds || 0));
  const appliedQualityRef = useRef<VideoQualityPreference>(preferredQuality);
  const lastQualityReportSigRef = useRef<string>('');
  const pendingSeekRef = useRef<{ videoId: string; tuneKey: number; startSeconds: number } | null>(
    startSeconds && startSeconds > 3
      ? { videoId, tuneKey, startSeconds: Math.floor(startSeconds) }
      : null
  );

  React.useImperativeHandle(
    ref,
    () => ({
      seekTo: (seconds: number, allowSeekAhead: boolean = true) => {
        try {
          if (playerRef.current && isReadyRef.current) {
            playerRef.current.seekTo(seconds, allowSeekAhead);
          }
        } catch {}
      },
      getCurrentTime: () => {
        try {
          return playerRef.current?.getCurrentTime?.() || 0;
        } catch {
          return 0;
        }
      },
      getDuration: () => {
        try {
          return playerRef.current?.getDuration?.() || 0;
        } catch {
          return 0;
        }
      },
      getPlayerState: () => {
        try {
          return playerRef.current?.getPlayerState?.() ?? -1;
        } catch {
          return -1;
        }
      },
      setVolume: (vol: number) => {
        try {
          playerRef.current?.setVolume?.(vol);
        } catch {}
      },
      mute: () => {
        try {
          playerRef.current?.mute?.();
        } catch {}
      },
      unMute: () => {
        try {
          playerRef.current?.unMute?.();
        } catch {}
      },
    }),
    []
  );

  // Keep latest props in a ref so YT.Player event listeners never call stale closures
  const latestPropsRef = useRef({
    videoId,
    startSeconds,
    tuneKey,
    isPlaying,
    isMuted,
    allowShortClip,
    prebufferOnly,
    captionsEnabled,
    disableCaptions,
    captionFontSize,
    captionLanguage,
    preferredQuality,
    onQualityInfoChange,
    onCaptionTracksChange,
    onPrebuffered,
    onEnded,
    onError,
    onTimeUpdate,
    onBuffering,
    onReady,
    onShortDetected,
  });

  useEffect(() => {
    latestPropsRef.current = {
      videoId,
      startSeconds,
      tuneKey,
      isPlaying,
      isMuted,
      allowShortClip,
      prebufferOnly,
      captionsEnabled,
      disableCaptions,
      captionFontSize,
      captionLanguage,
      preferredQuality,
      onQualityInfoChange,
      onCaptionTracksChange,
      onPrebuffered,
      onEnded,
      onError,
      onTimeUpdate,
      onBuffering,
      onReady,
      onShortDetected,
    };
  });

  // Unload caption modules and clear any active subtitle tracks
  const suppressCaptions = (player: any) => {
    if (!player) return;
    try {
      player.setOption?.('captions', 'track', {});
      player.setOption?.('cc', 'track', {});
      player.unloadModule?.('captions');
      player.unloadModule?.('cc');
    } catch {}
  };

  // Read available caption tracks and apply enable/disable, language, and fontSize
  const applyCaptionSettings = (
    player: any,
    enabled: boolean,
    fontSize: CaptionFontSize,
    preferredLang: string = 'auto',
    forceDisable: boolean = false
  ) => {
    if (!player) return;
    try {
      if (forceDisable) {
        suppressCaptions(player);
        return;
      }

      let collectedTracks: CaptionTrack[] = [];
      for (const mod of ['captions', 'cc']) {
        try {
          const rawTracks = player.getOption?.(mod, 'tracklist');
          if (Array.isArray(rawTracks) && rawTracks.length > 0) {
            collectedTracks = rawTracks
              .filter((t: any) => t && (t.languageCode || t.displayName || t.languageName))
              .map((t: any) => ({
                languageCode: String(t.languageCode || 'en'),
                displayName: String(t.displayName || t.languageName || t.languageCode || 'Captions'),
                isDefault: Boolean(t.is_default || t.isDefault),
              }));
            break;
          }
        } catch {}
      }

      if (collectedTracks.length > 0) {
        latestPropsRef.current.onCaptionTracksChange?.(collectedTracks);
      }

      if (!enabled) {
        suppressCaptions(player);
      } else {
        player.loadModule?.('captions');
        player.loadModule?.('cc');
        for (const mod of ['captions', 'cc']) {
          try {
            const rawTracks = player.getOption?.(mod, 'tracklist');
            if (Array.isArray(rawTracks) && rawTracks.length > 0) {
              const targetTrack =
                (preferredLang && preferredLang !== 'auto'
                  ? rawTracks.find((t: any) => t.languageCode === preferredLang)
                  : null) ||
                rawTracks.find((t: any) => /^en/i.test(t.languageCode || '')) ||
                rawTracks[0];
              player.setOption?.(mod, 'track', targetTrack);
            } else {
              const fallbackCode = preferredLang && preferredLang !== 'auto' ? preferredLang : 'en';
              player.setOption?.(mod, 'track', { languageCode: fallbackCode });
            }
            player.setOption?.(mod, 'fontSize', fontSize);
            player.setOption?.(mod, 'reload', true);
          } catch {}
        }
      }
    } catch {}
  };

  // Pick exact preferred quality or closest lower available quality when the stream tops out lower
  const resolveTargetQuality = (player: any, preferred: VideoQualityPreference): string => {
    if (!preferred || preferred === 'auto') return 'default';
    let rawLevels: string[] = [];
    try {
      const levels = player?.getAvailableQualityLevels?.();
      if (Array.isArray(levels)) {
        rawLevels = levels.filter((q: any): q is Exclude<VideoQualityPreference, 'auto'> =>
          VIDEO_QUALITY_ORDER.includes(q)
        );
      }
    } catch {}
    if (rawLevels.length === 0 || rawLevels.includes(preferred)) {
      return preferred;
    }
    const idx = VIDEO_QUALITY_ORDER.indexOf(preferred);
    const closestLower =
      idx >= 0
        ? VIDEO_QUALITY_ORDER.slice(idx).find((q) => rawLevels.includes(q))
        : undefined;
    return closestLower || rawLevels[0] || preferred;
  };

  // Size and counter-scale the iframe wrapper to lock YouTube's internal viewport selector (PP.prototype.kK / yF)
  const syncQualityViewport = useCallback(
    (playerInstance?: any, qualityOverride?: VideoQualityPreference) => {
      const wrapper = wrapperRef.current;
      const box = boxRef.current;
      if (!wrapper) return;

      const p = playerInstance ?? playerRef.current;
      const pref = qualityOverride ?? latestPropsRef.current.preferredQuality ?? 'auto';
      const boxW = box?.clientWidth || 0;
      const boxH = box?.clientHeight || 0;

      if (!pref || pref === 'auto') {
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        wrapper.style.transform = 'none';
        wrapper.style.transformOrigin = '0 0';
        if (p && typeof p.setSize === 'function' && boxW > 0 && boxH > 0) {
          try {
            p.setSize(boxW, boxH);
          } catch {}
        }
        return;
      }

      const resolvedTarget = resolveTargetQuality(p, pref);
      const tierKey = (resolvedTarget &&
      resolvedTarget !== 'auto' &&
      resolvedTarget in QUALITY_VIEWPORT_DIMENSIONS
        ? resolvedTarget
        : pref) as Exclude<VideoQualityPreference, 'auto'>;
      const dims = QUALITY_VIEWPORT_DIMENSIONS[tierKey] || QUALITY_VIEWPORT_DIMENSIONS.hd1080;
      const dpr = typeof window !== 'undefined' && window.devicePixelRatio > 1 ? window.devicePixelRatio : 1;

      // Use 0.88 * tier dimensions (or 1.0x for top-tier 4K) so the physical viewport:
      // 1) Sits strictly above YouTube's 0.85 * tier floor (h.width * 0.85 < c.width)
      // 2) Sits strictly below YouTube's html5_viewport_undersend_maximum upgrade threshold
      //    (h.width < c.width * e -> b = a[f - 1]) and SABR server oversampling threshold.
      const factor = tierKey === 'hd2160' ? 1.0 : 0.88;
      const targetPhysicalW = Math.round(dims.width * factor);
      const targetPhysicalH = Math.round(dims.height * factor);
      const cssWidth = Math.max(200, Math.floor(targetPhysicalW / dpr));
      const cssHeight = Math.max(112, Math.floor(targetPhysicalH / dpr));

      wrapper.style.width = `${cssWidth}px`;
      wrapper.style.height = `${cssHeight}px`;
      wrapper.style.transformOrigin = '0 0';
      if (boxW > 0 && boxH > 0) {
        const scaleX = boxW / cssWidth;
        const scaleY = boxH / cssHeight;
        wrapper.style.transform = `scale(${scaleX}, ${scaleY})`;
      } else {
        wrapper.style.transform = 'none';
      }
      // Force synchronous layout so the iframe observes the updated clientWidth/innerWidth immediately
      void wrapper.offsetWidth;

      if (p && typeof p.setSize === 'function') {
        try {
          p.setSize(cssWidth, cssHeight);
        } catch {}
      }
    },
    []
  );

  // Keep virtual viewport counter-scale synchronized when stage or window resizes
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleResize = () => {
      syncQualityViewport(playerRef.current, latestPropsRef.current.preferredQuality);
    };

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(handleResize);
      observer.observe(box);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncQualityViewport]);

  // Apply preferred quality (or Auto) and publish current/available levels
  const applyQualitySettings = (
    player: any,
    preferred: VideoQualityPreference = 'auto',
    notify: boolean = true
  ) => {
    if (!player) return;
    try {
      const actualQuality = readActualPlaybackQuality(player);
      const rawLevels = player.getAvailableQualityLevels?.();
      const availableQualities = Array.isArray(rawLevels) ? rawLevels.map(String) : [];

      if (notify && !latestPropsRef.current.prebufferOnly) {
        const sig = `${actualQuality}|${availableQualities.join(',')}`;
        lastQualityReportSigRef.current = sig;
        latestPropsRef.current.onQualityInfoChange?.({
          actualQuality,
          availableQualities,
        });
      }

      if (!preferred || preferred === 'auto') {
        player.setPlaybackQualityRange?.('default', 'highres');
        player.setPlaybackQuality?.('default');
      } else {
        const target = resolveTargetQuality(player, preferred);
        player.setPlaybackQualityRange?.(target, target);
        player.setPlaybackQuality?.(target);
      }
    } catch {}
  };

  // Helper to fire onEnded at most once per (videoId, tuneKey)
  const triggerEndedOnce = () => {
    const { videoId: curId, tuneKey: curKey, onEnded: handleEnded } = latestPropsRef.current;
    const key = `${curId}_${curKey}`;
    if (endedFiredRef.current === key) return;
    endedFiredRef.current = key;
    handleEnded();
  };

  // Helper to fire onError at most once per (videoId, tuneKey) and ignore stale video errors
  const triggerErrorOnce = (errCode: number) => {
    const { videoId: curId, tuneKey: curKey, onError: handleError } = latestPropsRef.current;
    if (!curId) return;
    try {
      const playerVidId = playerRef.current?.getVideoData?.()?.video_id;
      if (playerVidId && playerVidId !== curId) return;
    } catch {}
    const key = `${curId}_${curKey}`;
    if (errorFiredRef.current === key) return;
    errorFiredRef.current = key;
    handleError(errCode);
  };

  // Initialize YT Player once API is loaded
  useEffect(() => {
    let isCancelled = false;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player || !wrapperRef.current) return;
      if (playerRef.current) return;

      const initial = latestPropsRef.current;

      try {
        // Create an inner mount element so YT.Player replacing the node with <iframe>
        // never mutates React's own wrapperRef DOM node and always retains 100%x100% layout.
        wrapperRef.current.innerHTML = '';
        const mountNode = document.createElement('div');
        mountNode.style.width = '100%';
        mountNode.style.height = '100%';
        wrapperRef.current.appendChild(mountNode);

        syncQualityViewport(null, initial.preferredQuality ?? 'auto');
        appliedQualityRef.current = initial.preferredQuality ?? 'auto';
        loadedVideoIdRef.current = initial.videoId || '';
        loadedTuneKeyRef.current = initial.tuneKey;
        playerRef.current = new window.YT.Player(mountNode, {
          height: '100%',
          width: '100%',
          videoId: initial.videoId || '',
          playerVars: {
            autoplay: initial.isPlaying ? 1 : 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            fs: 1,
            cc_load_policy: initial.disableCaptions ? 0 : (initial.captionsEnabled ? 1 : 0),
            hl: 'en',
            start: Math.floor(initial.startSeconds || 0),
            iv_load_policy: 3,
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
            widget_referrer: typeof window !== 'undefined' ? window.location.href : undefined,
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              isReadyRef.current = true;
              const cur = latestPropsRef.current;

              // Ensure iframe has proper fullscreen and mobile playsinline attributes
              try {
                const iframe = event.target?.getIframe?.();
                if (iframe) {
                  iframe.style.width = '100%';
                  iframe.style.height = '100%';
                  iframe.style.display = 'block';
                  iframe.setAttribute('allowfullscreen', 'true');
                  iframe.setAttribute('playsinline', '1');
                  iframe.setAttribute('webkit-playsinline', '1');
                  iframe.setAttribute(
                    'allow',
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
                  );
                }
              } catch {}

              try {
                if (cur.prebufferOnly || cur.isMuted) {
                  playerRef.current?.mute?.();
                } else {
                  playerRef.current?.unMute?.();
                  playerRef.current?.setVolume?.(100);
                }
              } catch {}

              applyCaptionSettings(
                playerRef.current,
                !!cur.captionsEnabled && !cur.disableCaptions,
                cur.captionFontSize ?? 0,
                cur.captionLanguage ?? 'auto',
                !!cur.disableCaptions
              );

              syncQualityViewport(event.target, cur.preferredQuality ?? 'auto');
              applyQualitySettings(
                playerRef.current,
                cur.preferredQuality ?? 'auto',
                !cur.prebufferOnly
              );

              cur.onReady?.();

              // If videoId changed while player was initializing, load the latest videoId
              if (cur.videoId && cur.videoId !== loadedVideoIdRef.current) {
                const targetStart = Math.floor(cur.startSeconds || 0);
                const resolved = resolveTargetQuality(playerRef.current, cur.preferredQuality ?? 'auto');
                const suggestedQuality = resolved !== 'auto' ? resolved : 'default';
                appliedQualityRef.current = cur.preferredQuality ?? 'auto';
                lastQualityReportSigRef.current = '';
                loadedVideoIdRef.current = cur.videoId;
                loadedTuneKeyRef.current = cur.tuneKey;
                loadedStartSecRef.current = targetStart;
                syncQualityViewport(event.target, cur.preferredQuality ?? 'auto');
                pendingSeekRef.current =
                  targetStart > 3
                    ? { videoId: cur.videoId, tuneKey: cur.tuneKey, startSeconds: targetStart }
                    : null;
                if (cur.isPlaying || cur.prebufferOnly) {
                  playerRef.current?.loadVideoById?.({
                    videoId: cur.videoId,
                    startSeconds: targetStart,
                    suggestedQuality,
                  });
                } else {
                  playerRef.current?.cueVideoById?.({
                    videoId: cur.videoId,
                    startSeconds: targetStart,
                    suggestedQuality,
                  });
                }
              } else if (cur.videoId && (cur.isPlaying || cur.prebufferOnly)) {
                const targetStart = Math.floor(cur.startSeconds || 0);
                if (targetStart > 0) {
                  pendingSeekRef.current =
                    targetStart > 3
                      ? { videoId: cur.videoId, tuneKey: cur.tuneKey, startSeconds: targetStart }
                      : null;
                  try {
                    playerRef.current?.seekTo?.(targetStart, true);
                  } catch {}
                }
                playerRef.current?.playVideo?.();
              }
            },
            onApiChange: () => {
              if (isCancelled) return;
              const cur = latestPropsRef.current;
              applyCaptionSettings(
                playerRef.current,
                !!cur.captionsEnabled && !cur.disableCaptions,
                cur.captionFontSize ?? 0,
                cur.captionLanguage ?? 'auto',
                !!cur.disableCaptions
              );
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              const cur = latestPropsRef.current;
              if (cur.prebufferOnly) {
                if (event.data === 1) {
                  const key = `${cur.videoId}_${cur.tuneKey}`;
                  try {
                    playerRef.current?.mute?.();
                    playerRef.current?.pauseVideo?.();
                    playerRef.current?.seekTo?.(Math.floor(cur.startSeconds || 0), true);
                  } catch {}
                  if (prebufferedKeyRef.current !== key) {
                    prebufferedKeyRef.current = key;
                    cur.onPrebuffered?.(cur.videoId);
                  }
                }
                return;
              }
              // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
              if (event.data === 1) {
                hasStartedRef.current = true;
                cur.onBuffering(false);

                // Enforce broadcast live offset if YouTube embed ignored startSeconds on loadVideoById
                const pending = pendingSeekRef.current;
                if (pending && pending.videoId === cur.videoId && pending.tuneKey === cur.tuneKey) {
                  pendingSeekRef.current = null;
                  try {
                    const actualPos = playerRef.current?.getCurrentTime?.() || 0;
                    if (actualPos < pending.startSeconds - 1.0 || actualPos > pending.startSeconds + 1.8) {
                      playerRef.current?.seekTo?.(pending.startSeconds, true);
                    }
                  } catch {}
                }

                try {
                  if (cur.isMuted) {
                    playerRef.current?.mute?.();
                  } else {
                    playerRef.current?.unMute?.();
                    playerRef.current?.setVolume?.(100);
                  }
                } catch {}
                // Re-apply caption and quality state once playback starts so forced creator defaults respect user setting
                applyCaptionSettings(
                  playerRef.current,
                  !!cur.captionsEnabled && !cur.disableCaptions,
                  cur.captionFontSize ?? 0,
                  cur.captionLanguage ?? 'auto',
                  !!cur.disableCaptions
                );
                syncQualityViewport(event.target, cur.preferredQuality ?? 'auto');
                applyQualitySettings(playerRef.current, cur.preferredQuality ?? 'auto', true);
                setTimeout(() => {
                  if (!isCancelled) {
                    const latest = latestPropsRef.current;
                    applyCaptionSettings(
                      playerRef.current,
                      !!latest.captionsEnabled && !latest.disableCaptions,
                      latest.captionFontSize ?? 0,
                      latest.captionLanguage ?? 'auto',
                      !!latest.disableCaptions
                    );
                    syncQualityViewport(playerRef.current, latest.preferredQuality ?? 'auto');
                    applyQualitySettings(playerRef.current, latest.preferredQuality ?? 'auto', true);
                  }
                }, 600);
                if (cur.disableCaptions) {
                  setTimeout(() => {
                    if (!isCancelled && latestPropsRef.current.disableCaptions) {
                      suppressCaptions(playerRef.current);
                    }
                  }, 1500);
                }
              } else if (event.data === 0) {
                cur.onBuffering(false);
                triggerEndedOnce();
              } else if (event.data === 3) {
                cur.onBuffering(true);
                syncQualityViewport(event.target, cur.preferredQuality ?? 'auto');
                applyQualitySettings(playerRef.current, cur.preferredQuality ?? 'auto', true);
              } else if (event.data === 5) {
                syncQualityViewport(event.target, cur.preferredQuality ?? 'auto');
                applyQualitySettings(playerRef.current, cur.preferredQuality ?? 'auto', true);
                if (cur.isPlaying) {
                  try {
                    playerRef.current?.playVideo?.();
                  } catch {}
                }
              } else {
                cur.onBuffering(false);
              }
            },
            onPlaybackQualityChange: () => {
              if (isCancelled) return;
              const cur = latestPropsRef.current;
              syncQualityViewport(playerRef.current, cur.preferredQuality ?? 'auto');
              applyQualitySettings(
                playerRef.current,
                cur.preferredQuality ?? 'auto',
                !cur.prebufferOnly
              );
            },
            onError: (event: any) => {
              const cur = latestPropsRef.current;
              if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                console.warn('YouTube Player offline error suppressed while disconnected:', event.data);
                if (!cur.prebufferOnly) cur.onBuffering(true);
                return;
              }
              console.warn('YouTube Player reported error:', event.data, 'for video:', cur.videoId);
              triggerErrorOnce(event.data);
            },
          },
        });
      } catch (e) {
        console.error('Failed to instantiate YT.Player:', e);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      isCancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
    };
  }, []);

  // Update videoId or tune position when channel/video/tuneKey changes (never reset on play/pause!)
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current) return;

    if (!videoId) {
      if (loadedVideoIdRef.current) {
        loadedVideoIdRef.current = '';
        loadedTuneKeyRef.current = tuneKey;
        loadedStartSecRef.current = 0;
        hasStartedRef.current = false;
        try {
          playerRef.current.stopVideo?.();
        } catch {}
      }
      return;
    }

    const targetStart = Math.floor(startSeconds || 0);
    const sameTune =
      loadedVideoIdRef.current === videoId &&
      loadedTuneKeyRef.current === tuneKey;

    if (sameTune) {
      return;
    }

    const shouldPlay = latestPropsRef.current.isPlaying || latestPropsRef.current.prebufferOnly;
    hasStartedRef.current = false;
    pendingSeekRef.current =
      targetStart > 3 ? { videoId, tuneKey, startSeconds: targetStart } : null;

    try {
      if (latestPropsRef.current.prebufferOnly) {
        playerRef.current.mute?.();
      } else {
        latestPropsRef.current.onQualityInfoChange?.({ actualQuality: '', availableQualities: [] });
      }
      latestPropsRef.current.onCaptionTracksChange?.([]);
      loadedVideoIdRef.current = videoId;
      loadedTuneKeyRef.current = tuneKey;
      loadedStartSecRef.current = targetStart;
      appliedQualityRef.current = latestPropsRef.current.preferredQuality ?? 'auto';
      lastQualityReportSigRef.current = '';
      syncQualityViewport(playerRef.current, latestPropsRef.current.preferredQuality ?? 'auto');
      const resolved = resolveTargetQuality(
        playerRef.current,
        latestPropsRef.current.preferredQuality ?? 'auto'
      );
      const suggestedQuality = resolved !== 'auto' ? resolved : 'default';
      if (shouldPlay) {
        playerRef.current.loadVideoById({
          videoId,
          startSeconds: targetStart,
          suggestedQuality,
        });
      } else {
        playerRef.current.cueVideoById({
          videoId,
          startSeconds: targetStart,
          suggestedQuality,
        });
      }
    } catch (e) {
      console.warn('Error cueing/loading video:', e);
    }
  }, [videoId, tuneKey, syncQualityViewport]);

  // Update caption state (on/off, font size, language) immediately when user changes it
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current || prebufferOnly) return;
    applyCaptionSettings(
      playerRef.current,
      !!captionsEnabled && !disableCaptions,
      captionFontSize,
      captionLanguage,
      !!disableCaptions
    );
  }, [captionsEnabled, disableCaptions, captionFontSize, captionLanguage, prebufferOnly]);

  // Apply video quality preference immediately when user changes it
  useEffect(() => {
    const pref = preferredQuality ?? 'auto';
    const qualityChanged = appliedQualityRef.current !== pref;

    syncQualityViewport(playerRef.current, pref);
    if (!playerRef.current || !isReadyRef.current) return;

    applyQualitySettings(playerRef.current, pref, !prebufferOnly);

    if (!prebufferOnly) {
      appliedQualityRef.current = pref;

      // Reload active stream at current playback position so MSE flushes old chunks
      // and fetches segments matching the new virtual viewport quality immediately.
      if (qualityChanged && loadedVideoIdRef.current) {
        const p = playerRef.current;
        const vid = loadedVideoIdRef.current;
        let resumeSec = Math.floor(latestPropsRef.current.startSeconds || 0);
        try {
          const cur = typeof p.getCurrentTime === 'function' ? p.getCurrentTime() : 0;
          if (typeof cur === 'number' && Number.isFinite(cur) && cur > 0) {
            resumeSec = cur;
          }
        } catch {}

        const rafId = requestAnimationFrame(() => {
          if (!playerRef.current || !isReadyRef.current || loadedVideoIdRef.current !== vid) return;
          syncQualityViewport(playerRef.current, pref);
          lastQualityReportSigRef.current = '';
          pendingSeekRef.current =
            resumeSec > 3
              ? { videoId: vid, tuneKey: loadedTuneKeyRef.current, startSeconds: resumeSec }
              : null;
          const targetQuality = resolveTargetQuality(playerRef.current, pref);
          const payload: Record<string, unknown> = {
            videoId: vid,
            startSeconds: resumeSec,
          };
          if (targetQuality !== 'auto') {
            payload.suggestedQuality = targetQuality;
          }
          try {
            if (latestPropsRef.current.isPlaying) {
              playerRef.current.loadVideoById(payload);
            } else {
              playerRef.current.cueVideoById(payload);
            }
          } catch (err) {
            console.error('Error reloading video for quality change:', err);
          }
        });
        return () => cancelAnimationFrame(rafId);
      }
    }
  }, [preferredQuality, prebufferOnly, syncQualityViewport]);

  // Watchdog: If video is supposed to play actively but fails to start within 8s, skip to next video
  useEffect(() => {
    if (!videoId || !isPlaying || prebufferOnly) return;

    const watchdog = setTimeout(() => {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
      if (!hasStartedRef.current && playerRef.current && isReadyRef.current) {
        try {
          const state = playerRef.current.getPlayerState?.();
          if (state === -1 || state === 5) {
            console.warn(`Video ${videoId} failed to start playing within 8s (state ${state}), auto-skipping.`);
            triggerErrorOnce(100);
          }
        } catch {}
      }
    }, 8000);

    return () => {
      clearTimeout(watchdog);
    };
  }, [videoId, tuneKey, isPlaying, prebufferOnly]);

  // Handle play / pause and prebuffer-to-live promotion
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current || !videoId) return;

    try {
      if (prebufferOnly) {
        playerRef.current.mute?.();
        return;
      }
      const state = playerRef.current.getPlayerState?.();
      if (isPlaying) {
        if (isMuted) {
          playerRef.current.mute?.();
        } else {
          playerRef.current.unMute?.();
          playerRef.current.setVolume?.(100);
        }
        if (state !== 1) {
          playerRef.current.playVideo();
        }
      } else if (!isPlaying && state === 1) {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      console.warn('Error toggling play/pause:', e);
    }
  }, [isPlaying, prebufferOnly, isMuted, videoId]);

  // Handle mute / unmute changes
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current || prebufferOnly) return;
    try {
      if (isMuted) {
        playerRef.current.mute?.();
      } else {
        playerRef.current.unMute?.();
        playerRef.current.setVolume?.(100);
        if (latestPropsRef.current.isPlaying) {
          playerRef.current.playVideo?.();
        }
      }
    } catch (e) {
      console.warn('Error toggling mute:', e);
    }
  }, [isMuted, prebufferOnly]);

  // Periodic time updates, short detection & end-of-video guard
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!playerRef.current || !isReadyRef.current) return;
      try {
        const latest = latestPropsRef.current;
        if (latest.prebufferOnly || !latest.videoId) return;

        if (latest.disableCaptions) {
          suppressCaptions(playerRef.current);
        }

        const cur = playerRef.current.getCurrentTime?.() || 0;
        const dur = playerRef.current.getDuration?.() || 0;
        const state = playerRef.current.getPlayerState?.();

        latest.onTimeUpdate(cur, dur);

        if (latest.onQualityInfoChange) {
          const actualQuality = readActualPlaybackQuality(playerRef.current);
          const rawLevels =
            typeof playerRef.current.getAvailableQualityLevels === 'function'
              ? playerRef.current.getAvailableQualityLevels()
              : [];
          const availableQualities = Array.isArray(rawLevels) ? rawLevels.map(String) : [];
          const sig = `${actualQuality}|${availableQualities.join(',')}`;
          if (sig !== lastQualityReportSigRef.current && (actualQuality || availableQualities.length > 0)) {
            lastQualityReportSigRef.current = sig;
            latest.onQualityInfoChange({ actualQuality, availableQualities });
          }
        }

        // YouTube Shorts auto-exclude guard: All Shorts are <= 60s or marked #shorts
        const videoData = (playerRef.current as unknown as { getVideoData?: () => { title?: string } }).getVideoData?.();
        const rawTitle = videoData?.title || '';
        const isShortByTitle = /#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(rawTitle);

        if (!latest.allowShortClip && (dur > 0 && dur <= 60 || isShortByTitle) && shortCheckDoneRef.current !== latest.videoId) {
          shortCheckDoneRef.current = latest.videoId;
          console.warn(`[Tuned] Video ${latest.videoId} (${dur}s, "${rawTitle}") excluded as YouTube Short.`);
          latest.onShortDetected?.(latest.videoId);
          return;
        }

        // Bumper safety guard: if bumper clip title contains #shorts, trigger auto-fallback to 3D scene
        if (latest.allowShortClip && isShortByTitle && shortCheckDoneRef.current !== latest.videoId) {
          shortCheckDoneRef.current = latest.videoId;
          console.warn(`[Tuned] Bumper clip ${latest.videoId} ("${rawTitle}") excluded as YouTube Short.`);
          latest.onShortDetected?.(latest.videoId);
          return;
        }

        if (state === 0) {
          triggerEndedOnce();
          return;
        }

        if (latest.allowShortClip) {
          // Bumper clip: only trigger fallback if video has reached within 0.05s of the very end
          if (dur > 1 && cur >= dur - 0.05 && hasStartedRef.current) {
            triggerEndedOnce();
            return;
          }
        } else {
          // Main show video:
          if (dur > 60 && cur >= dur - 0.4 && hasStartedRef.current) {
            triggerEndedOnce();
            return;
          }
        }

        if (dur > 60 && latest.startSeconds >= dur - 2 && shortCheckDoneRef.current !== `seek_${latest.videoId}_${latest.tuneKey}`) {
          shortCheckDoneRef.current = `seek_${latest.videoId}_${latest.tuneKey}`;
          triggerEndedOnce();
        }
      } catch {}
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="yt-aspect-ratio-box"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '16/9',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
});

YouTubePlayer.displayName = 'YouTubePlayer';
