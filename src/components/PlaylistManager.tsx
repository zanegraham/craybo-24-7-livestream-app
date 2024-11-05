import React from 'react';
import { ListMusic, Play, Plus } from 'lucide-react';
import { Playlist } from '../types/stream';

interface PlaylistManagerProps {
  playlists: Playlist[];
  currentPlaylist: Playlist | null;
  onSelectPlaylist: (playlist: Playlist) => void;
  onCreatePlaylist: () => void;
}

export function PlaylistManager({
  playlists,
  currentPlaylist,
  onSelectPlaylist,
  onCreatePlaylist,
}: PlaylistManagerProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Playlists</h2>
        <button
          onClick={onCreatePlaylist}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus size={20} />
          New Playlist
        </button>
      </div>

      <div className="space-y-2">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => onSelectPlaylist(playlist)}
            className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
              currentPlaylist?.id === playlist.id
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <ListMusic size={20} className="text-purple-400" />
            <div className="flex-1 text-left">
              <div className="font-medium">{playlist.name}</div>
              <div className="text-sm text-gray-400">
                {playlist.items.length} tracks | {playlist.slotType}
              </div>
            </div>
            {currentPlaylist?.id === playlist.id && (
              <Play size={16} className="text-purple-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}