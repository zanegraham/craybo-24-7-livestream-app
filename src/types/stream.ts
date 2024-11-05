export type MediaType = 'audio' | 'video';
export type SlotType = 'music' | 'musicVideo' | 'localArtist' | 'advertisement';

export interface MediaItem {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  mediaUrl: string;
  duration: number;
  mediaType: MediaType;
  slotType: SlotType;
}

export interface TimeSlot {
  id: string;
  startTime: string; // 24h format "HH:mm"
  duration: number; // in minutes
  slotType: SlotType;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  schedule: TimeSlot[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  items: MediaItem[];
  slotType: SlotType;
}

export interface StreamState {
  isPlaying: boolean;
  currentItem: MediaItem | null;
  currentPlaylist: Playlist | null;
  volume: number;
  currentTime: number;
  backupPlaylist: Playlist | null;
}