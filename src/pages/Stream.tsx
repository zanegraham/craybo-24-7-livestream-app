import React, { useState } from 'react';
import { Radio, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NowPlaying } from '../components/NowPlaying';
import { PlaylistManager } from '../components/PlaylistManager';
import { StreamControls } from '../components/StreamControls';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { SAMPLE_PLAYLISTS } from '../data/sampleData';

export function Stream() {
  const [playlists] = useState(SAMPLE_PLAYLISTS);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  const {
    currentTrack: currentItem,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    setPlaylist,
    skipTrack,
    handleVolumeChange,
    toggleMute,
  } = useAudioPlayer();

  const handlePlaylistSelect = (playlist) => {
    setCurrentPlaylist(playlist);
    setPlaylist(playlist);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio size={32} className="text-purple-500" />
            <h1 className="text-2xl font-bold">Craybo Stream</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {currentPlaylist && (
              <div className="text-gray-400">
                Now streaming: <span className="text-purple-400">{currentPlaylist.name}</span>
              </div>
            )}
            <Link
              to="/admin"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Stream Management"
            >
              <Settings size={24} />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <PlaylistManager
              playlists={playlists}
              currentPlaylist={currentPlaylist}
              onSelectPlaylist={handlePlaylistSelect}
              onCreatePlaylist={() => {}}
            />
            
            <StreamControls
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onSkip={skipTrack}
              onOpenSettings={() => {}}
            />
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-6">Stream Preview</h2>
            {currentItem ? (
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <img
                  src={currentItem.coverImage}
                  alt="Stream preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Select a playlist to start streaming</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <NowPlaying
        track={currentItem}
        isPlaying={isPlaying}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        onToggleMute={toggleMute}
        isMuted={isMuted}
      />
    </div>
  );
}