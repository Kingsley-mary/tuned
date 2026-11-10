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
  isPlaying: boolean;
  onEnded: () => void;
  onError: (errorCode: number) => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
  onBuffering: (isBuffering: boolean) => void;
  onReady?: () => void;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  startSeconds = 0,
  isPlaying,
  onEnded,
  onError,
  onTimeUpdate,
  onBuffering,
  onReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);

  // Initialize YT Player once API is loaded
  useEffect(() => {
    let isCancelled = false;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player || !containerRef.current) return;
      if (playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '100%',
          width: '100%',
          videoId: videoId || '',
          playerVars: {
            autoplay: 0,
            controls: 0, // PRD W-4: Turn off native controls, custom controls below
            modestbranding: 1,
            rel: 0,
            playsinline: 1, // PRD P-5: required for iOS Safari
            fs: 1, // Enable fullscreen
            start: Math.floor(startSeconds || 0),
            iv_load_policy: 3,
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              isReadyRef.current = true;
              
              // Ensure iframe has proper fullscreen attributes
              try {
                const iframe = event.target?.getIframe?.();
                if (iframe) {
                  iframe.setAttribute('allowfullscreen', 'true');
                  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
                }
              } catch {}

              onReady?.();
              if (isPlaying) {
                if (startSeconds && startSeconds > 0) {
                  try {
                    playerRef.current?.seekTo?.(startSeconds, true);
                  } catch {}
                }
                playerRef.current?.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
              if (event.data === 1) {
                hasStartedRef.current = true;
                onBuffering(false);
              } else if (event.data === 0) {
                onEnded();
              } else if (event.data === 3) {
                onBuffering(true);
              } else {
                onBuffering(false);
              }
            },
            onError: (event: any) => {
              console.warn('YouTube Player reported error:', event.data, 'for video:', videoId);
              // Auto-advance immediately on error (100: not found/deleted, 101/150: embedding disabled)
              onError(event.data);
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
    try {
      if (isPlaying) {
        playerRef.current.loadVideoById({
          videoId,
          startSeconds: Math.floor(startSeconds || 0),
        });
      } else {
        playerRef.current.cueVideoById({
          videoId,
          startSeconds: Math.floor(startSeconds || 0),
        });
      }
    } catch (e) {
      console.warn('Error cueing/loading video:', e);
    }
  }, [videoId, startSeconds]);

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
            onError(100);
          }
        } catch {}
      }
    }, 6000);

    return () => clearTimeout(watchdog);
  }, [videoId, isPlaying, onError]);

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

  // Periodic time updates
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!playerRef.current || !isReadyRef.current) return;
      try {
        const cur = playerRef.current.getCurrentTime?.() || 0;
        const dur = playerRef.current.getDuration?.() || 0;
        onTimeUpdate(cur, dur);
      } catch {}
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onTimeUpdate]);

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
