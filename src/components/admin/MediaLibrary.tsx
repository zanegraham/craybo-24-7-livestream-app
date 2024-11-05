import React from 'react';
import { Music, Video, Upload } from 'lucide-react';
import { MediaItem } from '../../types/stream';

interface MediaLibraryProps {
  items: MediaItem[];
  onAddMedia: () => void;
  onSelectMedia: (item: MediaItem) => void;
}

export function MediaLibrary({ items, onAddMedia, onSelectMedia }: MediaLibraryProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Media Library</h2>
        <button
          onClick={onAddMedia}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Upload size={20} />
          Add Media
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectMedia(item)}
            className="group relative aspect-video bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                {item.mediaType === 'audio' ? (
                  <Music size={16} className="text-purple-400" />
                ) : (
                  <Video size={16} className="text-purple-400" />
                )}
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <div className="text-xs text-gray-400">{item.artist}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}