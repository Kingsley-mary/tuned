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
  isPlaying: boolean;
  onEnded: () => void;
  onError: (errorCode: number) => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
  onBuffering: (isBuffering: boolean) => void;
  onReady?: () => void;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
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
            iv_load_policy: 3,
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
          },
          events: {
            onReady: () => {
              if (isCancelled) return;
              isReadyRef.current = true;
              onReady?.();
              if (isPlaying) {
                playerRef.current?.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
              if (event.data === 0) {
                onEnded();
              } else if (event.data === 3) {
                onBuffering(true);
              } else {
                onBuffering(false);
              }
            },
            onError: (event: any) => {
              console.warn('YouTube Player reported error:', event.data);
              // 100: not found, 101/150: embedding not allowed
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

  // Update videoId when changed
  useEffect(() => {
    if (!playerRef.current || !isReadyRef.current || !videoId) return;

    try {
      if (isPlaying) {
        playerRef.current.loadVideoById(videoId);
      } else {
        playerRef.current.cueVideoById(videoId);
      }
    } catch (e) {
      console.warn('Error cueing/loading video:', e);
    }
  }, [videoId]);

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
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
