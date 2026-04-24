import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return {
    title: locale === 'uk' ? 'Фотогалерея | Інна Андрусенко' : 'Photo Gallery | Inna Andrusenko',
    description:
      locale === 'uk'
        ? 'Фотографії з концертів та виступів Інни Андрусенко в Катарі, Саудівській Аравії, Мальдівах та Україні'
        : 'Photos from concerts and performances by Inna Andrusenko in Qatar, Saudi Arabia, Maldives, and Ukraine',
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-elegant-dark py-16 text-white md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-accent-gold">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition hover:shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={locale === 'uk' ? item.alt.uk : item.alt.en}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="mb-2 inline-block rounded-full bg-accent-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-gold backdrop-blur-sm">
                    {t(`categories.${item.category}`)}
                  </span>
                  <p className="text-sm text-white">
                    {locale === 'uk' ? item.alt.uk : item.alt.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Text Section */}
      <section className="section-padding border-t border-gray-100 bg-gray-50">
        <div className="container-custom text-center">
          <p className="mx-auto max-w-3xl italic text-gray-600">
            &ldquo;{t('footerText')}&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
