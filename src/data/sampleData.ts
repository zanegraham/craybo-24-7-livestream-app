import { Channel, MediaItem, Playlist, SlotType } from '../types/stream';

export const SAMPLE_MEDIA_ITEMS: MediaItem[] = [
  {
    id: '1',
    title: 'Sunset Lofi',
    artist: 'Chillhop Music',
    coverImage: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
    mediaUrl: 'https://storage.googleapis.com/media-session/sine-wave.mp3', // Demo audio from Google
    duration: 180,
    mediaType: 'audio',
    slotType: 'music',
  },
  {
    id: '2',
    title: 'Urban Nights',
    artist: 'City Beats',
    coverImage: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d',
    mediaUrl: 'https://storage.googleapis.com/media-session/sine-wave.mp3', // Demo audio from Google
    duration: 200,
    mediaType: 'audio',
    slotType: 'music',
  },
];

export const SAMPLE_PLAYLISTS: Playlist[] = [
  {
    id: '1',
    name: 'Lofi Beats',
    description: 'Chill beats for relaxation and focus',
    items: SAMPLE_MEDIA_ITEMS,
    slotType: 'music',
  },
  {
    id: '2',
    name: 'Local Artists Spotlight',
    description: 'Featuring upcoming local talent',
    items: [],
    slotType: 'localArtist',
  },
];

export const SAMPLE_CHANNEL: Channel = {
  id: '1',
  name: 'Craybo Music TV',
  description: 'Your 24/7 source for the best music and local artists',
  coverImage: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
  schedule: [
    {
      id: '1',
      startTime: '00:00',
      duration: 120,
      slotType: 'music',
    },
    {
      id: '2',
      startTime: '02:00',
      duration: 30,
      slotType: 'localArtist',
    },
  ],
};