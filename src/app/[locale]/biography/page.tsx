import { useTranslations, useLocale } from 'next-intl';
import { biographyText, education, achievements, experience } from '@/data/biography';
import { GraduationCap, Award, Briefcase, Music } from 'lucide-react';
import type { Locale } from '@/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'uk' ? 'Біографія' : 'Biography',
    description:
      locale === 'uk'
        ? 'Біографія, освіта та досягнення скрипальки Інни Андрусенко'
        : 'Biography, education and achievements of violinist Inna Andrusenko',
  };
}

export default function BiographyPage() {
  const t = useTranslations('biography');
  const locale = useLocale() as Locale;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="elegant-gradient py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl whitespace-pre-line text-lg leading-relaxed text-gray-700">
            {biographyText[locale]}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="heading-2">{t('education')}</h2>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="glass-effect rounded-xl p-6 transition hover:shadow-xl"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.institution[locale]}
                  </h3>
                  <span className="text-sm font-medium text-primary-600">{item.period}</span>
                </div>
                <p className="mb-2 text-lg text-gray-700">{item.degree[locale]}</p>
                {item.description && (
                  <p className="text-gray-600">{item.description[locale]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="heading-2">{t('achievements')}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border-2 border-accent-gold/20 bg-white p-6 transition hover:border-accent-gold/40 hover:shadow-lg"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title[locale]}</h3>
                  <span className="text-sm font-medium text-accent-gold">{item.year}</span>
                </div>
                {item.description && (
                  <p className="text-gray-600">{item.description[locale]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="heading-2">{t('experience')}</h2>
          </div>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-primary-200" />

            {experience.map((item, index) => (
              <div key={item.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 ring-4 ring-white" />

                <div className="glass-effect rounded-xl p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.organization[locale]}
                      </h3>
                      <p className="text-lg text-primary-600">{item.position[locale]}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.period}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600">{item.description[locale]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Photo Gallery</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200"
              >
                <Music size={60} className="text-primary-600 opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
