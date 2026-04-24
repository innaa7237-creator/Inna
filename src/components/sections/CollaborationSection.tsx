'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CollaborationSection() {
  const t = useTranslations('collaboration');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background flourish - very subtle pink accent */}
      <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-rose-50/50 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-rose-50/50 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tagline / Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 block text-sm font-bold uppercase tracking-[0.3em] text-rose-400"
          >
            {locale === 'uk' ? 'Філософія & Співпраця' : 'Philosophy & Collaboration'}
          </motion.span>

          {/* Large Artistic Quote - Batiashvili/Mutter style */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 font-display text-4xl font-light leading-tight text-gray-900 md:text-6xl"
          >
            {locale === 'uk' ? (
              <>
                Музика — це <span className="italic text-rose-500 font-serif">мова серця</span>, що єднає світи.
              </>
            ) : (
              <>
                Music is a <span className="italic text-rose-500 font-serif">language of the heart</span> that unites worlds.
              </>
            )}
          </motion.h2>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600"
          >
            {locale === 'uk' 
              ? 'Я завжди відкрита до нових творчих проєктів, виступів на міжнародних майданчиках та колаборацій, які несуть світло та емоцію. Створимо щось незабутнє разом.'
              : 'I am always open to new creative projects, international performances, and collaborations that bring light and emotion. Let’s create something unforgettable together.'}
          </motion.p>

          {/* Minimalist CTA Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-900 transition-colors hover:text-rose-500"
            >
              <span>{locale === 'uk' ? 'Обговорити співпрацю' : 'Let’s Collaborate'}</span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all group-hover:border-rose-500 group-hover:bg-rose-500 group-hover:text-white">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Elegant thin divider at the bottom */}
      <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-rose-200 to-transparent" />
    </section>
  );
}
