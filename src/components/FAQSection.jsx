import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function FAQSection({ onOpenReservation, phone, phoneDisplay }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are the operating hours of 9PM Bar & Cafe in Palolem?',
      a: '9PM Bar & Cafe is open daily from 6:00 PM to 4:00 AM. Our full cocktail bar and late-night kitchen operate right up until 4:00 AM, making 9PM the ultimate midnight spot in South Goa.'
    },
    {
      q: 'Does 9PM Bar & Cafe host live DJs and electronic music in South Goa?',
      a: 'Yes! We host curated weekly sound programs featuring international and resident DJs spinning Techno, Melodic House, Afro House, Deep Progressive, and Reggae Fusion. Check out our sound program section for current lineups.'
    },
    {
      q: 'How can I reserve a table or VIP lounge at 9PM Bar?',
      a: 'Table bookings and VIP lounges can be reserved in seconds via WhatsApp (+91 82876 96969) or by clicking the "Reserve a Table" button. For large groups or special celebrations, you can also call us directly.'
    },
    {
      q: 'Is late night food served in Palolem until 4:00 AM?',
      a: 'Yes, our culinary team serves a complete late-night menu until 4:00 AM daily. Highlights include fresh sushi platters, artisan baos, steamed dim sums, tandoor kebabs, sizzlers, wok specials, and midnight Dal Khichdi.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="FREQUENTLY ASKED QUESTIONS"
          title="Planning Your Visit to 9PM"
          description="Everything you need to know about our South Goa nightlife experience, music, dining, and reservations."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1A1A1A] border-[#8F0000]/50 shadow-xl shadow-[#8F0000]/10'
                    : 'bg-[#141414] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#8F0000]' : 'text-zinc-500'}`} />
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#8F0000]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-10 p-6 rounded-2xl bg-[#1A1A1A]/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-white">Have more questions or custom booking requests?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Connect with our hospitality team for table inquiries or party planning.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${phone || '8287696969'}`}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-[#8F0000] text-white hover:bg-[#8F0000] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 rounded-xl text-xs font-bold btn-9pm-primary flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
