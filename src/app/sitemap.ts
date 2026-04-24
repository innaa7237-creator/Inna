import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inna-andrusenko.vercel.app';
  const locales = ['uk', 'en'];
  const pages = ['', 'biography', 'videos', 'repertoire', 'gallery', 'contact'];

  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page ? `/${page}` : ''}`;

      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            uk: `${baseUrl}/uk${page ? `/${page}` : ''}`,
            en: `${baseUrl}/en${page ? `/${page}` : ''}`,
          },
        },
      });
    });
  });

  return routes;
}
