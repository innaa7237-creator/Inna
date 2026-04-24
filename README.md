# 🎻 Inna Andrusenko - Professional Violinist Website

Профессиональный сайт-визитка для скрипачки Інни Андрусенко с поддержкой двух языков (украинский/английский).

## ✨ Особенности

- 🌍 **Двуязычность** - украинский (основной) и английский
- 🎨 **Современный дизайн** - элегантная цветовая схема для классического музыканта
- 📱 **Полностью адаптивный** - оптимизирован для мобильных, планшетов и десктопов
- ⚡ **Быстрая загрузка** - оптимизированные изображения и code splitting
- 🔍 **SEO оптимизирован** - sitemap, robots.txt, Open Graph, structured data
- 📧 **Форма контактов** - с валидацией и отправкой email через Resend
- 🎥 **YouTube интеграция** - встроенный плеер для видео выступлений
- 🎭 **Анимации** - плавные переходы с Framer Motion

## 🛠 Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - типизация
- **Tailwind CSS** - утилитарная стилизация
- **next-intl** - интернационализация (украинский/английский)
- **Framer Motion** - анимации
- **React Hook Form + Zod** - формы с валидацией
- **Resend** - отправка email
- **Vercel** - хостинг и деплой

## Запуск локально

1. Установить зависимости:
```bash
npm install
```

2. Создать `.env.local` файл на основе `.env.example`:
```bash
cp .env.example .env.local
```

3. Заполнить переменные окружения в `.env.local`

4. Запустить dev сервер:
```bash
npm run dev
```

Сайт будет доступен на http://localhost:3000

## Скрипты

- `npm run dev` - запустить development сервер
- `npm run build` - собрать production build
- `npm run start` - запустить production сервер
- `npm run lint` - проверить код через ESLint
- `npm run format` - отформатировать код через Prettier
- `npm run type-check` - проверить TypeScript типы

## Структура проекта

```
src/
├── app/                 # Next.js App Router
│   └── [locale]/       # Локализованные маршруты
├── components/         # React компоненты
├── data/              # Данные контента
├── lib/               # Утилиты
├── messages/          # Переводы
└── styles/            # Глобальные стили
```

## 📁 Структура сайта

- **Главная** (`/uk`, `/en`) - Hero-секция, краткая биография, CTA
- **Біографія** - образование, достижения, опыт с timeline
- **Відео** - галерея видео выступлений с YouTube
- **Репертуар** - список произведений по периодам (барокко → современность)
- **Галерея** - фотогалерея с hover эффектами
- **Контакти** - форма обратной связи + контактная информация

## 🚀 Деплой на Vercel

**Быстрый старт:**

1. Push код в GitHub
2. Импортируй проект в Vercel
3. Добавь environment variables
4. Deploy!

**Детальные инструкции:** См. [DEPLOYMENT.md](./DEPLOYMENT.md)

**Автоматический деплой:** при каждом push в main ветку

## 📖 Документация

- **[CONTEXT.md](./CONTEXT.md)** - полное состояние проекта, что сделано, что осталось
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - пошаговая инструкция по деплою на Vercel
- **[План реализации](C:\Users\ihbec\.claude\plans\shiny-swimming-owl.md)** - изначальный план проекта

## 🔧 Разработка

### Первый запуск

```bash
npm install
cp .env.example .env.local
# Отредактируйте .env.local с вашими значениями
npm run dev
```

### Команды

```bash
npm run dev         # Development сервер (http://localhost:3000)
npm run build       # Production build
npm run start       # Production сервер
npm run lint        # ESLint проверка
npm run lint:fix    # Автоисправление ESLint ошибок
npm run format      # Prettier форматирование
npm run type-check  # TypeScript проверка
```

## 📝 Добавление контента

### Фотографии
Поместите изображения в `public/images/`:
- `hero/hero-main.jpg` - главное фото
- `bio/portrait-*.jpg` - портреты
- `gallery/*.jpg` - фотогалерея

### Видео
Обновите `src/data/videos.ts` с реальными YouTube ID

### Тексты
Обновите файлы в `src/data/`:
- `biography.ts` - биография, образование, достижения
- `repertoire.ts` - список произведений
- `src/messages/*.json` - переводы

## 🎨 Дизайн

**Цветовая схема:**
- Primary: `#8b5cf6` (фиолетовый)
- Accent Gold: `#d4af37`
- Elegant Dark: `#1a1a2e`

**Шрифты:**
- Заголовки: Cormorant Garamond, Playfair Display
- Текст: Inter

## 📊 SEO

Автоматически генерируются:
- ✅ `/sitemap.xml` - карта сайта
- ✅ `/robots.txt` - правила индексации
- ✅ Open Graph теги
- ✅ Structured Data (JSON-LD)
- ✅ Hreflang для языков

## 🔐 Environment Variables

```env
# Site
NEXT_PUBLIC_SITE_URL=https://your-site.com
NEXT_PUBLIC_SITE_NAME="Inna Andrusenko - Violinist"

# Email (Resend)
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=contact@your-domain.com
RESEND_TO_EMAIL=inna@your-email.com

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/profile
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/profile
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@channel
```

## 🐛 Troubleshooting

**Build fails:**
```bash
npm run build  # Проверьте ошибки локально
npm run type-check  # Проверьте TypeScript
npm run lint  # Проверьте ESLint
```

**Email не отправляется:**
- Проверьте RESEND_API_KEY в .env.local
- Раскомментируйте код Resend в `src/app/api/contact/route.ts`

## 📞 Поддержка

Проблемы с деплоем? См. [DEPLOYMENT.md](./DEPLOYMENT.md)
Вопросы по структуре? См. [CONTEXT.md](./CONTEXT.md)

## 📄 Лицензия

© 2024 Inna Andrusenko. All rights reserved.
