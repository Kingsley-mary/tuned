'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  startSeconds?: number;
  tuneKey?: number;
  isPlaying: boolean;
  isMuted?: boolean;
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
  onEnded,
  onError,
  onTimeUpdate,
  onBuffering,
  onReady,
  onShortDetected,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      onEnded,
      onError,
      onTimeUpdate,
      onBuffering,
      onReady,
      onShortDetected,
    };
  });

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
      if (!window.YT || !window.YT.Player || !containerRef.current) return;
      if (playerRef.current) return;

      const initial = latestPropsRef.current;

      try {
        loadedVideoIdRef.current = initial.videoId || '';
        loadedTuneKeyRef.current = initial.tuneKey;
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '100%',
          width: '100%',
          videoId: initial.videoId || '',
          playerVars: {
            autoplay: initial.isPlaying ? 1 : 0,
            controls: 0, // PRD W-4: Turn off native controls, custom controls below
            modestbranding: 1,
            rel: 0,
            playsinline: 1, // PRD P-5: required for iOS Safari
            fs: 1, // Enable fullscreen
            start: Math.floor(initial.startSeconds || 0),
            iv_load_policy: 3,
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              isReadyRef.current = true;
              const cur = latestPropsRef.current;

              // Ensure iframe has proper fullscreen attributes
              try {
                const iframe = event.target?.getIframe?.();
                if (iframe) {
                  iframe.setAttribute('allowfullscreen', 'true');
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
                }
              } catch {}

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
            onStateChange: (event: any) => {
              if (isCancelled) return;
              const cur = latestPropsRef.current;
              // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
              if (event.data === 1) {
                hasStartedRef.current = true;
                cur.onBuffering(false);
              } else if (event.data === 0) {
                cur.onBuffering(false);
                triggerEndedOnce();
              } else if (event.data === 3) {
                cur.onBuffering(true);
              } else if (event.data === 5 && cur.isPlaying) {
                // If video entered cued state while isPlaying is true, start playback immediately
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
              // Auto-advance immediately on error (100: not found/deleted, 101/150: embedding disabled)
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

  // Watchdog: If video is supposed to play but fails to start or gets stuck in unstarted state
  useEffect(() => {
    if (!videoId || !isPlaying) return;

    const watchdog = setTimeout(() => {
      if (!hasStartedRef.current && playerRef.current) {
        try {
          const state = playerRef.current.getPlayerState?.();
          // If still unstarted (-1) or cued (5) after 6 seconds while expecting play
          if (state === -1 || state === 5) {
            console.warn(`Video ${videoId} failed to start playing within 6s (state ${state}), auto-skipping.`);
            latestPropsRef.current.onError(100);
          }
        } catch {}
      }
    }, 6000);

    return () => clearTimeout(watchdog);
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

        // Guard against initial seek landing past the actual end of the video,
        // or YouTube reaching the final 0.4s / ended state (0)
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
        aspectRatio: '16/9',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
