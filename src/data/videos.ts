export interface Video {
  id: string;
  title: {
    uk: string;
    en: string;
  };
  description?: {
    uk: string;
    en: string;
  };
  youtubeId?: string;
  videoUrl?: string; // Для локальних файлів у public/video/
  thumbnail?: string;
  duration?: string;
  category?: 'classical' | 'modern' | 'wedding' | 'event' | 'charity' | 'travel';
  featured?: boolean;
}

export const videos: Video[] = [
  // Промо 2025 (Featured)
  {
    id: 'promo-2025',
    title: {
      uk: 'Промо-відео 2025',
      en: 'Promo Video 2025',
    },
    description: {
      uk: 'Презентація виступів та артистичного образу Інни Андрусенко',
      en: 'Presentation of performances and artistic image of Inna Andrusenko',
    },
    videoUrl: '/video/promo.mp4',
    category: 'event',
    featured: true,
  },
  // Катар - Весілля
  {
    id: 'qatar-wedding-1',
    title: {
      uk: 'Арабське весілля - Катар, Доха',
      en: 'Arabic Wedding - Qatar, Doha',
    },
    description: {
      uk: 'Виступ на розкішному весіллі в Катарі',
      en: 'Performance at a luxury wedding in Qatar',
    },
    videoUrl: '/video/qatar-wedding.mp4',
    category: 'wedding',
    featured: true,
  },
  // Саудівська Аравія - Toyota
  {
    id: 'toyota-saudi-1',
    title: {
      uk: 'Презентація Toyota - Саудівська Аравія',
      en: 'Toyota Presentation - Saudi Arabia',
    },
    description: {
      uk: 'Виступ на презентації Toyota у місті Джидда разом з DJ Ahmed Can',
      en: 'Performance at Toyota presentation in Jeddah with DJ Ahmed Can',
    },
    videoUrl: '/video/toyota-presentation.mp4',
    category: 'event',
    featured: true,
  },
  // Благодійність - Україна
  {
    id: 'charity-ukraine-1',
    title: {
      uk: 'Благодійний аукціон для ЗСУ',
      en: 'Charity Auction for UA Armed Forces',
    },
    description: {
      uk: 'Виступ на підтримку Збройних Сил України, 10.07.2023',
      en: 'Performance in support of the Armed Forces of Ukraine, 10.07.2023',
    },
    videoUrl: '/video/charity-auction.mp4',
    category: 'charity',
    featured: true,
  },
  // Billie Eilish - Lovely
  {
    id: 'billie-eilish-lovely',
    title: {
      uk: 'Billie Eilish - Lovely (Violin Cover)',
      en: 'Billie Eilish - Lovely (Violin Cover)',
    },
    description: {
      uk: 'Сучасна імпровізація на популярний хіт',
      en: 'Modern improvisation on a popular hit',
    },
    videoUrl: '/video/billie-eilish-lovely.mp4',
    category: 'modern',
  },
  // Єгипет - Контракт
  {
    id: 'egypt-contract-1',
    title: {
      uk: 'Виступ в Єгипті',
      en: 'Performance in Egypt',
    },
    description: {
      uk: 'Музична історія з контракту в Єгипті 2025',
      en: 'Musical story from Egypt contract 2025',
    },
    videoUrl: '/video/egypt-contract.mp4',
    category: 'event',
  },
  // Катар - Журнал Forbes
  {
    id: 'qatar-forbes',
    title: {
      uk: 'Катар - найбагатша країна світу',
      en: 'Qatar - The Richest Country in the World',
    },
    description: {
      uk: 'Виступ та враження від Катару',
      en: 'Performance and impressions from Qatar',
    },
    videoUrl: '/video/qatar-impressions.mp4',
    category: 'travel',
  },
  // Виставка весіль для арабських жінок
  {
    id: 'arabic-wedding-expo',
    title: {
      uk: 'Весільна виставка для арабських жінок',
      en: 'Wedding Exhibition for Arabic Women',
    },
    description: {
      uk: 'Виступ на престижній весільній виставці в Катарі',
      en: 'Performance at a prestigious wedding exhibition in Qatar',
    },
    videoUrl: '/video/wedding-expo.mp4',
    category: 'wedding',
  },
];
