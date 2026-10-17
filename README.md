# firstaidrcs

Портал первой помощи для волонтёров Красного Полумесяца Узбекистана. RU / EN / UZ.

Стек: Next.js 15, Supabase (база, вход для админов, картинки), Vercel.

## Что есть

- 28 тем по пособию Красного Полумесяца, протоколы сверены с рекомендациями ERC 2025
- тренажёры: метроном СЛР, алгоритм «что делать», звонок в 103, тест на инсульт, аптечка
- мини-тесты в темах и экзамен на 15 вопросов
- регистрация волонтёра: соглашение → анкета → контакты координатора
- кабинет волонтёра: прогресс, результаты, подтверждение обучения
- новости с redcrescent.uz (обновляются раз в час) + объявления из админки
- админка: темы, новости, заявки, волонтёры и роли

Без Supabase сайт тоже работает, просто без входа, заявок и админки.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

`npm test` — тесты, `npm run build` — сборка.

## Supabase

1. Создать проект, в SQL Editor выполнить `supabase/schema.sql`.
2. Authentication → Sign In / Providers: Email включён, регистрацию новых пользователей (Allow new users to sign up) можно выключить.
3. Authentication → Users → Add user → Create new user (email + пароль, галочка Auto Confirm).
4. Сделать его админом (или `coordinator`):

```sql
update public.profiles set role = 'admin' where email = 'admin@example.com';
```

## Vercel

Переменные окружения:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_URL=https://<site>.vercel.app
```

Пуш в `main` → Vercel сам пересобирает сайт.

## Контент

Темы лежат в `lib/content/`, картинки — в `public/media/<slug>/` (`1.webp` обложка, дальше галерея). Новые темы можно добавлять и через админку.

Фото на обложках — с Unsplash (`lib/photos.ts`), иллюстрации — из учебного пособия.

## TODO

- показать протоколы инструктору Красного Полумесяца
- согласовать использование эмблемы с Обществом
- вычитать узбекский перевод
