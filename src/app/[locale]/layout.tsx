import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: {
      template: '%s | Inna Andrusenko',
      default: 'Inna Andrusenko - Professional Violinist',
    },
    description: 'Official website of professional violinist Inna Andrusenko',
    keywords: [
      'violin',
      'violinist',
      'classical music',
      'musician',
      'Inna Andrusenko',
      'скрипка',
      'скрипалька',
    ],
    authors: [{ name: 'Inna Andrusenko' }],
    creator: 'Inna Andrusenko',
    openGraph: {
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      alternateLocale: locale === 'uk' ? 'en_US' : 'uk_UA',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
      siteName: 'Inna Andrusenko',
      images: [
        {
          url: '/images/og/og-image.svg',
          width: 1200,
          height: 630,
          alt: 'Inna Andrusenko - Violinist',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Inna Andrusenko - Violinist',
      description: 'Official website of professional violinist Inna Andrusenko',
      images: ['/images/og/og-image.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
      languages: {
        'uk-UA': '/uk',
        'en-US': '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Inna Andrusenko" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Inna Andrusenko',
              jobTitle: 'Professional Violinist',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://inna-andrusenko.com',
              image: '/images/og/og-image.jpg',
              sameAs: [
                process.env.NEXT_PUBLIC_FACEBOOK_URL,
                process.env.NEXT_PUBLIC_INSTAGRAM_URL,
                process.env.NEXT_PUBLIC_YOUTUBE_URL,
              ].filter(Boolean),
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'UA',
              },
              performerIn: {
                '@type': 'MusicEvent',
                name: 'Classical Music Performances',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
