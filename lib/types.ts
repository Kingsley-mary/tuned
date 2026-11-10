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
  error?: string;
}

export interface CustomSource {
  channelId: string;
  handle: string;
  title: string;
}

export interface UserState {
  pickedCategoryIds: string[];
  customSources: CustomSource[];
  lastChannelIndex: number;
  lastVideoId?: string;
  lastCategoryIndex?: number;
  autoplay: boolean;
  isReturningUser: boolean;
  theme: 'dark' | 'light' | 'system';
}

export type ScreenMode = 'power' | 'pick' | 'tuning' | 'watch' | 'guide' | 'manage' | 'off';
