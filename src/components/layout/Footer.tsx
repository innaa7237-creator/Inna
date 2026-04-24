'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, AtSign } from 'lucide-react';
import { memo } from 'react';

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function Footer() {
  const t = useTranslations('footer');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    },
    {
      name: 'Threads',
      icon: AtSign,
      href: process.env.NEXT_PUBLIC_THREADS_URL || '#',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#',
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      href: process.env.NEXT_PUBLIC_TIKTOK_URL || '#',
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-black">
      {/* Subtle top light effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          {/* Brand & Identity */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-wider text-accent-gold">
              INNA ANDRUSENKO
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              {t('professional') || 'Professional Violinist bringing elegance and emotion to every performance worldwide.'}
            </p>
          </div>

          {/* Social Media & Engagement */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
              {t('social') || 'Follow the music'}
            </h4>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-accent-gold hover:text-accent-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info & Copyright */}
          <div className="flex flex-col space-y-4 text-sm text-gray-400 md:items-end">
            <div className="flex flex-col md:items-end">
              <span className="mb-1 text-xs uppercase tracking-widest text-gray-500">Contact</span>
              <a href="mailto:info@inna-andrusenko.com" className="transition-colors hover:text-white">
                info@inna-andrusenko.com
              </a>
            </div>
            <div className="pt-4 md:text-right">
              <p className="text-xs opacity-60">
                © {new Date().getFullYear()} Inna Andrusenko. {t('rights') || 'All rights reserved.'}
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default memo(Footer);
