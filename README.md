# SmaF1 Portfolio

Интерактивное портфолио Никиты Лютого. На главной странице ник `SmaF1` печатается автоматически, после чего открываются карточки проектов, навыков, опыта и достижений. Поиск и фильтры работают локально, без серверных запросов.

## Требования

- Node.js 20.9 или новее (рекомендуется актуальная LTS-версия)
- npm

## Локальный запуск

```powershell
npm install
npm run dev
```

Откройте <http://localhost:3000>.

## Проверка перед публикацией

```powershell
npm run check
npm run lint
npm run build
npm run start
```

При `npm run start` откройте <http://localhost:3000>.

**Важно:** перед первой установкой удалить старый `package-lock.json` и старый `yarn.lock`, затем выполнить `npm install`, чтобы получить актуальный `package-lock.json`. Обновлённый lock-файл нужно добавить в коммит вместе с кодом. В дальнейшем для чистой установки можно использовать `npm ci`.

## Где редактировать данные

- `src/app/data/portfolio.js` — все факты, тексты, карточки, ссылки, фильтры и подробные страницы
- `public/avatar.jpg` — фотография
- `src/app/components/SearchExperience.js` — автоматический ввод ника, поиск, карточки
- `src/app/components/SearchExperience.module.scss` — оформление главной страницы и адаптивность
- `src/app/explore/[slug]/page.js` — шаблон подробной страницы
- `src/app/explore/[slug]/detail.module.scss` — её оформление

Новые карточки добавляются в массив `portfolioItems` (с уникальным `slug`). Подробные страницы автоматически становятся доступны по `/explore/<slug>`.

## Vercel

Framework Preset: **Next.js**. Root Directory: корень репозитория. Install Command: `npm ci` **после** обновления и коммита `package-lock.json`. Build Command: `npm run build`. Никаких токенов и серверных переменных для работы сайта не требуется.

Рекомендуем перед публикацией проверить достоверность публичной информации в `portfolio.js` и контактные ссылки.
