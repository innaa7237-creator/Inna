export interface GalleryImage {
  id: string;
  src: string;
  category: 'concerts' | 'portraits' | 'travel' | 'charity';
  alt: {
    uk: string;
    en: string;
  };
}

export const galleryImages: GalleryImage[] = [
  // Саудівська Аравія / Презентація Toyota
  {
    id: 'sa-1',
    src: '/images/gallery/saudi-arabia-1.jpg',
    category: 'concerts',
    alt: {
      uk: 'Виступ на презентації Toyota, Саудівська Аравія',
      en: 'Performance at Toyota presentation, Saudi Arabia',
    },
  },
  {
    id: 'sa-2',
    src: '/images/gallery/saudi-arabia-2.jpg',
    category: 'concerts',
    alt: {
      uk: 'Концерт у місті Джидда, Саудівська Аравія',
      en: 'Concert in Jeddah, Saudi Arabia',
    },
  },
  // Катар / Весілля та заходи
  {
    id: 'qatar-1',
    src: '/images/gallery/qatar-1.jpg',
    category: 'concerts',
    alt: {
      uk: 'Виступ у Катарі, Доха',
      en: 'Performance in Qatar, Doha',
    },
  },
  {
    id: 'qatar-2',
    src: '/images/gallery/qatar-2.jpg',
    category: 'concerts',
    alt: {
      uk: 'Арабське весілля в Катарі',
      en: 'Arabic wedding in Qatar',
    },
  },
  {
    id: 'qatar-wedding',
    src: '/images/gallery/qatar-wedding.jpg',
    category: 'concerts',
    alt: {
      uk: 'Виступ на розкішному весіллі в Катарі',
      en: 'Performance at a luxury wedding in Qatar',
    },
  },
  // Мальдіви
  {
    id: 'maldives-1',
    src: '/images/gallery/maldives-1.jpg',
    category: 'concerts',
    alt: {
      uk: 'Виступ на Мальдівах, Vakkaru Resort',
      en: 'Performance in Maldives, Vakkaru Resort',
    },
  },
  {
    id: 'maldives-2',
    src: '/images/gallery/maldives-2.jpg',
    category: 'travel',
    alt: {
      uk: 'Коктейльна вечірка на Мальдівах',
      en: 'Cocktail party in Maldives',
    },
  },
  // Єгипет
  {
    id: 'egypt-1',
    src: '/images/gallery/egypt-1.jpg',
    category: 'concerts',
    alt: {
      uk: 'Контрактний виступ в Єгипті',
      en: 'Contract performance in Egypt',
    },
  },
  {
    id: 'egypt-2',
    src: '/images/gallery/egypt-2.jpg',
    category: 'concerts',
    alt: {
      uk: 'Музичний вечір в Єгипті',
      en: 'Music evening in Egypt',
    },
  },
  // Україна та благодійність
  {
    id: 'ukraine-charity',
    src: '/images/gallery/ukraine-charity.jpg',
    category: 'charity',
    alt: {
      uk: 'Благодійний аукціон для Збройних Сил України',
      en: 'Charity auction for the Armed Forces of Ukraine',
    },
  },
  {
    id: 'ukraine-performance',
    src: '/images/gallery/ukraine-performance.jpg',
    category: 'concerts',
    alt: {
      uk: 'Виступ в Україні',
      en: 'Performance in Ukraine',
    },
  },
  // Портрети
  {
    id: 'photo-portrait-1',
    src: '/images/gallery/photoshoot-1.jpg',
    category: 'portraits',
    alt: {
      uk: 'Професійна фотосесія скрипальки',
      en: 'Professional violinist photoshoot',
    },
  },
  {
    id: 'photo-portrait-2',
    src: '/images/gallery/photoshoot-2.jpg',
    category: 'portraits',
    alt: {
      uk: 'Студійний портрет',
      en: 'Studio portrait',
    },
  },
  {
    id: 'photo-portrait-3',
    src: '/images/gallery/photoshoot-3.jpg',
    category: 'portraits',
    alt: {
      uk: 'Елегантний образ зі скрипкою',
      en: 'Elegant look with a violin',
    },
  },
];
