# ✅ TODO - Что осталось сделать

> **Статус проекта:** 🎉 Весь код готов! Осталось добавить контент и задеплоить.

---

## 🚀 КРИТИЧНО - Деплой (СЛЕДУЮЩЕЕ)

- [ ] **Деплой на Vercel**
  - [ ] Push код в GitHub
  - [ ] Создать аккаунт на vercel.com (если нет)
  - [ ] Import repository в Vercel
  - [ ] Добавить Environment Variables в Vercel
  - [ ] Нажать Deploy
  - [ ] Проверить что сайт открывается
  - [ ] Обновить NEXT_PUBLIC_SITE_URL на production URL

  📖 **Детальная инструкция:** См. `DEPLOYMENT.md`

---

## 📸 Контент - Фотографии

- [ ] **Hero изображение** (главная страница)
  - [ ] Найти/сделать профессиональное фото (1920x1080px)
  - [ ] Сохранить как `public/images/hero/hero-main.jpg`
  - [ ] Обновить в `src/components/sections/HeroSection.tsx`

- [ ] **Портреты для биографии** (3-5 фото)
  - [ ] Подготовить фото (800x1200px)
  - [ ] Сохранить в `public/images/bio/portrait-1.jpg`, `portrait-2.jpg` и т.д.
  - [ ] Обновить в `src/app/[locale]/biography/page.tsx`

- [ ] **Фотогалерея** (10-20 фото)
  - [ ] Выбрать лучшие фото с концертов
  - [ ] Оптимизировать (600x400px для thumbnails)
  - [ ] Сохранить в `public/images/gallery/`
  - [ ] Создать массив в `src/data/gallery.ts` (нужно создать файл)

- [ ] **Open Graph изображение** (для соцсетей)
  - [ ] Создать красивое изображение 1200x630px
  - [ ] Заменить `public/images/og/og-image.svg` на JPG/PNG
  - [ ] Обновить в `src/app/[locale]/layout.tsx`

- [ ] **Favicon** (иконка сайта)
  - [ ] Создать иконку (можно использовать фото скрипки)
  - [ ] Заменить `public/favicon.svg` на PNG/ICO
  - [ ] Добавить разные размеры (16x16, 32x32, 180x180 для Apple)

---

## 🎥 Контент - Видео

- [ ] **Найти видео на YouTube**
  - [ ] Выбрать 3-5 лучших выступлений
  - [ ] Скопировать YouTube ID (из URL после `v=`)

- [ ] **Обновить данные**
  - [ ] Открыть `src/data/videos.ts`
  - [ ] Заменить `youtubeId: 'dQw4w9WgXcQ'` на реальные ID
  - [ ] Обновить названия (uk + en)
  - [ ] Добавить описания
  - [ ] Добавить больше видео если нужно

---

## 📝 Контент - Тексты

- [ ] **Биография** (украинский + английский)
  - [ ] Написать полную биографию (2-3 параграфа)
  - [ ] Обновить `biographyText` в `src/data/biography.ts`
  - [ ] Проверить грамматику

- [ ] **Образование**
  - [ ] Добавить все учебные заведения
  - [ ] Обновить массив `education` в `src/data/biography.ts`
  - [ ] Указать годы, степени, специализацию

- [ ] **Достижения**
  - [ ] Перечислить награды, конкурсы
  - [ ] Обновить массив `achievements` в `src/data/biography.ts`

- [ ] **Опыт работы**
  - [ ] Перечислить оркестры, проекты
  - [ ] Обновить массив `experience` в `src/data/biography.ts`

- [ ] **Репертуар**
  - [ ] Добавить больше произведений
  - [ ] Обновить `src/data/repertoire.ts`
  - [ ] Отметить featured произведения

- [ ] **Переводы** (опционально)
  - [ ] Проверить `src/messages/uk.json`
  - [ ] Проверить `src/messages/en.json`
  - [ ] Добавить недостающие переводы если есть

---

## 📧 Email - Форма контактов

- [ ] **Зарегистрироваться на Resend**
  - [ ] Зайти на https://resend.com
  - [ ] Создать аккаунт (бесплатно: 100 email/день)
  - [ ] Подтвердить email

- [ ] **Получить API ключ**
  - [ ] Dashboard → API Keys → Create API Key
  - [ ] Скопировать ключ (показывается один раз!)

- [ ] **Настроить в Vercel**
  - [ ] Vercel → Settings → Environment Variables
  - [ ] Добавить `RESEND_API_KEY=re_xxxxx`
  - [ ] Добавить `RESEND_FROM_EMAIL=onboarding@resend.dev`
  - [ ] Добавить `RESEND_TO_EMAIL=your@email.com`
  - [ ] Redeploy сайт

