# 🚀 QUICK REFERENCE - Inna Andrusenko Website

**Для Claude в новой сессии:** Прочитай сначала `CONTEXT.md` (полная инфа), потом этот файл для быстрых команд.

---

## ⚡ СТАТУС (1 минута чтения)

✅ **ГОТОВО:** Весь код написан (50+ файлов, 6 страниц x 2 языка)
✅ **РАБОТАЕТ:** Dev сервер, production build, все функции
🚀 **СЛЕДУЮЩЕЕ:** Деплой на Vercel (см. DEPLOYMENT.md)

---

## 💻 КОМАНДЫ

```bash
# Development
npm run dev              # http://localhost:3000
npm run build            # Production build
npm run lint             # Проверка кода

# Запустить впервые
npm install              # Установить зависимости
cp .env.example .env.local  # Создать env файл
npm run dev              # Старт!

# Git
git status               # Проверить изменения
git add .                # Добавить всё
git commit -m "msg"      # Коммит
git push                 # Push на GitHub
```

---

## 📁 КЛЮЧЕВЫЕ ФАЙЛЫ

### Страницы:
- `src/app/[locale]/page.tsx` - Главная
- `src/app/[locale]/biography/page.tsx` - Біографія
- `src/app/[locale]/videos/page.tsx` - Відео
- `src/app/[locale]/repertoire/page.tsx` - Репертуар
- `src/app/[locale]/gallery/page.tsx` - Галерея
- `src/app/[locale]/contact/page.tsx` - Контакти

### Данные для редактирования:
- `src/data/videos.ts` - YouTube ID видео (ЗАМЕНИТЬ!)
- `src/data/biography.ts` - Биография (ЗАМЕНИТЬ!)
- `src/data/repertoire.ts` - Репертуар (ЗАМЕНИТЬ!)
- `src/messages/uk.json` - Українські тексти
- `src/messages/en.json` - English texts

### Компоненты:
- `src/components/layout/Header.tsx` - Навигация
- `src/components/layout/Footer.tsx` - Футер
- `src/components/forms/ContactForm.tsx` - Форма

### Конфиг:
- `.env.local` - Environment variables (НЕ в Git!)
- `vercel.json` - Vercel config
- `next.config.js` - Next.js config

---

## 🎨 СТРУКТУРА САЙТА

```
/ → /uk (redirect)
/uk, /en - Главная (Hero, Bio preview, CTA)
/uk/biography, /en/biography - Біографія
/uk/videos, /en/videos - Відео YouTube
/uk/repertoire, /en/repertoire - Репертуар
/uk/gallery, /en/gallery - Фотогалерея
/uk/contact, /en/contact - Контакти + форма
```

---

## ⚙️ ENVIRONMENT VARIABLES

```env
# В .env.local (локально)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# В Vercel (production) - ДОБАВИТЬ:
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=contact@domain.com
RESEND_TO_EMAIL=inna@email.com
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/...
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/...
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@...
```

---

## 🔧 БЫСТРЫЕ ФИКСЫ

### Build fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors?
```bash
npm run type-check
```

### Port 3000 занят?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Или используй другой порт
PORT=3001 npm run dev
```

---

## 📝 ДОБАВИТЬ КОНТЕНТ

### 1. Фотографии
```bash
# Положить в:
public/images/hero/hero-main.jpg
public/images/bio/portrait-1.jpg
public/images/gallery/concert-1.jpg

# Затем обновить в коде пути с placeholder на реальные
```

### 2. Видео YouTube
```typescript
// src/data/videos.ts
{
  id: '1',
  youtubeId: 'REAL_YOUTUBE_ID', // ⬅️ Заменить
  title: { uk: '...', en: '...' },
}
```

### 3. Тексты
```typescript
// src/data/biography.ts
export const biographyText = {
  uk: `РЕАЛЬНЫЙ текст биографии на українській...`,
  en: `REAL biography text in English...`,
};
```

---

## 🚀 ДЕПЛОЙ (30 сек версия)

```bash
# 1. Push в GitHub
git add .
git commit -m "Ready for deploy"
git push

# 2. Vercel
# - Зайди на vercel.com
# - Import GitHub repo
# - Add env variables
# - Deploy!

# Детали: см. DEPLOYMENT.md
```

---

## 🐛 TROUBLESHOOTING

| Проблема | Решение |
|----------|---------|
| Build fails | `rm -rf .next && npm run build` |
| Module not found | `npm install` |
| Port занят | `PORT=3001 npm run dev` |
| Env не работают | Проверь `.env.local` существует |
| Форма не отправляет | Resend не настроен (норм для dev) |
| Страница 404 | Проверь /uk или /en в URL |

---

## 📚 ПОЛНАЯ ДОКУМЕНТАЦИЯ

- **CONTEXT.md** - ПОЛНЫЙ контекст (ЧТО сделано, КАК работает)
- **DEPLOYMENT.md** - Деплой пошагово
- **README.md** - Общая инфа
- **This file** - Быстрая справка

---

## 🎯 ЧТО ДЕЛАТЬ СЕЙЧАС?

**Вариант 1 (Рекомендую):**
1. Деплой на Vercel СЕЙЧАС с placeholder (см. DEPLOYMENT.md)
2. Проверить что работает
3. Постепенно добавлять контент

**Вариант 2:**
1. Собрать весь контент (фото, видео, тексты)
2. Обновить данные в коде
3. Деплой на Vercel

**Вариант 3:**
1. Локальное тестирование
2. Добавить больше функций
3. Потом деплой

---

**📞 НУЖНА ПОМОЩЬ?**
- Читай CONTEXT.md для деталей
- Читай DEPLOYMENT.md для деплоя
- Спроси пользователя что делать дальше

**✨ УДАЧИ!**
