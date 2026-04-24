# Инструкция по деплою на Vercel

## Подготовка к деплою

### 1. Проверка перед деплоем

```bash
# Убедитесь что проект собирается
npm run build

# Проверьте TypeScript
npm run type-check

# Проверьте линтинг
npm run lint
```

✅ Все должно пройти успешно перед деплоем!

---

## Шаг 1: Создание GitHub репозитория

### 1.1. Инициализация Git (если еще не сделано)

```bash
cd D:\violin\inna
git init
git add .
git commit -m "Initial commit: Inna Andrusenko website"
```

### 1.2. Создание репозитория на GitHub

1. Зайдите на https://github.com
2. Нажмите "New repository"
3. Название: `inna-andrusenko-website`
4. Описание: `Professional website for violinist Inna Andrusenko`
5. Выберите: Private или Public (на ваш выбор)
6. **НЕ ДОБАВЛЯЙТЕ** README, .gitignore, license (уже есть локально)
7. Нажмите "Create repository"

### 1.3. Push в GitHub

```bash
# Замените YOUR_USERNAME на ваш GitHub username
git remote add origin https://github.com/YOUR_USERNAME/inna-andrusenko-website.git
git branch -M main
git push -u origin main
```

---

## Шаг 2: Деплой на Vercel

### 2.1. Регистрация на Vercel

1. Зайдите на https://vercel.com
2. Нажмите "Sign Up"
3. Выберите "Continue with GitHub"
4. Авторизуйте Vercel в GitHub

### 2.2. Импорт проекта

1. На дашборде Vercel нажмите "Add New..." → "Project"
2. В списке репозиториев найдите `inna-andrusenko-website`
   - Если не видите - нажмите "Adjust GitHub App Permissions"
3. Нажмите "Import"

### 2.3. Настройка проекта

**Framework Preset:** Next.js (должно определиться автоматически)

**Build and Output Settings:**
- Build Command: `npm run build` ✓
- Output Directory: `.next` ✓
- Install Command: `npm install` ✓

**Root Directory:** `.` (оставьте как есть)

### 2.4. Environment Variables

Нажмите "Environment Variables" и добавьте:

#### Обязательные:

```env
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_SITE_NAME=Inna Andrusenko - Violinist
```

#### Для email формы (когда настроите Resend):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@your-domain.com
RESEND_TO_EMAIL=inna@your-email.com
```

#### Социальные сети (опционально):

```env
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/your-profile
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-profile
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@your-channel
```

**Важно:** Выберите для каких окружений применять:
- ✓ Production
- ✓ Preview
- ✓ Development

### 2.5. Deploy!

1. Нажмите "Deploy"
2. Подождите 2-3 минуты
3. 🎉 Готово!

---

## Шаг 3: После первого деплоя

### 3.1. Проверьте сайт

1. Откройте URL: `https://your-project-name.vercel.app`
2. Проверьте все страницы:
   - ✓ Главная (uk и en)
   - ✓ Биография
   - ✓ Видео
   - ✓ Репертуар
   - ✓ Галерея
   - ✓ Контакты
3. Проверьте переключение языков
4. Проверьте мобильную версию

### 3.2. Обновите NEXT_PUBLIC_SITE_URL

1. В Vercel → Settings → Environment Variables
2. Обновите `NEXT_PUBLIC_SITE_URL` на реальный URL
3. Нажмите "Redeploy" для применения изменений

### 3.3. Настройка custom domain (опционально)

Если у вас есть свой домен:

1. Vercel → Settings → Domains
2. Нажмите "Add"
3. Введите ваш домен (например: `inna-andrusenko.com`)
4. Следуйте инструкциям для настройки DNS
5. Подождите несколько минут для propagation

**Рекомендуемые DNS записи:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Шаг 4: Настройка автоматического деплоя

### 4.1. Git Workflow

Теперь при каждом push в GitHub будет автоматический деплой:

```bash
# Внесите изменения
git add .
git commit -m "Update: описание изменений"
git push

# Vercel автоматически задеплоит изменения!
```

### 4.2. Preview deployments

- **main branch** → Production deployment
- **другие ветки** → Preview deployment (тестовый URL)

---

## Шаг 5: Настройка Resend для email

### 5.1. Регистрация на Resend

1. Зайдите на https://resend.com
2. Зарегистрируйтесь (бесплатный план: 100 email/день)
3. Подтвердите email

### 5.2. Получение API ключа

1. Dashboard → API Keys
2. Нажмите "Create API Key"
3. Name: `Inna Website`
4. Permission: `Sending access`
5. Копируйте ключ (показывается только один раз!)

### 5.3. Настройка домена (опционально)

