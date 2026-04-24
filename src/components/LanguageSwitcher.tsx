'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-gray-300" />
      <button
        onClick={() => switchLocale('uk')}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          locale === 'uk'
            ? 'border-b-2 border-accent-gold text-accent-gold'
            : 'text-white hover:text-accent-gold'
        }`}
      >
        УКР
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'border-b-2 border-accent-gold text-accent-gold'
            : 'text-white hover:text-accent-gold'
        }`}
      >
        ENG
      </button>
    </div>
  );
}
