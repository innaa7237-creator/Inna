export const SITE_CONFIG = {
  name: 'Inna Andrusenko',
  title: 'Inna Andrusenko - Professional Violinist',
  description: 'Official website of professional violinist Inna Andrusenko',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://inna-andrusenko.vercel.app',
  locale: 'uk',
  alternateLocale: 'en',
};

export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
};

export const CONTACT_INFO = {
  email: 'contact@inna-andrusenko.com',
  phone: '+380',
  location: 'Kyiv, Ukraine',
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;
