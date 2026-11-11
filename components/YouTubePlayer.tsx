'use client';

import React, { useEffect, useRef } from 'react';

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

interface YouTubePlayerProps {
  videoId: string;
  startSeconds?: number;
  tuneKey?: number;
  isPlaying: boolean;
  isMuted?: boolean;
  captionsEnabled?: boolean;
  captionFontSize?: CaptionFontSize;
  captionLanguage?: string;
  onCaptionTracksChange?: (tracks: CaptionTrack[]) => void;
  onEnded: () => void;
  onError: (errorCode: number) => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
  onBuffering: (isBuffering: boolean) => void;
  onReady?: () => void;
  onShortDetected?: (videoId: string) => void;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  startSeconds = 0,
  tuneKey = 0,
  isPlaying,
  isMuted = false,
  captionsEnabled = false,
  captionFontSize = 0,
  captionLanguage = 'auto',
  onCaptionTracksChange,
  onEnded,
  onError,
  onTimeUpdate,
  onBuffering,
  onReady,
  onShortDetected,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);
  const shortCheckDoneRef = useRef<string | null>(null);
  const endedFiredRef = useRef<string | null>(null);
  const loadedVideoIdRef = useRef<string>('');
  const loadedTuneKeyRef = useRef<number>(tuneKey);

  // Keep latest props in a ref so YT.Player event listeners never call stale closures
  const latestPropsRef = useRef({
    videoId,
    startSeconds,
    tuneKey,
    isPlaying,
    isMuted,
    captionsEnabled,
    captionFontSize,
    captionLanguage,
    onCaptionTracksChange,
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
      captionsEnabled,
      captionFontSize,
      captionLanguage,
      onCaptionTracksChange,
      onEnded,
      onError,
      onTimeUpdate,
      onBuffering,
      onReady,
      onShortDetected,
    };
  });

  // Read available caption tracks and apply enable/disable, language, and fontSize
  const applyCaptionSettings = (
    player: any,
    enabled: boolean,
    fontSize: CaptionFontSize,
    preferredLang: string = 'auto'
  ) => {
    if (!player) return;
    try {
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
        player.setOption?.('captions', 'track', {});
        player.setOption?.('cc', 'track', {});
        player.unloadModule?.('captions');
        player.unloadModule?.('cc');
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

  // Helper to fire onEnded at most once per (videoId, tuneKey)
  const triggerEndedOnce = () => {
    const { videoId: curId, tuneKey: curKey, onEnded: handleEnded } = latestPropsRef.current;
    const key = `${curId}_${curKey}`;
    if (endedFiredRef.current === key) return;
    endedFiredRef.current = key;
    handleEnded();
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
            cc_load_policy: initial.captionsEnabled ? 1 : 0,
            hl: 'en',
            start: Math.floor(initial.startSeconds || 0),
            iv_load_policy: 3,
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
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
                if (cur.isMuted) {
                  playerRef.current?.mute?.();
                } else {
                  playerRef.current?.unMute?.();
                  playerRef.current?.setVolume?.(100);
                }
              } catch {}

              applyCaptionSettings(
                playerRef.current,
                !!cur.captionsEnabled,
                cur.captionFontSize ?? 0,
                cur.captionLanguage ?? 'auto'
              );

              cur.onReady?.();

              // If videoId changed while player was initializing, load the latest videoId
              if (cur.videoId && cur.videoId !== loadedVideoIdRef.current) {
                loadedVideoIdRef.current = cur.videoId;
                loadedTuneKeyRef.current = cur.tuneKey;
                playerRef.current?.loadVideoById?.({
                  videoId: cur.videoId,
                  startSeconds: Math.floor(cur.startSeconds || 0),
                });
              } else if (cur.isPlaying) {
                if (cur.startSeconds && cur.startSeconds > 0) {
                  try {
                    playerRef.current?.seekTo?.(cur.startSeconds, true);
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
                !!cur.captionsEnabled,
                cur.captionFontSize ?? 0,
                cur.captionLanguage ?? 'auto'
              );
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              const cur = latestPropsRef.current;
              // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
              if (event.data === 1) {
                hasStartedRef.current = true;
                cur.onBuffering(false);
                try {
                  if (cur.isMuted) {
                    playerRef.current?.mute?.();
                  } else {
                    playerRef.current?.unMute?.();
                    playerRef.current?.setVolume?.(100);
                  }
                } catch {}
                // Re-apply caption state once playback starts so forced creator captions respect user setting
                applyCaptionSettings(
                  playerRef.current,
                  !!cur.captionsEnabled,
                  cur.captionFontSize ?? 0,
                  cur.captionLanguage ?? 'auto'
                );
                setTimeout(() => {
                  if (!isCancelled) {
                    const latest = latestPropsRef.current;
                    applyCaptionSettings(
                      playerRef.current,
                      !!latest.captionsEnabled,
                      latest.captionFontSize ?? 0,
                      latest.captionLanguage ?? 'auto'
                    );
                  }
                }, 600);
              } else if (event.data === 0) {
                cur.onBuffering(false);
                triggerEndedOnce();
              } else if (event.data === 3) {
                cur.onBuffering(true);
              } else if (event.data === 5 && cur.isPlaying) {
                try {
                  playerRef.current?.playVideo?.();
                } catch {}
              } else {
                cur.onBuffering(false);
              }
            },
            onError: (event: any) => {
              const cur = latestPropsRef.current;
              console.warn('YouTube Player reported error:', event.data, 'for video:', cur.videoId);
              cur.onError(event.data);
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

  // Update videoId or start position when changed
  useEffect(() => {
    latestPropsRef.current.onCaptionTracksChange?.([]);
    if (!playerRef.current || !isReadyRef.current || !videoId) return;

    hasStartedRef.current = false;
    const targetStart = Math.floor(startSeconds || 0);

    try {
      if (loadedVideoIdRef.current === videoId && loadedTuneKeyRef.current === tuneKey) {
        playerRef.current.seekTo?.(targetStart, true);
        if (isPlaying) {
          playerRef.current.playVideo?.();
        }
      } else {
        loadedVideoIdRef.current = videoId;
        loadedTuneKeyRef.current = tuneKey;
        if (isPlaying) {
          playerRef.current.loadVideoById({
            videoId,
            startSeconds: targetStart,
          });
          setTimeout(() => {
            try {
              if (latestPropsRef.current.isPlaying) {
                playerRef.current?.playVideo?.();
              }
            } catch {}
          }, 150);
        } else {
          playerRef.current.cueVideoById({
            videoId,
            startSeconds: targetStart,
          });
        }
      }
    } catch (e) {
      console.warn('Error cueing/loading video:', e);
    }
  }, [videoId, startSeconds, tuneKey, isPlaying]);

  // Update caption state (on/off, font size, language) immediately when user changes it
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current) return;
    applyCaptionSettings(playerRef.current, !!captionsEnabled, captionFontSize, captionLanguage);
  }, [captionsEnabled, captionFontSize, captionLanguage]);

  // Watchdog: If video is supposed to play but fails to start within 8s, skip to next video
  useEffect(() => {
    if (!videoId || !isPlaying) return;

    const watchdog = setTimeout(() => {
      if (!hasStartedRef.current && playerRef.current && isReadyRef.current) {
        try {
          const state = playerRef.current.getPlayerState?.();
          if (state === -1 || state === 5) {
            console.warn(`Video ${videoId} failed to start playing within 8s (state ${state}), auto-skipping.`);
            latestPropsRef.current.onError(100);
          }
        } catch {}
      }
    }, 8000);

    return () => {
      clearTimeout(watchdog);
    };
  }, [videoId, tuneKey, isPlaying]);

  // Handle play / pause changes
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current) return;

    try {
      const state = playerRef.current.getPlayerState?.();
      if (isPlaying && state !== 1) {
        playerRef.current.playVideo();
      } else if (!isPlaying && state === 1) {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      console.warn('Error toggling play/pause:', e);
    }
  }, [isPlaying]);

  // Handle mute / unmute changes
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current) return;
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
  }, [isMuted]);

  // Periodic time updates, short detection & end-of-video guard
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!playerRef.current || !isReadyRef.current) return;
      try {
        const cur = playerRef.current.getCurrentTime?.() || 0;
        const dur = playerRef.current.getDuration?.() || 0;
        const state = playerRef.current.getPlayerState?.();
        const latest = latestPropsRef.current;

        latest.onTimeUpdate(cur, dur);

        // YouTube Shorts auto-exclude guard: All Shorts are <= 60s
        if (dur > 0 && dur <= 60 && shortCheckDoneRef.current !== latest.videoId) {
          shortCheckDoneRef.current = latest.videoId;
          console.warn(`[Tuned] Video ${latest.videoId} is <=60s (${dur}s). Excluded as YouTube Short.`);
          latest.onShortDetected?.(latest.videoId);
          return;
        }

        if (state === 0 || (dur > 60 && cur >= dur - 0.4 && hasStartedRef.current)) {
          triggerEndedOnce();
          return;
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
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
