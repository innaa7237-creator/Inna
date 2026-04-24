export interface RepertoireItem {
  id: string;
  composer: string;
  title: {
    uk: string;
    en: string;
  };
  period: 'baroque' | 'classical' | 'romantic' | 'modern';
  featured?: boolean;
}

export const repertoire: RepertoireItem[] = [
  // Baroque
  {
    id: '1',
    composer: 'Йоган Себастьян Бах',
    title: {
      uk: 'Концерт для скрипки ля мінор, BWV 1041',
      en: 'Violin Concerto in A minor, BWV 1041',
    },
    period: 'baroque',
    featured: true,
  },
  {
    id: '2',
    composer: 'Johann Sebastian Bach',
    title: {
      uk: 'Партита для скрипки соло № 2, BWV 1004',
      en: 'Partita for Solo Violin No. 2, BWV 1004',
    },
    period: 'baroque',
    featured: true,
  },
  {
    id: '3',
    composer: 'Antonio Vivaldi',
    title: {
      uk: 'Чотири пори року',
      en: 'The Four Seasons',
    },
    period: 'baroque',
  },

  // Classical
  {
    id: '4',
    composer: 'Wolfgang Amadeus Mozart',
    title: {
      uk: 'Концерт для скрипки № 5 ля мажор, K. 219',
      en: 'Violin Concerto No. 5 in A major, K. 219',
    },
    period: 'classical',
    featured: true,
  },
  {
    id: '5',
    composer: 'Ludwig van Beethoven',
    title: {
      uk: 'Концерт для скрипки ре мажор, Op. 61',
      en: 'Violin Concerto in D major, Op. 61',
    },
    period: 'classical',
  },

  // Romantic
  {
    id: '6',
    composer: 'Петро Ілліч Чайковський',
    title: {
      uk: 'Концерт для скрипки з оркестром ре мажор, Op. 35',
      en: 'Violin Concerto in D major, Op. 35',
    },
    period: 'romantic',
    featured: true,
  },
  {
    id: '7',
    composer: 'Johannes Brahms',
    title: {
      uk: 'Концерт для скрипки з оркестром ре мажор, Op. 77',
      en: 'Violin Concerto in D major, Op. 77',
    },
    period: 'romantic',
  },
  {
    id: '8',
    composer: 'Felix Mendelssohn',
    title: {
      uk: 'Концерт для скрипки мі мінор, Op. 64',
      en: 'Violin Concerto in E minor, Op. 64',
    },
    period: 'romantic',
  },

  // Modern
  {
    id: '9',
    composer: 'Astor Piazzolla',
    title: {
      uk: 'Чотири пори року в Буенос-Айресі',
      en: 'The Four Seasons of Buenos Aires',
    },
    period: 'modern',
  },
  {
    id: '10',
    composer: 'Myroslav Skoryk',
    title: {
      uk: 'Мелодія',
      en: 'Melody',
    },
    period: 'modern',
    featured: true,
  },
];

export const periods = {
  baroque: {
    uk: 'Бароко',
    en: 'Baroque',
  },
  classical: {
    uk: 'Класицизм',
    en: 'Classical',
  },
  romantic: {
    uk: 'Романтизм',
    en: 'Romantic',
  },
  modern: {
    uk: 'Сучасна музика',
    en: 'Modern Music',
  },
};
