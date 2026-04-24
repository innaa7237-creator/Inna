export interface BiographyData {
  education: EducationItem[];
  achievements: Achievement[];
  experience: ExperienceItem[];
}

export interface EducationItem {
  id: string;
  institution: {
    uk: string;
    en: string;
  };
  degree: {
    uk: string;
    en: string;
  };
  period: string;
  description?: {
    uk: string;
    en: string;
  };
}

export interface Achievement {
  id: string;
  title: {
    uk: string;
    en: string;
  };
  year: string;
  description?: {
    uk: string;
    en: string;
  };
}

export interface ExperienceItem {
  id: string;
  organization: {
    uk: string;
    en: string;
  };
  position: {
    uk: string;
    en: string;
  };
  period: string;
  description?: {
    uk: string;
    en: string;
  };
}

export const biographyText = {
  uk: `Інна Андрусенко — професійна скрипалька міжнародного рівня, чия творчість поєднує класичну витонченість та сучасну енергію. Її шлях розпочався в Житомирі, у стінах Музичного училища імені Віктора Косенка, де вона заклала фундамент своєї виконавської майстерності. Сьогодні Інна є затребуваною артисткою на світовій арені, виступаючи на найпрестижніших майданчиках Близького Сходу, Європи та екзотичних курортів.

Географія її виступів вражає: від розкішних королівських весіль у Досі (Катар) та VIP-заходів у Саудівській Аравії до коктейльних вечірок на Мальдівах (Vakkaru Resort). Вона стала офіційним музикантом на презентаціях Toyota в місті Джидда та брала участь у Весільній виставці для арабських жінок 2024 року. Її скрипка звучить як у супроводі великих оркестрів, так і в сучасних колабораціях з DJ-ями.

Особливе місце в житті Інни посідає активна підтримка рідної країни. Вона є активною учасницею міжнародних благодійних проектів та аукціонів, спрямовуючи силу свого таланту на допомогу Збройним Силам України. Її репертуар — це гармонійне поєднання епох: від вишуканих шедеврів Баха та Вівальді до сучасних чуттєвих інтерпретацій, що дозволяє ей створювати унікальну атмосферу на кожній події та знаходити відгук у серцях найвибагливішої аудиторії світу.`,

  en: `Inna Andrusenko is an internationally acclaimed professional violinist whose artistry blends classical sophistication with modern energy. Her journey began in Zhytomyr, within the walls of the Viktor Kosenko Music College, where she laid the foundation of her performing skills. Today, Inna is a sought-after artist on the world stage, performing at the most prestigious venues across the Middle East, Europe, and exotic resorts.

The geography of her performances is impressive: from luxurious royal weddings in Doha (Qatar) and VIP events in Saudi Arabia to cocktail parties in the Maldives (Vakkaru Resort). She became the official musician for Toyota presentations in Jeddah and participated in the Wedding Exhibition for Arabic Women in 2024. Her violin resonates both in accompaniment with grand orchestras and in modern collaborations with DJs.

A special place in Inna's life is dedicated to active support of her homeland. She is an active participant in international charity projects and auctions, channeling the power of her talent to support the Armed Forces of Ukraine. Her repertoire is a harmonious blend of eras: from the refined masterpieces of Bach and Vivaldi to modern, soulful interpretations, allowing her to create a unique atmosphere at every event and resonate in the hearts of the world's most discerning audiences.`,
};

export const education: EducationItem[] = [
  {
    id: '1',
    institution: {
      uk: 'Музичне училище імені Віктора Косенка',
      en: 'Viktor Kosenko Music College',
    },
    degree: {
      uk: 'Спеціалізація: Скрипка',
      en: 'Specialization: Violin',
    },
    period: '2010-2014',
    description: {
      uk: 'Здобуття фундаментальної музичної освіти та розвиток виконавської техніки',
      en: 'Acquiring fundamental musical education and developing performing technique',
    },
  },
  {
    id: '2',
    institution: {
      uk: 'Київський національний університет культури і мистецтв',
      en: 'Kyiv National University of Culture and Arts',
    },
    degree: {
      uk: 'Вища музична освіта',
      en: 'Higher Musical Education',
    },
    period: '2014-2017',
    description: {
      uk: 'Поглиблене вивчення музичного мистецтва та вдосконалення артистичного образу',
      en: 'In-depth study of musical art and refinement of the artistic image',
    },
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: {
      uk: 'Весільна виставка для арабських жінок',
      en: 'Wedding Exhibition for Arabic Women',
    },
    year: '2024',
    description: {
      uk: 'Виступ на одній із найпрестижніших подій весільної індустрії Катару',
      en: 'Performance at one of the most prestigious events in the Qatar wedding industry',
    },
  },
  {
    id: '2',
    title: {
      uk: 'Офіційний артист Toyota Presentation',
      en: 'Official Artist for Toyota Presentation',
    },
    year: '2023',
    description: {
      uk: 'Музичний супровід презентації нових моделей Toyota у Саудівській Аравії (Джидда)',
      en: 'Musical accompaniment for Toyota new model presentations in Jeddah, Saudi Arabia',
    },
  },
  {
    id: '3',
    title: {
      uk: 'Благодійні проекти для ЗСУ',
      en: 'Charity Projects for UA Armed Forces',
    },
    year: '2022-2025',
    description: {
      uk: 'Регулярна участь у заходах на підтримку українських воїнів та культурних ініціативах',
      en: 'Regular participation in events supporting Ukrainian soldiers and cultural initiatives',
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    id: '1',
    organization: {
      uk: 'Міжнародний контракт - Єгипет',
      en: 'International Contract - Egypt',
    },
    position: {
      uk: 'Сольна виконавиця',
      en: 'Solo Performer',
    },
    period: '2025',
    description: {
      uk: 'Виступи на топових курортах та заходах в Єгипті',
      en: 'Performances at top resorts and events in Egypt',
    },
  },
  {
    id: '2',
    organization: {
      uk: 'Vakkaru Maldives Resort',
      en: 'Vakkaru Maldives Resort',
    },
    position: {
      uk: 'Resident Artist',
      en: 'Resident Artist',
    },
    period: '2023-2024',
    description: {
      uk: 'Музичний супровід Cocktail parties та святкувань Нового Року',
      en: 'Musical accompaniment for Cocktail parties and New Year celebrations',
    },
  },
  {
    id: '3',
    organization: {
      uk: 'Королівські весілля (Доха, Катар)',
      en: 'Royal Weddings (Doha, Qatar)',
    },
    position: {
      uk: 'Запрошена скрипалька',
      en: 'Guest Violinist',
    },
    period: '2022-2024',
    description: {
      uk: 'Виступи на ексклюзивних арабських весіллях та заходах VIP-рівня',
      en: 'Performances at exclusive Arabic weddings and VIP events',
    },
  },
  {
    id: '4',
    organization: {
      uk: 'Співпраця з провідними фотографами',
      en: 'Collaboration with Leading Photographers',
    },
    position: {
      uk: 'Артистичний образ',
      en: 'Artistic Image',
    },
    period: '2022-2024',
    description: {
      uk: 'Створення професійного контенту з Андрієм Ткаченком, Романом Котіковим та іншими',
      en: 'Creating professional content with Andriy Tkachenko, Roman Kotikov, and others',
    },
  },
];
