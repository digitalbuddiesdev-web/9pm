import React, { useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, Music, Disc, ChevronDown, ChevronUp } from 'lucide-react';

export const TRACKS = [
  {
    id: 1,
    title: '9PM Resident Sessions',
    artist: 'Sir Leaks (DCM Remix)',
    genre: 'Deep House & Club Beat',
    src: `${process.env.PUBLIC_URL || ''}/audio/club-beat.mp3`
  },
  {
    id: 2,
    title: 'Coastal Late Night Vibe',
    artist: 'Sir Leaks',
    genre: 'Melodic House & Techno',
    src: `${process.env.PUBLIC_URL || ''}/audio/deep-groove.mp3`
  }
];

export default function MusicPlayer({
  isPlaying,
  onTogglePlay,
  currentTrackIndex,
  onNextTrack,
  isMuted,
  onToggleMute,
  isMinimized,
  onToggleMinimize
}) {
  const audioRef = useRef(null);
  const currentTrack = TRACKS[currentTrackIndex] || TRACKS[0];

  // Sync HTML5 Audio element with isPlaying state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback prevented by browser policy:', err);
          onTogglePlay(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrackIndex, onTogglePlay]);

  // Sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleTrackEnded = () => {
    if (onNextTrack) {
      onNextTrack();
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop={TRACKS.length === 1}
        onEnded={handleTrackEnded}
        preload="metadata"
      />

      {/* Floating Audio Controller */}
      <div
        className="fixed z-40 transition-all duration-300 bottom-24 sm:bottom-6 right-4 sm:right-6 select-none"
        style={{ maxWidth: 'calc(100vw - 2rem)' }}
      >
        {isMinimized ? (
          /* Minimized Circular Pill */
          <button
            onClick={() => onToggleMinimize(false)}
            aria-label="Expand 9PM Club Music Player"
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A1A1A]/95 border border-[#8F0000]/50 backdrop-blur-xl shadow-2xl shadow-black hover:border-[#8F0000] transition-all hover:scale-105"
          >
            <div className={`p-1.5 rounded-full bg-[#8F0000] text-white ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
              <Disc className="w-4 h-4" />
            </div>

            {/* Live Mini Wave */}
            <div className="flex items-center gap-0.5 h-4">
              <span className={`w-0.5 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-1 h-3' : 'h-1.5 opacity-40'}`} />
              <span className={`w-0.5 bg-[#B31212] rounded-full transition-all ${isPlaying ? 'eq-bar-2 h-4' : 'h-2 opacity-40'}`} />
              <span className={`w-0.5 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-3 h-3' : 'h-1.5 opacity-40'}`} />
            </div>

            <span className="text-xs font-bold text-white tracking-wide">
              {isPlaying ? 'Now Playing' : 'Club Music'}
            </span>

            <ChevronUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
          </button>
        ) : (
          /* Expanded Card Player */
          <div className="w-80 rounded-2xl bg-[#141414]/95 border border-[#8F0000]/40 backdrop-blur-xl p-4 shadow-2xl shadow-black/90 text-white animate-fadeIn">
            {/* Header: Brand & Minimize Button */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8F0000] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#FAF8F6]">
                  9PM Sound Experience
                </span>
              </div>
              <button
                onClick={() => onToggleMinimize(true)}
                aria-label="Minimize Player"
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Track Info & Visualizer */}
            <div className="py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 text-[#8F0000] relative overflow-hidden">
                  <Music className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : 'opacity-60'}`} />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-[#8F0000]/10 pointer-events-none" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-xs text-white truncate">
                    {currentTrack.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 truncate">
                    {currentTrack.genre}
                  </p>
                </div>
              </div>

              {/* Animated Equalizer Waveform */}
              <div className="flex items-center gap-1 h-6 shrink-0 px-2 py-1 rounded-lg bg-black/40 border border-white/5">
                <span className={`w-1 bg-[#8F0000] rounded-full ${isPlaying ? 'eq-bar-1 h-5' : 'h-1.5 opacity-30'}`} />
                <span className={`w-1 bg-[#B31212] rounded-full ${isPlaying ? 'eq-bar-2 h-6' : 'h-2 opacity-30'}`} />
                <span className={`w-1 bg-[#8F0000] rounded-full ${isPlaying ? 'eq-bar-3 h-4' : 'h-1.5 opacity-30'}`} />
                <span className={`w-1 bg-[#B31212] rounded-full ${isPlaying ? 'eq-bar-4 h-6' : 'h-2 opacity-30'}`} />
                <span className={`w-1 bg-[#8F0000] rounded-full ${isPlaying ? 'eq-bar-5 h-3' : 'h-1 opacity-30'}`} />
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              {/* Mute / Unmute Button */}
              <button
                onClick={onToggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Center Playback Controls */}
              <div className="flex items-center gap-2">
                {/* Main Play / Pause Button */}
                <button
                  onClick={() => onTogglePlay(!isPlaying)}
                  aria-label={isPlaying ? 'Pause Club Music' : 'Play Club Music'}
                  className="px-4 py-2 rounded-xl btn-9pm-primary flex items-center gap-2 text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#8F0000]/40"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                {/* Next Track Switcher */}
                <button
                  onClick={onNextTrack}
                  aria-label="Next Track"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Switch Track"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Track Badge */}
              <span className="text-[10px] font-mono text-zinc-500 font-semibold">
                {currentTrackIndex + 1}/{TRACKS.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
