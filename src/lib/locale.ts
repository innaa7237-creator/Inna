import { setRequestLocale } from 'next-intl/server';

export function initLocale(locale: string) {
  setRequestLocale(locale);
}
