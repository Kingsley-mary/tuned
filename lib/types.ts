export interface Category {
  id: string;
  name: string;
  hue: number;
  description?: string;
  sourceChannelIds?: string[];
}

export interface SourceChannel {
  youtubeChannelId: string;
  title: string;
  uploadsPlaylistId?: string;
}

export interface Video {
  youtubeVideoId: string;
  title: string;
  sourceChannelId: string;
  sourceChannelTitle: string;
  thumbnailUrl: string;
  durationSec: number;
  publishedAt?: string;
  embeddable?: boolean;
  fetchedAt?: number;
}

export interface ChannelLineup {
  categoryId: string;
  categoryName: string;
  hue: number;
  videos: Video[];
  builtAt: number;
  description?: string;
  error?: string;
}

export interface CustomSource {
  channelId: string;
  handle: string;
  title: string;
}

export interface SavedCustomChannel {
  id: string;
  title: string;
  hue: number;
  youtubeChannelId: string;
  videos: Video[];
}

export interface QuotaStatus {
  used: number;
  limit: number;
  remaining: number;
  isExceeded: boolean;
  resetAt: number;
}

export interface UserState {
  pickedCategoryIds: string[];
  customSources: CustomSource[];
  lastChannelIndex: number;
  lastVideoId?: string;
  lastCategoryIndex?: number;
  autoplay: boolean;
  isReturningUser: boolean;
  theme?: 'dark' | 'light' | 'system'; // deprecated: Tuned is dark-only
}

export interface YouTubeBumperClip {
  youtubeVideoId: string;
  label: string;
  durationSec: number;
  sourceChannelId?: string;
  categoryId?: string;
}

export interface CatalogSnapshot {
  lineups: Record<string, ChannelLineup>;
  dynamicBumpers?: Record<string, YouTubeBumperClip[]>;
}

export type ScreenMode = 'power' | 'pick' | 'tuning' | 'watch' | 'guide' | 'manage' | 'off';