Для использования собственного email (contact@your-domain.com):

1. Resend → Domains → Add Domain
2. Введите ваш домен
3. Добавьте DNS записи (показаны в интерфейсе):
   - SPF, DKIM, DMARC записи
4. Подождите верификацию (~10 минут)

**Без своего домена:** используйте onboarding@resend.dev

### 5.4. Добавление переменных в Vercel

1. Vercel → Settings → Environment Variables
2. Добавьте:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=your@email.com
   ```
3. Нажмите "Redeploy"

### 5.5. Раскомментируйте код в API

В файле `src/app/api/contact/route.ts` раскомментируйте код Resend:

```typescript
const { Resend } = await import('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL!,
  to: process.env.RESEND_TO_EMAIL!,
  replyTo: email,
  subject: `New Contact Form: ${subject}`,
  html: `...`,
});
```

Push изменения:

```bash
git add .
git commit -m "Enable Resend email integration"
git push
```

### 5.6. Тестирование

1. Зайдите на сайт → Контакты
2. Заполните и отправьте форму
3. Проверьте email на `RESEND_TO_EMAIL`

---

## Шаг 6: Мониторинг и аналитика

### 6.1. Vercel Analytics

1. Vercel → Analytics
2. Нажмите "Enable Analytics"
3. Бесплатный план: 100k events/месяц

Показывает:
- Page views
- Visitors
- Top pages
- Devices
- Countries

### 6.2. Vercel Speed Insights

1. Vercel → Speed Insights
2. Нажмите "Enable"

Показывает:
- Core Web Vitals
- Performance Score
- Real User Monitoring

### 6.3. Google Search Console

1. https://search.google.com/search-console
2. Добавьте ваш сайт
3. Submit sitemap: `https://your-site.com/sitemap.xml`

---

## Шаг 7: Обновление контента

### Добавление фотографий

```bash
# Поместите фото в:
public/images/hero/hero-main.jpg
public/images/bio/portrait-1.jpg
public/images/gallery/concert-1.jpg
public/images/og/og-image.jpg

# Обновите код компонентов с placeholder на реальные пути

git add .
git commit -m "Add real photos"
git push
```

### Обновление видео

Отредактируйте `src/data/videos.ts`:

```typescript
{
  id: '1',
  youtubeId: 'REAL_YOUTUBE_ID', // Замените
  title: { uk: '...', en: '...' },
  // ...
}
```

### Обновление текстов

Отредактируйте `src/data/biography.ts` с реальными данными.

---

## Troubleshooting

### Проблема: Build fails

```bash
# Локально проверьте
npm run build

# Исправьте ошибки, затем
git add .
git commit -m "Fix build errors"
git push
```

### Проблема: 404 на главной странице

Проверьте redirect в `vercel.json`:
```json
"redirects": [
  {
    "source": "/",
    "destination": "/uk",
    "permanent": false
  }
]
```

### Проблема: Environment variables не работают

1. Проверьте что переменные добавлены в Vercel
2. Проверьте что применены к Production
3. Сделайте Redeploy

### Проблема: Форма не отправляет email

1. Проверьте RESEND_API_KEY в Vercel
2. Проверьте что код в route.ts раскомментирован
3. Проверьте логи в Vercel → Logs

---

## Чеклист деплоя

- [ ] ✓ Проект собирается локально (`npm run build`)
- [ ] ✓ Создан GitHub репозиторий
- [ ] ✓ Code pushed в GitHub
- [ ] ✓ Проект импортирован в Vercel
- [ ] ✓ Environment variables настроены
- [ ] ✓ Первый deploy успешен
- [ ] ✓ Сайт открывается и работает
- [ ] ✓ Обе локали (uk, en) работают
- [ ] ✓ Переключение языков работает
- [ ] ✓ Resend настроен (если нужен email)
- [ ] ✓ Форма контактов работает
- [ ] ✓ Добавлен реальный контент
- [ ] ✓ Custom domain настроен (опционально)
- [ ] ✓ Analytics включена
- [ ] ✓ Google Search Console настроен

---

## Полезные ссылки

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Resend Dashboard:** https://resend.com/emails
- **GitHub Repo:** https://github.com/YOUR_USERNAME/inna-andrusenko-website
- **Production Site:** https://your-site.vercel.app

---

## Команды для быстрого доступа

```bash
# Локальная разработка
npm run dev

# Production build
npm run build

# Deploy на Vercel через CLI (опционально)
npx vercel --prod

# Просмотр логов
npx vercel logs

# Проверка статуса
npx vercel ls
```

---

**Готово!** 🎉 Сайт задеплоен и работает!

При возникновении проблем - проверьте логи в Vercel Dashboard → Deployments → Logs
