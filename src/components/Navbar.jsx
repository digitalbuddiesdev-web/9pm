import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Music } from 'lucide-react';
import ninePMLogoImg from '../assets/9pmlogo.jpg';

export default function Navbar({ data, onOpenReservation, isPlaying, onTogglePlay }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav-9pm py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity / Official Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group shrink-0"
          aria-label="Scroll to top"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex items-center justify-center p-0.5 transition-all transform group-hover:scale-105 bg-[#1A1A1A] border border-[#8F0000]/60 shadow-lg shadow-[#8F0000]/20">
            <img
              src={ninePMLogoImg}
              alt="9PM Bar & Cafe Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black tracking-wider text-base sm:text-lg leading-none uppercase text-[#FFFFFF]">
                9PM BAR
              </span>
              <span className="hidden md:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#8F0000]/20 text-[#FAF8F6] border border-[#8F0000]/40">
                Palolem &bull; Goa
              </span>
            </div>
            <p className="text-[10px] sm:text-xs tracking-tight text-zinc-400">
              Bar & Cafe • Nightlife
            </p>
          </div>
        </button>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1A1A1A]/80 p-1.5 rounded-full border border-white/10">
          <button
            onClick={() => scrollTo('the-experience')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('live-djs')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            DJ Nights
          </button>
          <button
            onClick={() => scrollTo('food-drinks')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Food & Drinks
          </button>
          <button
            onClick={() => scrollTo('hospitality')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Hospitality
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Location
          </button>
        </nav>

        {/* Right: CTA (Call Now / Sound / Reserve / Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Club Music Sound Toggle */}
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause 9PM Sound' : 'Play 9PM Sound'}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all border ${
              isPlaying
                ? 'bg-[#8F0000]/20 border-[#8F0000] text-white shadow-lg shadow-[#8F0000]/20 animate-pulse-slow'
                : 'bg-[#1A1A1A] border-white/10 hover:border-[#8F0000]/50 text-zinc-300 hover:text-white'
            }`}
            title={isPlaying ? 'Pause 9PM Sound' : 'Play 9PM Sound'}
          >
            <div className="flex items-center gap-0.5 h-3">
              <span className={`w-0.5 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-1 h-3' : 'h-1.5 opacity-40'}`} />
              <span className={`w-0.5 bg-[#B31212] rounded-full transition-all ${isPlaying ? 'eq-bar-2 h-3.5' : 'h-2 opacity-40'}`} />
              <span className={`w-0.5 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-3 h-2.5' : 'h-1 opacity-40'}`} />
            </div>
            <span className="hidden sm:inline">{isPlaying ? 'Sound ON' : 'Club Sound'}</span>
          </button>

          {/* Quick Call Link */}
          <a
            href={`tel:${data.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border border-white/10 bg-[#1A1A1A] hover:bg-[#242424] text-white transition-all"
            title={`Call ${data.fullName}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#8F0000]" />
            <span className="font-mono">{data.phoneDisplay}</span>
          </a>

          {/* Reserve Button */}
          <button
            onClick={onOpenReservation}
            className="px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1.5 btn-9pm-primary"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Reserve</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#1A1A1A] border border-white/10 text-zinc-300 hover:text-white lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/95 border-b border-white/10 px-4 py-5 space-y-3 backdrop-blur-xl animate-fadeIn">
          <button
            onClick={() => scrollTo('the-experience')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            The Experience
          </button>
          <button
            onClick={() => scrollTo('live-djs')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Live DJ Nights & Sound
          </button>
          <button
            onClick={() => scrollTo('food-drinks')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Food & Drinks Menu
          </button>
          <button
            onClick={() => scrollTo('hospitality')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Hospitality & Soul
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Guest Reviews (4.6 ★)
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Visual Gallery
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5"
          >
            Find Us in Palolem
          </button>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                onTogglePlay();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#1A1A1A] border border-white/10 text-xs font-bold text-white"
            >
              <span className="flex items-center gap-2">
                <Music className="w-4 h-4 text-[#8F0000]" />
                <span>9PM Bar & Club Music</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${isPlaying ? 'bg-[#8F0000] text-white' : 'bg-white/10 text-zinc-400'}`}>
                {isPlaying ? 'Playing' : 'Paused'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
