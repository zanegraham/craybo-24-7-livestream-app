import React from 'react';
import { Clock, Plus } from 'lucide-react';
import { Channel, TimeSlot } from '../../types/stream';

interface ChannelScheduleProps {
  channel: Channel;
  onAddSlot: () => void;
  onEditSlot: (slot: TimeSlot) => void;
}

export function ChannelSchedule({ channel, onAddSlot, onEditSlot }: ChannelScheduleProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Channel Schedule</h2>
        <button
          onClick={onAddSlot}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus size={20} />
          Add Time Slot
        </button>
      </div>

      <div className="space-y-4">
        {channel.schedule.map((slot) => (
          <button
            key={slot.id}
            onClick={() => onEditSlot(slot)}
            className="w-full flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Clock size={20} className="text-purple-400" />
            <div className="flex-1">
              <div className="font-medium">{slot.startTime}</div>
              <div className="text-sm text-gray-400">
                Duration: {slot.duration}min | Type: {slot.slotType}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}