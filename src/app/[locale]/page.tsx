import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import VideoHeroSection from '@/components/sections/VideoHeroSection';
import CollaborationSection from '@/components/sections/CollaborationSection';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      {/* ─── Full-width Hero Video ─── */}
      <VideoHeroSection />

      {/* ─── Bio Preview ─── */}
      <section className="mt-20 flex flex-col bg-black md:flex-row">
        {/* Left: full-bleed photo — fixed height, cropped at bottom */}
        <div className="w-full flex-shrink-0 overflow-hidden md:w-[45%]">
          <img
            src="/images/hero/bio-portrait-full.jpg"
            alt="Inna Andrusenko"
            className="block w-full object-cover object-top"
            style={{ height: '780px' }}
          />
        </div>

        {/* Right: text */}
        <div className="relative z-10 flex flex-1 items-center bg-black px-10 py-10 md:-ml-12 md:px-16 lg:px-20">
          <div className="max-w-lg">
            {/* Tagline with exact Batiashvili-style flourish */}
            <h2
              className="relative mb-8 mt-24 font-display text-3xl font-light leading-snug md:text-4xl"
              style={{
                background: 'linear-gradient(135deg, #9a6c1a 0%, #e8c84a 30%, #f9ee9a 50%, #e8c84a 70%, #9a6c1a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {/* Flourish: dark gold solid border L-shape */}
              <span
                className="absolute block"
                style={{
                  width: '280px',
                  height: '280px',
                  border: '1px solid #9a6c1a',
                  top: '-120px',
                  left: '-120px',
                  clipPath: 'polygon(0 0, 100% 0, 100% 35%, 30% 35%, 30% 100%, 0 100%)',
                }}
              />
              {locale === 'uk'
                ? 'Зачаровує аудиторії своєю віртуозністю та глибокою музичною чуттєвістю.'
                : 'Praised by audiences for her virtuosity and profound musical sensitivity.'}
            </h2>

            <p className="mb-8 text-base leading-relaxed text-white/80">
              {locale === 'uk'
                ? 'Інна Андрусенко — скрипалька міжнародного рівня, яка виступала на королівських весіллях у Катарі, розкішних курортах Мальдівів та корпоративних заходах у Саудівській Аравії. Регулярно бере участь у благодійних концертах на підтримку Збройних Сил України.'
                : 'Inna Andrusenko is an internationally acclaimed violinist who has performed at royal weddings in Qatar, luxury resorts in the Maldives, and prestigious corporate events across Saudi Arabia. She regularly performs at charity concerts in support of the Armed Forces of Ukraine.'}
            </p>

            <Link
              href={`/${locale}/biography`}
              className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#e8c84a]"
            >
              <span>{t('biography.readMore')}</span>
              <span className="block h-px w-8 bg-current transition-all group-hover:w-12" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Philosophy & Collaboration (Mutter Style) ─── */}
      <CollaborationSection />

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)' }}
      >
        {/* Subtle artistic light flare */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl font-bold mb-6 md:text-5xl">
            {t('contact.cta.title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90 font-light tracking-wide">
            {t('contact.cta.description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block rounded-full bg-white px-10 py-4 font-semibold text-[#6d28d9] shadow-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
          >
            {t('contact.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
