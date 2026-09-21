import React, { useState } from 'react';
import {
  Phone,
  Calendar,
  Music,
  Wine,
  UtensilsCrossed,
  Volume2,
  ChevronDown,
  Star,
  Radio,
  Disc3,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ReviewSection from '../components/ReviewSection';
import MasonryGallery from '../components/MasonryGallery';
import SocialSection from '../components/SocialSection';
import LocationSection from '../components/LocationSection';
import ninePMLogoImg from '../assets/9pmlogo.jpg';

export default function Home({ data, onOpenReservation, isPlaying, onTogglePlay, currentTrack }) {
  const [activeMenuCategory, setActiveMenuCategory] = useState('All');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredMenuItems = activeMenuCategory === 'All'
    ? data.foodAndDrinks.items
    : data.foodAndDrinks.items.filter((item) => item.category === activeMenuCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
      
      {/* =========================================================================
          HERO SECTION (Dark, Bold, Cinematic, Maroon Accents)
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85"
            alt="9PM Nightlife & DJ"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-125"
          />
          {/* Cinematic Dark & Deep Maroon Atmosphere Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/90" />
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#8F0000]/20 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2A0000]/40 blur-[160px] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Logo & Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1A1A]/90 border border-[#8F0000]/40 backdrop-blur-md mb-6 shadow-xl shadow-black/80">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-black shrink-0 border border-white/20">
              <img src={ninePMLogoImg} alt="9PM Official Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F6]">
              Palolem &bull; South Goa Nightlife
            </span>
            <div className="flex items-center gap-1 pl-2 border-l border-white/20 text-xs font-bold text-white">
              <Star className="w-3.5 h-3.5 fill-[#8F0000] text-[#8F0000]" />
              <span>4.6</span>
              <span className="text-zinc-400 font-normal text-[11px]">(1,070+ Reviews)</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none uppercase">
            Party. Chill. <br />
            <span className="text-[#8F0000] relative inline-block">
              Unwind.
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8F0000] via-[#B31212] to-transparent rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 text-base sm:text-xl lg:text-2xl text-zinc-300 font-normal max-w-3xl leading-relaxed">
            {data.heroSubtitle}
          </p>

          {/* Interactive Equalizer Wave Accent & Club Sound Trigger */}
          <div className="my-8 flex flex-col items-center gap-3">
            <button
              onClick={onTogglePlay}
              className="group flex items-center gap-3.5 px-5 py-2.5 rounded-full bg-[#1A1A1A]/95 hover:bg-[#242424] border border-[#8F0000]/40 hover:border-[#8F0000] transition-all backdrop-blur-md shadow-xl hover:scale-105"
              aria-label={isPlaying ? 'Pause 9PM Club Music' : 'Play 9PM Club Music'}
            >
              {/* Equalizer Bars */}
              <div className="flex items-center justify-center gap-1 h-5">
                <div className={`w-1 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-1 h-5' : 'h-2 opacity-50'}`} />
                <div className={`w-1 bg-[#B31212] rounded-full transition-all ${isPlaying ? 'eq-bar-2 h-6' : 'h-3 opacity-50'}`} />
                <div className={`w-1 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-3 h-4' : 'h-2 opacity-50'}`} />
                <div className={`w-1 bg-[#B31212] rounded-full transition-all ${isPlaying ? 'eq-bar-4 h-6' : 'h-3.5 opacity-50'}`} />
                <div className={`w-1 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-5 h-4' : 'h-2 opacity-50'}`} />
                <div className={`w-1 bg-[#B31212] rounded-full transition-all ${isPlaying ? 'eq-bar-2 h-5' : 'h-3 opacity-50'}`} />
                <div className={`w-1 bg-[#8F0000] rounded-full transition-all ${isPlaying ? 'eq-bar-1 h-3' : 'h-1.5 opacity-50'}`} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                {isPlaying ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>9PM Sound Playing &bull; Tap to Pause</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-[#8F0000] animate-ping" />
                    <span>Feel the 9PM Sound &bull; Tap to Play</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Reserve Button */}
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase btn-9pm-primary flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${data.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wider btn-9pm-secondary flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#8F0000] fill-current" />
              <span>Call: {data.phoneDisplay}</span>
            </a>

            {/* Secondary Explore */}
            <button
              onClick={() => scrollToSection('the-experience')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore 9PM</span>
              <ArrowRight className="w-4 h-4 text-[#8F0000]" />
            </button>
          </div>

          {/* Key Metric Stats Banner */}
          <div className="mt-14 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.heroStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#1A1A1A]/80 border border-white/10 backdrop-blur-md text-center"
              >
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('the-experience')}
          aria-label="Scroll down"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors animate-bounce hidden sm:block"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* =========================================================================
          THE EXPERIENCE SECTION ("Not Just Another Night Out")
          ========================================================================= */}
      <section id="the-experience" className="py-20 lg:py-28 relative bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle={data.experience.subtitle}
            title={data.experience.title}
            description={data.experience.description}
          />

          {/* Editorial Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.experience.features.map((feat) => {
              const icons = {
                Music: <Music className="w-6 h-6" />,
                Wine: <Wine className="w-6 h-6" />,
                UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
                Volume2: <Volume2 className="w-6 h-6" />
              };

              return (
                <div
                  key={feat.id}
                  className="p-7 rounded-3xl glass-card-9pm hover:border-[#8F0000]/60 transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#8F0000]/15 border border-[#8F0000]/30 text-[#8F0000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {icons[feat.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8F0000] font-semibold">
                    <span>Explore Vibe</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wide Featurette Banner */}
          <div className="mt-12 rounded-3xl overflow-hidden relative border border-white/10 bg-[#1A1A1A]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 z-10">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F0000]">
                  SOUTH GOA NIGHTLIFE REIMAGINED
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                  Where Late Night Beats Meet Culinary Mastery
                </h3>
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Unlike venues that treat cuisine as an afterthought, 9PM serves handcrafted sushi, sizzling tandoor platters, and authentic late-night comfort dishes straight from our full kitchen until 4:00 AM.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => scrollToSection('food-drinks')}
                    className="px-6 py-3 rounded-xl btn-9pm-primary font-bold text-xs tracking-wider uppercase"
                  >
                    View Food & Cocktails
                  </button>
                  <button
                    onClick={() => scrollToSection('live-djs')}
                    className="px-6 py-3 rounded-xl btn-9pm-secondary font-semibold text-xs tracking-wider"
                  >
                    DJ Schedule
                  </button>
                </div>
              </div>
              <div className="lg:col-span-6 h-[320px] lg:h-[450px] relative">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmesdtB5xDtq_5s4rqsx_erwhubaw-gkXOJtvpVpaAvnG_ZAYT-B9Tumg4kOebhsQsP3RbiCHBjxSkahCWWVlSWIb7mE_UrAmF7P-nxC0brGZLGFQ6IRAZs4NQddKv1NhBmhUw=s1360-w1360-h1020-rw"
                  alt="9PM Lounge & Bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          NIGHTLIFE & LIVE DJ SECTION
          ========================================================================= */}
      <section id="live-djs" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0A0A]">
        
        {/* Subtle Deep Maroon Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8F0000]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeading
            subtitle={data.music.subtitle}
            title={data.music.title}
            description={data.music.description}
          />

          {/* Music Genres Showcase */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.music.genres.map((g, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card-9pm hover:border-[#8F0000]/60 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#8F0000]/15 text-[#8F0000] flex items-center justify-center mb-3">
                    <Disc3 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">{g.name}</h4>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly DJ Lineup Cards */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
              <Radio className="w-5 h-5 text-[#8F0000] animate-pulse" />
              <span>Weekly Sound Program & Lineups</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.music.upcomingNights.map((night, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-[#8F0000]/40 transition-all"
                >
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#8F0000]">
                    {night.day}
                  </span>
                  <h4 className="font-bold text-base text-white mt-1 leading-snug">
                    {night.event}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2">
                    Lineup: <span className="text-zinc-200 font-medium">{night.dj}</span>
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">9:00 PM onwards</span>
                    <span className="text-[#8F0000] font-semibold">Free Entry</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Vibe Preview Banner in DJ Section */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A] border border-[#8F0000]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-14 h-14 rounded-2xl bg-[#8F0000]/20 border border-[#8F0000]/40 text-[#8F0000] flex items-center justify-center shrink-0 shadow-lg">
                <Radio className={`w-7 h-7 ${isPlaying ? 'animate-pulse' : ''}`} />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#8F0000]">
                  9PM Club Sound &bull; Audio Experience
                </span>
                <h4 className="text-xl font-black text-white mt-0.5">
                  {currentTrack ? currentTrack.title : '9PM Resident Club Sessions'}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Immerse yourself in authentic Palolem nightlife beats &bull; {currentTrack ? currentTrack.genre : 'Deep House & Techno'}.
                </p>
              </div>
            </div>

            <button
              onClick={onTogglePlay}
              className="px-6 py-3 rounded-xl btn-9pm-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shrink-0 shadow-xl shadow-[#8F0000]/30 hover:scale-105 transition-all"
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Pause Music</span>
                </>
              ) : (
                <>
                  <Disc3 className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                  <span>Play Club Beats</span>
                </>
              )}
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FOOD & DRINKS SECTION (Culinary Craft & Liquid Art)
          ========================================================================= */}
      <section id="food-drinks" className="py-20 lg:py-28 relative bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle={data.foodAndDrinks.subtitle}
            title={data.foodAndDrinks.title}
            description={data.foodAndDrinks.description}
          />

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {data.foodAndDrinks.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveMenuCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  activeMenuCategory === cat
                    ? 'bg-[#8F0000] text-white shadow-lg shadow-[#8F0000]/30'
                    : 'bg-[#1A1A1A] hover:bg-[#242424] text-zinc-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden glass-card-9pm hover:border-[#8F0000]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#8F0000] text-white shadow-md">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-bold text-base text-white group-hover:text-[#FAF8F6] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-mono font-bold text-[#8F0000] text-sm shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-[11px] text-[#FAF8F6]/80 font-medium">{item.category}</span>
                    <span>Served Fresh Daily</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Late Night Dining Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-[#1A1A1A] border border-[#8F0000]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#8F0000]/20 text-[#8F0000] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Full Late-Night Kitchen Operating Daily</h4>
                <p className="text-xs text-zinc-300">
                  Sushi, Kebabs, Dal Khichdi, and Cocktails served until 4:00 AM.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 rounded-xl btn-9pm-primary font-bold text-xs tracking-wider uppercase shrink-0"
            >
              Order / Reserve Table
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          HOSPITALITY SECTION ("More Than Music")
          ========================================================================= */}
      <section id="hospitality" className="py-20 lg:py-28 relative bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8F0000]/15 border border-[#8F0000]/35 text-[#8F0000] text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>{data.hospitality.subtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {data.hospitality.title}
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {data.hospitality.description}
              </p>

              {/* Quote */}
              <div className="p-6 rounded-2xl bg-[#1A1A1A] border-l-4 border-l-[#8F0000] border-white/10">
                <p className="text-sm italic text-zinc-200">
                  {data.hospitality.quote}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8F0000] mt-2">
                  &bull; Verified Guest Feedback
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-2">
                {data.hospitality.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8F0000] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{h.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80"
                    alt="9PM Hospitality"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#8F0000]/25 text-center">
                  <span className="text-3xl font-black text-white font-mono">100%</span>
                  <p className="text-xs text-zinc-300 mt-1 font-medium">Safe & Welcoming Atmosphere</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 text-center">
                  <span className="text-3xl font-black text-[#8F0000] font-mono">4:00 AM</span>
                  <p className="text-xs text-zinc-400 mt-1">Full Service Late Night Care</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                    alt="Cocktails at 9PM"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SOCIAL PROOF / REVIEWS SECTION
          ========================================================================= */}
      <ReviewSection data={data} />

      {/* =========================================================================
          GALLERY SECTION
          ========================================================================= */}
      <MasonryGallery data={data} />

      {/* =========================================================================
          INSTAGRAM / SOCIAL SECTION
          ========================================================================= */}
      <SocialSection data={data} />

      {/* =========================================================================
          LOCATION & CONTACT SECTION
          ========================================================================= */}
      <LocationSection data={data} onOpenReservation={onOpenReservation} />

    </div>
  );
}
