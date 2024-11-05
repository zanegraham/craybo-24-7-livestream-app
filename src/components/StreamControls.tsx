import React from 'react';
import { Play, Pause, SkipForward, Settings } from 'lucide-react';

interface StreamControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSkip: () => void;
  onOpenSettings: () => void;
}

export function StreamControls({
  isPlaying,
  onTogglePlay,
  onSkip,
  onOpenSettings,
}: StreamControlsProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Stream Controls</h2>
        <button
          onClick={onOpenSettings}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Settings size={20} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={onTogglePlay}
          className="p-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        
        <button
          onClick={onSkip}
          className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          <SkipForward size={24} />
        </button>
      </div>
    </div>
  );
}