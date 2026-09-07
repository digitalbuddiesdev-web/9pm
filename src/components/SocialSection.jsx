import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export default function SocialSection({ data }) {
  const insta = data?.instagram || {
    handle: '@9pmbarandcafe',
    tagline: 'Connect With Us',
    followers: '2.5k',
    url: 'https://www.instagram.com/9pmbarandcafe/'
  };

  const previewPosts = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
      likes: '1.4k',
      comments: '84'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
      likes: '950',
      comments: '42'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      likes: '2.1k',
      comments: '130'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
      likes: '820',
      comments: '36'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 transition-all glass-card-9pm border border-white/10">
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="p-4 rounded-2xl bg-[#8F0000] text-white shadow-lg shadow-[#8F0000]/30">
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8F0000]">
                  {insta.tagline || 'Connect With Us'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5 text-white">
                  {insta.handle || '@9pmbarandcafe'}
                </h3>
                <p className="text-xs mt-1 flex items-center gap-2 justify-center md:justify-start text-zinc-400">
                  <span>{insta.followers || '2.5k'} Followers on Instagram</span>
                  <span>&bull;</span>
                  <span>Daily Updates & DJ Announcements</span>
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href={insta.url || 'https://www.instagram.com/9pmbarandcafe/'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 btn-9pm-primary"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Posts Teaser Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {previewPosts.map((post) => (
              <a
                key={post.id}
                href={insta.url || 'https://www.instagram.com/9pmbarandcafe/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-square border border-white/10 bg-black block"
              >
                <img
                  src={post.img}
                  alt="Instagram post preview"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}