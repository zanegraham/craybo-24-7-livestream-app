import { useState, useRef, useEffect } from 'react';
import { MediaItem, Playlist } from '../types/stream';

export function useAudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const setPlaylist = (playlist: Playlist) => {
    setCurrentPlaylist(playlist);
    setCurrentTrackIndex(0);
    if (playlist.items.length > 0) {
      setCurrentTrack(playlist.items[0]);
      if (audioRef.current) {
        audioRef.current.src = playlist.items[0].mediaUrl;
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrack = () => {
    if (!currentPlaylist) return;

    const nextIndex = (currentTrackIndex + 1) % currentPlaylist.items.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrack(currentPlaylist.items[nextIndex]);
    
    if (audioRef.current) {
      audioRef.current.src = currentPlaylist.items[nextIndex].mediaUrl;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return {
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    setPlaylist,
    skipTrack,
    handleVolumeChange,
    toggleMute,
  };
}