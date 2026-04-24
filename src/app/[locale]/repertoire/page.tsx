import { useTranslations, useLocale } from 'next-intl';
import { repertoire, periods } from '@/data/repertoire';
import type { Locale } from '@/i18n';
import { Music2 } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'uk' ? 'Репертуар' : 'Repertoire',
    description:
      locale === 'uk'
        ? 'Репертуар скрипальки Інни Андрусенко - від бароко до сучасної музики'
        : 'Repertoire of violinist Inna Andrusenko - from Baroque to contemporary music',
  };
}

export default function RepertoirePage() {
  const t = useTranslations('repertoire');
  const locale = useLocale() as Locale;

  const groupedByPeriod = repertoire.reduce(
    (acc, item) => {
      if (!acc[item.period]) {
        acc[item.period] = [];
      }
      acc[item.period].push(item);
      return acc;
    },
    {} as Record<string, typeof repertoire>
  );

  const periodOrder: Array<keyof typeof periods> = ['baroque', 'classical', 'romantic', 'modern'];

  return (
    <div className="bg-white">
      {/* Repertoire by Period */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {periodOrder.map((period) => {
            const items = groupedByPeriod[period];
            if (!items || items.length === 0) return null;

            return (
              <div key={period} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                    <Music2 className="text-white" size={24} />
                  </div>
                  <h2 className="heading-3">{periods[period][locale]}</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-xl p-6 transition ${
                        item.featured
                          ? 'border-2 border-accent-gold/40 bg-gradient-to-br from-accent-gold/5 to-transparent hover:border-accent-gold/60'
                          : 'glass-effect hover:shadow-xl'
                      }`}
                    >
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {item.composer}
                      </h3>
                      <p className="text-gray-700">{item.title[locale]}</p>
                      {item.featured && (
                        <span className="mt-2 inline-block rounded-full bg-accent-gold px-3 py-1 text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
