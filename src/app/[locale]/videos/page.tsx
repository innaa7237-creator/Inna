import { useTranslations, useLocale } from 'next-intl';
import VideoPlayer from '@/components/media/VideoPlayer';
import { videos } from '@/data/videos';
import type { Locale } from '@/i18n';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'uk' ? 'Відео виступів' : 'Performance Videos',
    description:
      locale === 'uk'
        ? 'Колекція відеозаписів концертних виступів Інни Андрусенко'
        : 'Collection of concert performance videos by Inna Andrusenko',
  };
}

export default function VideosPage() {
  const t = useTranslations('videos');
  const locale = useLocale() as Locale;

  const featuredVideos = videos.filter((v) => v.featured);
  const otherVideos = videos.filter((v) => !v.featured);

  return (
    <div className="bg-white">
      {/* Featured Videos */}
      {featuredVideos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-3 mb-8">{t('featured')}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredVideos.map((video) => (
                <div key={video.id} className="space-y-4">
                  <VideoPlayer
                    youtubeId={video.youtubeId}
                    videoUrl={video.videoUrl}
                    title={video.title[locale]}
                    thumbnail={video.thumbnail}
                  />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{video.title[locale]}</h3>
                    {video.description && (
                      <p className="text-gray-600">{video.description[locale]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Videos Grid */}
      {otherVideos.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-3 mb-8">{t('allVideos')}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {otherVideos.map((video) => (
                <div key={video.id} className="space-y-3">
                  <VideoPlayer
                    youtubeId={video.youtubeId}
                    videoUrl={video.videoUrl}
                    title={video.title[locale]}
                    thumbnail={video.thumbnail}
                  />
                  <h3 className="font-semibold">{video.title[locale]}</h3>
                  {video.description && (
                    <p className="text-sm text-gray-600">{video.description[locale]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
