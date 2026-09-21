import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import MusicPlayer, { TRACKS } from './components/MusicPlayer';
import Home from './pages/Home';
import { ninePMData } from './data/ninePM';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMusicMinimized, setIsMusicMinimized] = useState(false);

  const handleTogglePlay = (val) => {
    setIsPlaying(typeof val === 'boolean' ? val : !isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Global Navbar */}
      <Navbar
        data={ninePMData}
        onOpenReservation={() => setIsReservationOpen(true)}
        isPlaying={isPlaying}
        onTogglePlay={() => handleTogglePlay()}
      />

      {/* Main Home Page */}
      <main>
        <Home
          data={ninePMData}
          onOpenReservation={() => setIsReservationOpen(true)}
          isPlaying={isPlaying}
          onTogglePlay={() => handleTogglePlay()}
          currentTrack={TRACKS[currentTrackIndex]}
        />
      </main>

      {/* Global Club Music Player */}
      <MusicPlayer
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        currentTrackIndex={currentTrackIndex}
        onNextTrack={handleNextTrack}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        isMinimized={isMusicMinimized}
        onToggleMinimize={setIsMusicMinimized}
      />

      {/* Global Footer */}
      <Footer data={ninePMData} />

      {/* Floating Bottom Action Bar for Mobile Visitors */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="p-2 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center justify-between gap-2 bg-[#1A1A1A]/95 border-[#8F0000]/40 text-white shadow-black/80">
          {/* Quick Call Button */}
          <a
            href={`tel:${ninePMData.phone}`}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border bg-[#0A0A0A] border-white/10 text-white"
          >
            <Phone className="w-4 h-4 fill-current text-[#8F0000]" />
            <span>Call Now</span>
          </a>

          {/* Quick Table Reserve */}
          <button
            onClick={() => setIsReservationOpen(true)}
            className="flex-1 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg btn-9pm-primary"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        data={ninePMData}
      />
    </div>
  );
}
