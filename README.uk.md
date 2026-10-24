<p align="center">
  <a href="README.md">English</a> | <a href="README.ru.md">Русский</a> | <b>Українська</b> | <a href="README.es.md">Español</a>
</p>

<img align="right" alt="Рівень: середній" src="https://img.shields.io/badge/%D0%A0%D1%96%D0%B2%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%96%D0%B9-DBAB09">

# Пошук фільмів — TMDB

<p align="center">
  <img src="assets/task-02/demo.gif" alt="Демо: пошук, сітка фільмів, модальне вікно та сповіщення в готовому застосунку" width="800">
</p>

## Про проєкт

Односторінковий застосунок для пошуку фільмів за ключовим словом. Користувач
вводить запит, застосунок надсилає HTTP-запит до
[TMDB](https://www.themoviedb.org/) і показує сітку постерів. Клік по постеру
відкриває модальне вікно з фоновим кадром, описом, датою виходу та рейтингом.
Поки триває запит, показується лоадер; у разі помилки мережі — повідомлення про
помилку; для порожнього запиту або порожнього результату — спливне сповіщення.

![React: 19](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)
![TypeScript: strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite: 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS: Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=cssmodules&logoColor=white)
![Prettier: formatted](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=white)
![HTTP: axios](https://img.shields.io/badge/HTTP-axios-5A29E4?logo=axios&logoColor=white)
![API: TMDB](https://img.shields.io/badge/API-TMDB-01B4E4?logo=themoviedatabase&logoColor=white)
![toasts: react--hot--toast](https://img.shields.io/badge/toasts-react--hot--toast-20232A)
![form: actions](https://img.shields.io/badge/form-actions-20232A?logo=react&logoColor=white)
![hook: useEffect](https://img.shields.io/badge/hook-useEffect-20232A?logo=react&logoColor=white)
![modal: createPortal](https://img.shields.io/badge/modal-createPortal-20232A)

### Що прокачуєш

| Навичка                                | Де використовується в задачі                                           |
| -------------------------------------- | ---------------------------------------------------------------------- |
| HTTP-запити через `axios`              | `fetchMovies` у `src/services/movieService.ts`                         |
| Заголовок авторизації, змінні оточення | `Authorization: Bearer ...` з `VITE_TMDB_TOKEN`                        |
| Типізація відповіді API                | `Movie`, `FetchMoviesResponse`, `axios.get<FetchMoviesResponse>`       |
| `async/await`, `try/catch/finally`     | обробник пошуку в `App`                                                |
| Form Actions у React 19                | `<form action={handleSubmit}>` + `formData.get("query")` у `SearchBar` |
| Кілька станів                          | `movies`, `isLoading`, `isError`, `selectedMovie` в `App`              |
| Умовний рендеринг                      | `Loader`, `ErrorMessage`, `MovieGrid`, `MovieModal`                    |
| Спливні сповіщення                     | `react-hot-toast`: порожній запит і «фільми не знайдено»               |
| Колбек-пропси з аргументами            | `onSubmit(query)`, `onSelect(movie)`, `onClose()`                      |
| Портали                                | `MovieModal` рендериться в `document.body` через `createPortal`        |
| `useEffect` з очищенням                | слухач ESC і блокування скролу `body` у `MovieModal`                   |
| CSS-модулі                             | готові `*.module.css` для кожного компонента                           |

---

## Задача

Створи застосунок для пошуку фільмів за ключовим словом через TMDB API.

> 💡 Свої стилі писати не потрібно — зосередься лише на логіці на React і TypeScript.

Верстка вже готова: усі компоненти з JSX-розміткою та стилями лежать у гілці
(стилі взято з
[goitacademy/react-movies-styles](https://github.com/goitacademy/react-movies-styles)),
тож одразу переходь до **логіки на React і TypeScript**: HTTP-запитів, стану,
пропсів, типізації, умовного рендерингу та модального вікна.

## Що вже є в стартовому коді

<p align="center">
  <img src="assets/task-02/components.png" alt="Структура компонентів: SearchBar, MovieGrid, Loader, ErrorMessage і MovieModal всередині App" width="800">
</p>

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← рендерить компоненти
│   ├── SearchBar/      SearchBar.tsx, SearchBar.module.css        ← хедер із формою пошуку
│   ├── MovieGrid/      MovieGrid.tsx, MovieGrid.module.css        ← розмітка сітки (одна картка-приклад)
│   ├── Loader/         Loader.tsx, Loader.module.css              ← «Loading movies, please wait...»
│   ├── ErrorMessage/   ErrorMessage.tsx, ErrorMessage.module.css  ← «There was an error, please try again...»
│   └── MovieModal/     MovieModal.tsx, MovieModal.module.css      ← розмітка модалки (поки не рендериться)
└── types/
    └── movie.ts                                                   ← інтерфейс Movie
.env.example                                                       ← шаблон для VITE_TMDB_TOKEN
```

- Кожен компонент має готову JSX-розмітку та свій CSS-модуль.
- `App` рендерить `SearchBar`, `Loader`, `ErrorMessage` і `MovieGrid` одразу
  всі разом — логіки поки немає. `MovieModal` імпортовано, але закоментовано,
  бо його бекдроп перекрив би всю сторінку.
- `axios` і `react-hot-toast` уже додано в `package.json`.
- У `src/types/movie.ts` уже експортовано тип фільму:

  ```ts
  export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
  }
  ```

## Загальні вимоги

- Не змінюй розмітку та стилі — лише додавай логіку, пропси та типи.
- Компоненти експортуються за замовчуванням (`export default`).
- Спільні типи лежать у `src/types`. Типи та інтерфейси, що стосуються одного
  компонента (наприклад, пропси), оголошуються прямо у файлі цього компонента.
- Ніколи не зберігай токен доступу в коді — лише у змінній оточення
  `VITE_TMDB_TOKEN`. Файл `.env` уже додано в `.gitignore`.
- Код на TypeScript має бути чистим, читабельним і відформатованим Prettier.

---

## Крок 1. Токен доступу TMDB

1. Зареєструйся на [themoviedb.org](https://www.themoviedb.org/signup) і
   підтверди пошту.
2. Відкрий **Settings → API**, створи застосунок (тип — *Developer*,
   використання — особисте/навчальне) і заповни форму.
3. Скопіюй **API Read Access Token** (довгий JWT-рядок, а не короткий API Key).
4. Створи в корені проєкту файл `.env` за зразком `.env.example`:

   ```bash
   VITE_TMDB_TOKEN=your_tmdb_read_access_token
   ```

5. Перезапусти `npm run dev` — Vite читає `.env` лише під час старту. У коді
   токен доступний як `import.meta.env.VITE_TMDB_TOKEN`.

Корисні розділи документації:
[авторизація](https://developer.themoviedb.org/docs/authentication-application),
[пошук фільмів](https://developer.themoviedb.org/reference/search-movie),
[повний шлях до зображення](https://developer.themoviedb.org/docs/image-basics).

## Крок 2. Сервіс `fetchMovies`

Створи файл `src/services/movieService.ts` із функцією `fetchMovies`:

- приймає пошуковий запит (`string`) і повертає `Promise<Movie[]>`;
- надсилає `GET https://api.themoviedb.org/3/search/movie`;
- опиши відповідь інтерфейсом `FetchMoviesResponse` (мінімум `results: Movie[]`)
  і передай його в axios: `axios.get<FetchMoviesResponse>(...)`.

Об'єкт налаштувань axios виглядає так:

```ts
{
  params: {
    query, // твої параметри
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}
```

> Перевір результат у консолі до підключення інтерфейсу: один раз виклич
> `fetchMovies("batman")` і переконайся, що приходить масив фільмів.

## Крок 3. `SearchBar` — Form Actions і валідація

| Пропс      | Тип                       | Опис                                  |
| ---------- | ------------------------- | ------------------------------------- |
| `onSubmit` | `(query: string) => void` | передає значення інпуту батькові      |

- Оголоси інтерфейс `SearchBarProps` у файлі компонента.
- Обробляй форму через **Form Actions**: `<form action={handleSubmit}>`, де
  `handleSubmit(formData: FormData)` читає `formData.get("query")`.
- Якщо поле порожнє (після `trim()`), покажи сповіщення
  `Please enter your search query.` і не викликай `onSubmit`.
- Ця перевірка виконується в `SearchBar`. Додай `<Toaster />` з
  `react-hot-toast` один раз в `App`, інакше сповіщень не буде видно.

Після цього кроку застосунок має працювати так:

![Результат кроку 3: для порожнього запиту з'являється сповіщення](assets/task-02/01-validation.gif)

## Крок 4. Пошук в `App` і `MovieGrid`

В `App` створи стан `movies` (`Movie[]`) і обробник пошуку, який передаси в
`SearchBar` через `onSubmit`. Обробник:

1. очищає попередню колекцію (`setMovies([])`) — кожен новий пошук
   починається з нуля;
2. викликає `fetchMovies(query)` і зберігає результат у `movies`.

Додай пропси в `MovieGrid`:

| Пропс      | Тип                      | Опис                            |
| ---------- | ------------------------ | ------------------------------- |
| `movies`   | `Movie[]`                | масив фільмів                   |
| `onSelect` | `(movie: Movie) => void` | викликається при кліку на картку |

- Оголоси інтерфейс `MovieGridProps`.
- Через `map()` рендери по одному `<li key={movie.id}>` на фільм.
- Адреса постера: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  `alt` — назва фільму.
- `MovieGrid` рендериться **лише якщо** `movies.length > 0`.

Після цього кроку застосунок має працювати так:

![Результат кроку 4: пошук показує сітку постерів](assets/task-02/02-search-batman.gif)

## Крок 5. `Loader` і `ErrorMessage`

Додай в `App` стани `isLoading` та `isError` (`boolean`).

- Перед запитом: `isLoading = true`, `isError = false`.
- Обгорни запит у `try/catch/finally`: у `catch` встанови `isError = true`, у
  `finally` — `isLoading = false`.
- `Loader` рендериться **замість** сітки, поки триває запит.
- `ErrorMessage` рендериться **замість** сітки, якщо запит завершився помилкою.

> Щоб перевірити `ErrorMessage`, тимчасово зіпсуй токен у `.env` і перезапусти
> dev-сервер.

## Крок 6. Сповіщення «фільми не знайдено»

Якщо запит успішний, але масив порожній, покажи сповіщення
`No movies found for your request.` Ця перевірка виконується в `App`, в
обробнику пошуку.

Після цього кроку застосунок має працювати так:

![Результат кроку 6: якщо нічого не знайдено, з'являється сповіщення](assets/task-02/04-no-results.gif)

## Крок 7. `MovieModal`

Клік по картці відкриває модалку з подробицями про фільм.

В `App`:

- створи стан `selectedMovie` (`Movie | null`);
- передай `setSelectedMovie` (або обгортку) в `MovieGrid` як `onSelect`;
- рендери `MovieModal`, лише коли `selectedMovie` не `null`;
- закриття модалки скидає `selectedMovie` у `null`.

Пропси `MovieModal`:

| Пропс     | Тип          | Опис                    |
| --------- | ------------ | ----------------------- |
| `movie`   | `Movie`      | обраний фільм           |
| `onClose` | `() => void` | закриває модалку        |

Вимоги:

- модалка рендериться поза основним деревом через `createPortal(..., document.body)`;
- закривається кнопкою **×**, клавішею **Escape** і кліком по бекдропу (але
  не по самій модалці — порівняй `event.target` і `event.currentTarget`);
- поки вона відкрита, прокручування сторінки заборонене
  (`document.body.style.overflow = "hidden"`);
- фонове зображення: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
- заміни заглушки на `title`, `overview`, `release_date` і `vote_average`
  (формат: `7.2/10`).

> **Очищення обов'язкове.** Слухач `keydown` і блокування скролу додавай у
> `useEffect`, а у функції, яку він повертає, видаляй слухач і відновлюй
> `overflow`. Після закриття нічого не повинно залишитися.

Після цього кроку застосунок готовий і має працювати так:

![Результат кроку 7: модалка відкривається, закривається та показує дані фільму](assets/task-02/03-modal-marvel.gif)

---

## Надсилання на рев'ю

Розв'язав задачу і хочеш, щоб я подивився? Ось кроки та вимоги.

**Вимоги до рішення**

- [ ] Усі кроки 1–7 виконано, усі пункти чек-листа нижче відмічено.
- [ ] Токена **немає** ні в коді, ні в комітах — лише в локальному `.env`.
- [ ] `npm run build` і `npm run lint` проходять без помилок.
- [ ] Код відформатовано Prettier.
- [ ] Застосунок перевірено в браузері: пошук, сповіщення, лоадер, помилка, сітка й модалка працюють.
- [ ] *(За бажанням)* Застосунок задеплоєно (Vercel / Netlify), `VITE_TMDB_TOKEN`
      задано в налаштуваннях хостингу, посилання додано в PR.

**Як надіслати**

1. Зроби **Fork** цього репозиторію (кнопка праворуч угорі на GitHub).
2. Склонуй свій форк і створи свою гілку від гілки задачі:
   ```bash
   git clone https://github.com/<твій-нік>/react.git
   cd react
   git checkout task-02-movie-search
   git checkout -b task-02-movie-search-<твій-нік>
   npm install
   cp .env.example .env   # і встав свій токен
   npm run dev
   ```
3. Розв'яжи задачу, закоміть і запуш гілку у свій форк:
   ```bash
   git push -u origin task-02-movie-search-<твій-нік>
   ```
4. Відкрий **Pull Request** у цей репозиторій:
   - **base:** `task-02-movie-search` (гілка задачі, **не** `main`);
   - **compare:** твоя гілка з форку;
   - у назві вкажи: `Рішення task-02 — <твій-нік>`;
   - заповни шаблон PR (він підставиться автоматично).
5. Я перегляну код і залишу коментарі прямо в PR.

PR **не мерджиться**, щоб гілка задачі залишалася чистою для наступних спроб.
Після рев'ю я закрию його, а твоє рішення залишиться у твоєму форку.

## Чек-лист

- [ ] Крок 1 — токен TMDB у `.env`
- [ ] Крок 2 — `fetchMovies` у `services/movieService.ts`, типізована відповідь
- [ ] Крок 3 — `SearchBar`: Form Actions, `onSubmit`, сповіщення про порожній запит
- [ ] Крок 4 — стан `movies`, обробник пошуку, `MovieGrid`
- [ ] Крок 5 — `Loader` і `ErrorMessage`
- [ ] Крок 6 — сповіщення «No movies found»
- [ ] Крок 7 — `MovieModal`: портал, ×/ESC/бекдроп, блокування скролу, очищення
