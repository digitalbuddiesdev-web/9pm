import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import ninePMLogoImg from '../assets/9pmlogo.jpg';
import laJhingaLogoImg from '../assets/la_jhingalogo.jpg';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] text-zinc-300 relative overflow-hidden">
      
      {/* Top Banner: Sister Brand Spotlight */}
      <div className="border-b border-white/5 py-10 bg-[#1A1A1A]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8F0000]">
                Sister Hospitality Brand in Palolem
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Looking for Coastal Open-Air Seafood?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Visit our sister destination <strong>La Jhinga Seafood & Cafe</strong> near Palolem Beach.
              </p>
            </div>

            {/* Sister Brand Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#0A0A0A]">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white shrink-0 border border-white/20 p-0.5">
                <img src={laJhingaLogoImg} alt="La Jhinga Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white font-serif">La Jhinga | Seafood | Cafe</h4>
                <p className="text-xs text-zinc-400">Fresh Catch, Multi-Cuisine & Live Music</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-black shrink-0 border border-white/20">
                <img src={ninePMLogoImg} alt="9PM Logo" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-black text-lg text-white tracking-wide">
                9PM Bar & Cafe
              </h4>
            </div>
            <p className="text-xs opacity-80 leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8F0000] shrink-0" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8F0000] shrink-0" />
                <a href={`tel:${data.phone}`} className="hover:underline font-mono">
                  {data.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Explore 9PM
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#the-experience" className="hover:text-white transition-colors">&bull; The 9PM Experience</a>
              </li>
              <li>
                <a href="#live-djs" className="hover:text-white transition-colors">&bull; Live DJ Lineups & Sound</a>
              </li>
              <li>
                <a href="#food-drinks" className="hover:text-white transition-colors">&bull; Sushi & Late-Night Kitchen</a>
              </li>
              <li>
                <a href="#hospitality" className="hover:text-white transition-colors">&bull; Hospitality With Soul</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">&bull; Verified Guest Reviews (4.6 ★)</a>
              </li>
            </ul>
          </div>

          {/* Curated Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Curated Highlights
            </h4>
            <ul className="space-y-2 text-xs opacity-80">
              <li>&bull; International Resident & Guest DJs</li>
              <li>&bull; Handcrafted Signature Cocktail Mixology</li>
              <li>&bull; Midnight Dining Operating Till 4:00 AM</li>
              <li>&bull; Custom Tuned Precision Acoustics</li>
              <li>&bull; Safe, Inclusive & Welcoming Vibe</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Direct Contact
            </h4>
            <p className="text-xs opacity-80">
              Table reservations, VIP lounge & group inquiries:
            </p>
            <a
              href="tel:8287696969"
              className="inline-block font-mono text-base font-bold text-[#8F0000]"
            >
              +91 82876 96969
            </a>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
          <p>
            &copy; {new Date().getFullYear()} 9PM Bar & Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Mohanbagh, Palolem, Canacona</span>
            <span>&bull;</span>
            <span className="font-mono">South Goa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
