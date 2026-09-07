import React, { useState } from 'react';
import { X, Phone, MessageSquare, Clock, MapPin, Check } from 'lucide-react';
import ninePMLogoImg from '../assets/9pmlogo.jpg';

export default function ReservationModal({ isOpen, onClose, data }) {
  const [guests, setGuests] = useState('2 Guests');
  const [time, setTime] = useState('9:00 PM');
  const [date, setDate] = useState('Tonight');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const phone = data?.phone || '8287696969';
  const phoneDisplay = data?.phoneDisplay || '+91 82876 96969';
  const venueName = data?.fullName || '9PM Bar & Cafe';

  const waMessage = encodeURIComponent(
    `Hello ${venueName}, I would like to reserve a table for ${guests} on ${date} around ${time}.`
  );
  const waUrl = `https://wa.me/91${phone}?text=${waMessage}`;

  const copyNumber = () => {
    navigator.clipboard?.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border transition-all bg-[#1A1A1A] border-[#8F0000]/40 text-white shadow-black/80">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black">
              <img
                src={ninePMLogoImg}
                alt={venueName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight text-white">
                {venueName}
              </h3>
              <p className="text-xs text-zinc-400">
                Instant Table & VIP Inquiries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full transition-colors hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Quick Config */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-zinc-400">
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-[#0A0A0A] border-white/15 text-white focus:border-[#8F0000]"
              >
                <option value="2 Guests">2 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="6 Guests">6 Guests</option>
                <option value="8+ Guests (VIP/Party)">8+ (Group)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-zinc-400">
                When
              </label>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-[#0A0A0A] border-white/15 text-white focus:border-[#8F0000]"
              >
                <option value="Tonight">Tonight</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Weekend">This Weekend</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-zinc-400">
                Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-xs font-medium rounded-lg px-2.5 py-2 border outline-none bg-[#0A0A0A] border-white/15 text-white focus:border-[#8F0000]"
              >
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                <option value="Late Night">Late Night</option>
              </select>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* Direct Call Button */}
            <a
              href={`tel:${phone}`}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg btn-9pm-primary shadow-[#8F0000]/25"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Now: {phoneDisplay}</span>
            </a>

            {/* WhatsApp Booking */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-semibold text-sm tracking-wide bg-emerald-600 hover:bg-emerald-500 text-white transition-all transform hover:scale-[1.01] shadow-md shadow-emerald-900/20"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Reserve via WhatsApp</span>
            </a>

            {/* Copy Button */}
            <button
              onClick={copyNumber}
              className="w-full py-2 text-xs transition-colors flex items-center justify-center gap-1.5 text-zinc-400 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Number copied to clipboard!</span>
                </>
              ) : (
                <>
                  <span>Copy telephone number ({phoneDisplay})</span>
                </>
              )}
            </button>
          </div>

          {/* Info footer inside modal */}
          <div className="p-3 rounded-xl text-xs space-y-1.5 bg-[#0A0A0A] text-zinc-300">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#8F0000]" />
              <span>{data?.timings || 'Daily Open'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#8F0000]" />
              <span className="truncate">{data?.location || 'Palolem, Canacona, Goa'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
