'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Play } from 'lucide-react';
import VideoLightbox from '@/components/ui/VideoLightbox';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-main.jpg"
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/video/hero-main.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10 flex min-h-[90vh] items-center py-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4 flex items-center gap-2">
              <Music className="text-primary-400" size={24} />
              <span className="text-sm font-medium uppercase tracking-wide text-primary-400">
                {t('subtitle')}
              </span>
            </div>

            <h1 className="heading-1 mb-6 text-white">{t('title')}</h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-200">{t('description')}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-primary-700 hover:shadow-xl"
              >
                {t('cta')}
                <ArrowRight size={20} />
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Play size={20} fill="currentColor" />
                {t('watchPromo')}
              </button>
            </div>
          </motion.div>

          {/* Hero Image/Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div 
              className="group relative h-[600px] cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-white/20"
              onClick={() => setIsVideoOpen(true)}
            >
              <Image
                src="/images/hero/bio-portrait-full.jpg"
                alt="Inna Andrusenko - Professional Violinist from Ukraine"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
                sizes="50vw"
              />

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              
              {/* Central Play Button on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-white">
                  <Play size={32} className="ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">{t('watchPromo')}</p>
                <p className="text-lg font-semibold">Inna Andrusenko</p>
              </div>
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 max-w-xs rounded-xl p-6 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                  <Music className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold">
                    15+ {t('yearsExperience')}
                  </p>
                  <p className="text-sm text-gray-300">{t('professional')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Lightbox */}
      <VideoLightbox 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl="/video/hero-main.mp4" 
      />
    </section>
  );
}
