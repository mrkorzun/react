<p align="center">
  <a href="README.md">English</a> | <b>Русский</b> | <a href="README.uk.md">Українська</a> | <a href="README.es.md">Español</a>
</p>

<img align="right" alt="Уровень: средний" src="https://img.shields.io/badge/%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9-DBAB09">

# Поиск фильмов — TMDB

<p align="center">
  <img src="assets/task-02/demo.gif" alt="Демо: поиск, сетка фильмов, модальное окно и уведомления в готовом приложении" width="800">
</p>

## О проекте

Одностраничное приложение для поиска фильмов по ключевому слову. Пользователь
вводит запрос, приложение отправляет HTTP-запрос к
[TMDB](https://www.themoviedb.org/) и показывает сетку постеров. Клик по
постеру открывает модальное окно с фоновым кадром, описанием, датой выхода и
рейтингом. Пока идёт запрос, показывается лоадер; при ошибке сети — сообщение
об ошибке; при пустом запросе или пустом результате — всплывающее уведомление.

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

### Что прокачиваешь

| Навык                                  | Где используется в задаче                                              |
| -------------------------------------- | ---------------------------------------------------------------------- |
| HTTP-запросы через `axios`             | `fetchMovies` в `src/services/movieService.ts`                         |
| Заголовок авторизации, переменные окружения | `Authorization: Bearer ...` из `VITE_TMDB_TOKEN`                  |
| Типизация ответа API                   | `Movie`, `FetchMoviesResponse`, `axios.get<FetchMoviesResponse>`       |
| `async/await`, `try/catch/finally`     | обработчик поиска в `App`                                              |
| Form Actions в React 19                | `<form action={handleSubmit}>` + `formData.get("query")` в `SearchBar` |
| Несколько состояний                    | `movies`, `isLoading`, `isError`, `selectedMovie` в `App`              |
| Условный рендеринг                     | `Loader`, `ErrorMessage`, `MovieGrid`, `MovieModal`                    |
| Всплывающие уведомления                | `react-hot-toast`: пустой запрос и «фильмы не найдены»                 |
| Колбэк-пропсы с аргументами            | `onSubmit(query)`, `onSelect(movie)`, `onClose()`                      |
| Порталы                                | `MovieModal` рендерится в `document.body` через `createPortal`         |
| `useEffect` с очисткой                 | слушатель ESC и блокировка скролла `body` в `MovieModal`               |
| CSS-модули                             | готовые `*.module.css` для каждого компонента                          |

---

## Задача

Создай приложение для поиска фильмов по ключевому слову через TMDB API.

> 💡 Свои стили писать не нужно — сосредоточься только на логике на React и TypeScript.

Вёрстка уже готова: все компоненты с JSX-разметкой и стилями лежат в ветке,
поэтому сразу переходи к **логике на React и TypeScript**: HTTP-запросам,
состоянию, пропсам, типизации, условному рендерингу и модальному окну.

## Что уже есть в стартовом коде

<p align="center">
  <img src="assets/task-02/components.png" alt="Структура компонентов: SearchBar, MovieGrid, Loader, ErrorMessage и MovieModal внутри App" width="800">
</p>

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← рендерит компоненты
│   ├── SearchBar/      SearchBar.tsx, SearchBar.module.css        ← шапка с формой поиска
│   ├── MovieGrid/      MovieGrid.tsx, MovieGrid.module.css        ← разметка сетки (одна карточка-пример)
│   ├── Loader/         Loader.tsx, Loader.module.css              ← «Loading movies, please wait...»
│   ├── ErrorMessage/   ErrorMessage.tsx, ErrorMessage.module.css  ← «There was an error, please try again...»
│   └── MovieModal/     MovieModal.tsx, MovieModal.module.css      ← разметка модалки (пока не рендерится)
└── types/
    └── movie.ts                                                   ← интерфейс Movie
.env.example                                                       ← шаблон для VITE_TMDB_TOKEN
```

- У каждого компонента есть готовая JSX-разметка и свой CSS-модуль.
- `App` рендерит `SearchBar`, `Loader`, `ErrorMessage` и `MovieGrid` сразу
  все вместе — логики пока нет. `MovieModal` импортирован, но закомментирован,
  потому что его бэкдроп перекрыл бы всю страницу.
- `axios` и `react-hot-toast` уже добавлены в `package.json`.
- В `src/types/movie.ts` уже экспортирован тип фильма:

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

## Общие требования

- Не меняй разметку и стили — только добавляй логику, пропсы и типы.
- Компоненты экспортируются по умолчанию (`export default`).
- Общие типы лежат в `src/types`. Типы и интерфейсы, которые относятся к
  одному компоненту (например, пропсы), объявляются прямо в файле этого
  компонента.
- Никогда не храни токен доступа в коде — только в переменной окружения
  `VITE_TMDB_TOKEN`. Файл `.env` уже добавлен в `.gitignore`.
- Код на TypeScript должен быть чистым, читаемым и отформатированным Prettier.

---

## Шаг 1. Токен доступа TMDB

1. Зарегистрируйся на [themoviedb.org](https://www.themoviedb.org/signup) и
   подтверди почту.
2. Открой **Settings → API**, создай приложение (тип — *Developer*,
   использование — личное/учебное) и заполни форму.
3. Скопируй **API Read Access Token** (длинная JWT-строка, а не короткий API Key).
4. Создай в корне проекта файл `.env` по образцу `.env.example`:

   ```bash
   VITE_TMDB_TOKEN=your_tmdb_read_access_token
   ```

5. Перезапусти `npm run dev` — Vite читает `.env` только при старте. В коде
   токен доступен как `import.meta.env.VITE_TMDB_TOKEN`.

Полезные разделы документации:
[авторизация](https://developer.themoviedb.org/docs/authentication-application),
[поиск фильмов](https://developer.themoviedb.org/reference/search-movie),
[полный путь к изображению](https://developer.themoviedb.org/docs/image-basics).

## Шаг 2. Сервис `fetchMovies`

Создай файл `src/services/movieService.ts` с функцией `fetchMovies`:

- принимает поисковый запрос (`string`) и возвращает `Promise<Movie[]>`;
- отправляет `GET https://api.themoviedb.org/3/search/movie`;
- опиши ответ интерфейсом `FetchMoviesResponse` (минимум `results: Movie[]`)
  и передай его в axios: `axios.get<FetchMoviesResponse>(...)`.

Объект настроек axios выглядит так:

```ts
{
  params: {
    query, // твои параметры
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}
```

> Проверь результат в консоли до подключения интерфейса: один раз вызови
> `fetchMovies("batman")` и убедись, что приходит массив фильмов.

## Шаг 3. `SearchBar` — Form Actions и валидация

| Пропс      | Тип                       | Описание                              |
| ---------- | ------------------------- | ------------------------------------- |
| `onSubmit` | `(query: string) => void` | передаёт значение инпута родителю     |

- Объяви интерфейс `SearchBarProps` в файле компонента.
- Обработай форму через **Form Actions**: `<form action={handleSubmit}>`, где
  `handleSubmit(formData: FormData)` читает `formData.get("query")`.
- Если поле пустое (после `trim()`), покажи уведомление
  `Please enter your search query.` и не вызывай `onSubmit`.
- Эта проверка делается в `SearchBar`. Добавь `<Toaster />` из
  `react-hot-toast` один раз в `App`, иначе уведомлений не будет видно.

После этого шага приложение должно работать так:

![Результат шага 3: при пустом запросе появляется уведомление](assets/task-02/01-validation.gif)

## Шаг 4. Поиск в `App` и `MovieGrid`

В `App` создай состояние `movies` (`Movie[]`) и обработчик поиска, который
передашь в `SearchBar` через `onSubmit`. Обработчик:

1. очищает предыдущую коллекцию (`setMovies([])`) — каждый новый поиск
   начинается с нуля;
2. вызывает `fetchMovies(query)` и сохраняет результат в `movies`.

Добавь пропсы в `MovieGrid`:

| Пропс      | Тип                      | Описание                        |
| ---------- | ------------------------ | ------------------------------- |
| `movies`   | `Movie[]`                | массив фильмов                  |
| `onSelect` | `(movie: Movie) => void` | вызывается при клике на карточку |

- Объяви интерфейс `MovieGridProps`.
- Через `map()` рендери по одному `<li key={movie.id}>` на фильм.
- Адрес постера: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  `alt` — название фильма.
- `MovieGrid` рендерится **только если** `movies.length > 0`.

После этого шага приложение должно работать так:

![Результат шага 4: поиск показывает сетку постеров](assets/task-02/02-search-batman.gif)

## Шаг 5. `Loader` и `ErrorMessage`

Добавь в `App` состояния `isLoading` и `isError` (`boolean`).

- Перед запросом: `isLoading = true`, `isError = false`.
- Оберни запрос в `try/catch/finally`: в `catch` выставь `isError = true`, в
  `finally` — `isLoading = false`.
- `Loader` рендерится **вместо** сетки, пока идёт запрос.
- `ErrorMessage` рендерится **вместо** сетки, если запрос завершился ошибкой.

> Чтобы проверить `ErrorMessage`, временно испорти токен в `.env` и перезапусти
> dev-сервер.

## Шаг 6. Уведомление «фильмы не найдены»

Если запрос прошёл успешно, но массив пустой, покажи уведомление
`No movies found for your request.` Эта проверка делается в `App`, в
обработчике поиска.

После этого шага приложение должно работать так:

![Результат шага 6: если ничего не найдено, появляется уведомление](assets/task-02/04-no-results.gif)

## Шаг 7. `MovieModal`

Клик по карточке открывает модалку с подробностями о фильме.

В `App`:

- создай состояние `selectedMovie` (`Movie | null`);
- передай `setSelectedMovie` (или обёртку) в `MovieGrid` как `onSelect`;
- рендери `MovieModal`, только когда `selectedMovie` не `null`;
- закрытие модалки сбрасывает `selectedMovie` в `null`.

Пропсы `MovieModal`:

| Пропс     | Тип          | Описание                |
| --------- | ------------ | ----------------------- |
| `movie`   | `Movie`      | выбранный фильм         |
| `onClose` | `() => void` | закрывает модалку       |

Требования:

- модалка рендерится вне основного дерева через `createPortal(..., document.body)`;
- закрывается по кнопке **×**, по **Escape** и по клику на бэкдроп (но не на
  саму модалку — сравни `event.target` и `event.currentTarget`);
- пока она открыта, прокрутка страницы запрещена
  (`document.body.style.overflow = "hidden"`);
- фоновое изображение: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
- замени заглушки на `title`, `overview`, `release_date` и `vote_average`
  (формат: `7.2/10`).

> **Очистка обязательна.** Слушатель `keydown` и блокировку скролла добавляй в
> `useEffect`, а в функции, которую он возвращает, удаляй слушатель и
> восстанавливай `overflow`. После закрытия ничего не должно остаться.

После этого шага приложение готово и должно работать так:

![Результат шага 7: модалка открывается, закрывается и показывает данные фильма](assets/task-02/03-modal-marvel.gif)

---

## Отправка на ревью

Решил задачу и хочешь, чтобы я посмотрел? Вот шаги и требования.

**Требования к решению**

- [ ] Все шаги 1–7 выполнены, все пункты чек-листа ниже отмечены.
- [ ] Токена **нет** ни в коде, ни в коммитах — только в локальном `.env`.
- [ ] `npm run build` и `npm run lint` проходят без ошибок.
- [ ] Код отформатирован Prettier.
- [ ] Приложение проверено в браузере: поиск, уведомления, лоадер, ошибка, сетка и модалка работают.
- [ ] *(По желанию)* Приложение задеплоено (Vercel / Netlify), `VITE_TMDB_TOKEN`
      задан в настройках хостинга, ссылка добавлена в PR.

**Как отправить**

1. Сделай **Fork** этого репозитория (кнопка справа вверху на GitHub).
2. Склонируй свой форк и создай свою ветку от ветки задачи:
   ```bash
   git clone https://github.com/<твой-ник>/react.git
   cd react
   git checkout task-02-movie-search
   git checkout -b task-02-movie-search-<твой-ник>
   npm install
   cp .env.example .env   # и вставь свой токен
   npm run dev
   ```
3. Реши задачу, закоммить и запушь ветку в свой форк:
   ```bash
   git push -u origin task-02-movie-search-<твой-ник>
   ```
4. Открой **Pull Request** в этот репозиторий:
   - **base:** `task-02-movie-search` (ветка задачи, **не** `main`);
   - **compare:** твоя ветка из форка;
   - в названии укажи: `Решение task-02 — <твой-ник>`;
   - заполни шаблон PR (он подставится автоматически).
5. Я посмотрю код и оставлю комментарии прямо в PR.

PR **не мерджится**, чтобы ветка задачи оставалась чистой для следующих
попыток. После ревью я закрою его, а твоё решение останется в твоём форке.

## Чек-лист

- [ ] Шаг 1 — токен TMDB в `.env`
- [ ] Шаг 2 — `fetchMovies` в `services/movieService.ts`, типизированный ответ
- [ ] Шаг 3 — `SearchBar`: Form Actions, `onSubmit`, уведомление о пустом запросе
- [ ] Шаг 4 — состояние `movies`, обработчик поиска, `MovieGrid`
- [ ] Шаг 5 — `Loader` и `ErrorMessage`
- [ ] Шаг 6 — уведомление «No movies found»
- [ ] Шаг 7 — `MovieModal`: портал, ×/ESC/бэкдроп, блокировка скролла, очистка