- [ ] **Активировать код**
  - [ ] Открыть `src/app/api/contact/route.ts`
  - [ ] Раскомментировать блок с Resend (строки ~20-35)
  - [ ] Удалить `console.log` (строка ~15)
  - [ ] Git commit + push (автодеплой)

- [ ] **Протестировать**
  - [ ] Зайти на сайт → Контакты
  - [ ] Заполнить форму
  - [ ] Проверить email приходит

- [ ] **Настроить домен** (опционально)
  - [ ] Resend → Domains → Add Domain
  - [ ] Добавить DNS записи (SPF, DKIM, DMARC)
  - [ ] Изменить `RESEND_FROM_EMAIL` на `contact@your-domain.com`

📖 **Детальная инструкция:** См. `DEPLOYMENT.md` → Шаг 5

---

## 🔗 Социальные сети

- [ ] **Собрать ссылки**
  - [ ] Facebook URL
  - [ ] Instagram URL
  - [ ] YouTube channel URL

- [ ] **Добавить в Vercel**
  - [ ] Vercel → Settings → Environment Variables
  - [ ] `NEXT_PUBLIC_FACEBOOK_URL=...`
  - [ ] `NEXT_PUBLIC_INSTAGRAM_URL=...`
  - [ ] `NEXT_PUBLIC_YOUTUBE_URL=...`
  - [ ] Redeploy

---

## 📊 SEO и Аналитика (после деплоя)

- [ ] **Google Search Console**
  - [ ] Зайти на https://search.google.com/search-console
  - [ ] Добавить сайт
  - [ ] Верифицировать владение
  - [ ] Submit sitemap: `https://your-site.com/sitemap.xml`

- [ ] **Vercel Analytics**
  - [ ] Vercel → Analytics → Enable
  - [ ] Мониторить посещаемость

- [ ] **Vercel Speed Insights**
  - [ ] Vercel → Speed Insights → Enable
  - [ ] Проверить Core Web Vitals

- [ ] **Lighthouse Audit**
  - [ ] Открыть сайт в Chrome
  - [ ] F12 → Lighthouse → Generate Report
  - [ ] Проверить что все метрики > 90

---

## 🎨 Опционально - Улучшения

- [ ] **Custom Domain**
  - [ ] Купить домен (например: inna-andrusenko.com)
  - [ ] Vercel → Settings → Domains → Add
  - [ ] Настроить DNS записи
  - [ ] Подождать propagation

- [ ] **Больше анимаций**
  - [ ] Добавить scroll animations
  - [ ] Parallax эффекты
  - [ ] Плавные переходы между страницами

- [ ] **Blog/News секция**
  - [ ] Создать страницу /blog
  - [ ] Добавить анонсы концертов
  - [ ] Новости и события

- [ ] **Календарь концертов**
  - [ ] Добавить страницу /events
  - [ ] Интеграция с календарем
  - [ ] Upcoming events список

- [ ] **Больше языков**
  - [ ] Добавить русский
  - [ ] Добавить немецкий
  - [ ] Обновить i18n конфигурацию

- [ ] **CMS интеграция**
  - [ ] Sanity.io или Contentful
  - [ ] Админ панель для контента
  - [ ] Упростить обновления

---

## ✅ Порядок выполнения (Рекомендую)

**Этап 1: Минимум для запуска (1-2 дня)**
1. ✅ Деплой на Vercel (сайт живой!)
2. ⬜ Добавить 1-2 фото (hero + портрет)
3. ⬜ Обновить биографию (краткую версию)
4. ⬜ Добавить 2-3 YouTube видео
5. ⬜ Настроить email (Resend)
6. ⬜ Добавить социальные сети

**Этап 2: Полный контент (неделя)**
7. ⬜ Все фотографии
8. ⬜ Полная биография
9. ⬜ Весь репертуар
10. ⬜ Фотогалерея
11. ⬜ Все видео

**Этап 3: SEO и аналитика (1 день)**
12. ⬜ Google Search Console
13. ⬜ Vercel Analytics
14. ⬜ Lighthouse optimization

**Этап 4: Опциональное (по желанию)**
15. ⬜ Custom domain
16. ⬜ Дополнительные функции

---

## 📞 Помощь

Если что-то непонятно:
- 📖 Читай `CONTEXT.md` - полная информация о проекте
- 🚀 Читай `DEPLOYMENT.md` - пошаговый деплой
- 📋 Читай `README.md` - команды и quick start
- ⚡ Читай `QUICK_REFERENCE.md` - быстрая справка

---

**Последнее обновление:** 2024-02-02
**Статус:** Код готов ✅ | Контент нужен ⏳ | Деплой следующий 🚀
