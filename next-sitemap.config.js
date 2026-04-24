/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://inna-andrusenko.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*'],
  alternateRefs: [
    {
      href: 'https://inna-andrusenko.vercel.app/uk',
      hreflang: 'uk',
    },
    {
      href: 'https://inna-andrusenko.vercel.app/en',
      hreflang: 'en',
    },
    {
      href: 'https://inna-andrusenko.vercel.app/uk',
      hreflang: 'x-default',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
};
