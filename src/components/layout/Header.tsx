'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState, memo } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLeft = [
    { name: t('home'), href: `/${locale}` },
    { name: t('biography'), href: `/${locale}/biography` },
    { name: t('videos'), href: `/${locale}/videos` },
  ];

  const navRight = [
    { name: t('repertoire'), href: `/${locale}/repertoire` },
    { name: t('gallery'), href: `/${locale}/gallery` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const allNav = [...navLeft, ...navRight];

  const navLinkClass = (href: string) =>
    `text-xs uppercase tracking-widest font-medium transition-colors duration-200 hover:text-accent-gold whitespace-nowrap ${
      pathname === href ? 'text-accent-gold' : 'text-white/80'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black">
      {/* Desktop */}
      <nav className="hidden w-full px-8 py-4 md:flex md:items-center md:justify-between">
        {/* Left nav */}
        <div className="flex flex-1 items-center justify-evenly">
          {navLeft.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <Link href={`/${locale}`} className="mx-8 flex shrink-0 items-center justify-center">
          <Image
            src="/logo.png"
            alt="Inna Andrusenko"
            width={220}
            height={148}
            className="h-auto w-[180px] xl:w-[220px]"
            priority
          />
        </Link>

        {/* Right nav */}
        <div className="flex flex-1 items-center justify-evenly">
          {navRight.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile */}
      <div className="flex items-center justify-between px-6 py-3 md:hidden">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Inna Andrusenko"
            width={160}
            height={108}
            className="h-auto w-[140px]"
            priority
          />
        </Link>
        <button
          className="text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          {allNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-sm uppercase tracking-widest text-white/80 hover:text-accent-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 border-t border-white/10 pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Header);
