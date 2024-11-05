import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { MediaItem } from '../types/stream';

interface NowPlayingProps {
  track: MediaItem | null;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  onVolumeChange: (value: number) => void;
  onToggleMute: () => void;
}

export function NowPlaying({
  track,
  isPlaying,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}: NowPlayingProps) {
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
        <img
          src={track.coverImage}
          alt={track.title}
          className="w-12 h-12 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <div className="font-medium">{track.title}</div>
          <div className="text-sm text-gray-400">{track.artist}</div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleMute}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-24 accent-purple-500"
          />
        </div>
      </div>
    </div>
  );
}