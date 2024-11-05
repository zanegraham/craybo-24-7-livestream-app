import React, { useState } from 'react';
import { ArrowLeft, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChannelSchedule } from '../components/admin/ChannelSchedule';
import { MediaLibrary } from '../components/admin/MediaLibrary';
import { SAMPLE_CHANNEL, SAMPLE_MEDIA_ITEMS } from '../data/sampleData';
import { TimeSlot, MediaItem } from '../types/stream';

export function Admin() {
  const [channel] = useState(SAMPLE_CHANNEL);
  const [mediaItems] = useState(SAMPLE_MEDIA_ITEMS);

  const handleAddTimeSlot = () => {
    // Implement slot creation logic
  };

  const handleEditSlot = (slot: TimeSlot) => {
    // Implement slot editing logic
  };

  const handleAddMedia = () => {
    // Implement media upload logic
  };

  const handleSelectMedia = (item: MediaItem) => {
    // Implement media selection logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Stream
            </Link>
            <div className="h-6 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <Settings size={20} className="text-purple-500" />
              <h1 className="text-xl font-bold">Stream Management</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChannelSchedule
              channel={channel}
              onAddSlot={handleAddTimeSlot}
              onEditSlot={handleEditSlot}
            />
            <MediaLibrary
              items={mediaItems}
              onAddMedia={handleAddMedia}
              onSelectMedia={handleSelectMedia}
            />
          </div>
        </div>
      </main>
    </div>
  );
}