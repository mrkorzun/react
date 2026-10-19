<p align="center">
  <a href="README.md">English</a> | <b>Русский</b> | <a href="README.uk.md">Українська</a> | <a href="README.es.md">Español</a>
</p>

<img align="right" alt="Уровень: начальный" src="https://img.shields.io/badge/%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-2EA44F">

# Виджет отзывов — Sip Happens Café

![Демо: голосование, статистика и Reset в готовом приложении](assets/task-01/demo.gif)

## О проекте

Одностраничное приложение: посетитель оценивает кофейню (**Good / Neutral / Bad**)
и сразу видит статистику — количество голосов по каждому варианту, общее число
голосов и процент положительных отзывов. Пока голосов нет, показывается
сообщение «No feedback yet»; кнопка **Reset** появляется только после первого
голоса и сбрасывает результаты.

![React: 19](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)
![TypeScript: strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite: 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS: Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=cssmodules&logoColor=white)
![Prettier: formatted](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=white)
![hook: useState](https://img.shields.io/badge/hook-useState-20232A?logo=react&logoColor=white)
![props: typed](https://img.shields.io/badge/props-typed-20232A)
![rendering: conditional](https://img.shields.io/badge/rendering-conditional-20232A)
![state: lifting up](https://img.shields.io/badge/state-lifting%20up-20232A)

### Что прокачиваешь

| Навык                              | Где используется в задаче                                        |
| ---------------------------------- | ---------------------------------------------------------------- |
| Функциональные компоненты и JSX    | `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, `Notification`    |
| Композиция компонентов             | все компоненты рендерятся внутри `App`                           |
| Пропсы                             | передача данных и колбэков из `App` в дочерние компоненты        |
| Типизация пропсов (`interface`)    | `VoteOptionsProps`, `VoteStatsProps`                             |
| Общие TS-типы, union-типы          | `Votes`, `VoteTypes = 'good' \| 'neutral' \| 'bad'` в `src/types` |
| `useState` с объектом              | состояние `votes` `{ good, neutral, bad }`                       |
| Иммутабельное обновление состояния | `handleVote(type)` — spread + вычисляемый ключ `[type]`          |
| Подъём состояния (lifting state up) | состояние в `App`, дети получают его через пропсы               |
| Обработка событий                  | `onClick` на кнопках → `onVote` / `onReset`                      |
| Производные данные                 | `totalVotes` и `positiveRate` вычисляются, а не хранятся         |
| Условный рендеринг                 | `VoteStats` или `Notification`, кнопка Reset через `canReset`    |
| CSS-модули                         | `*.module.css` для каждого компонента, `modern-normalize`        |

---

## Задача

Создай приложение, которое позволяет пользователям оставлять отзывы о кофейне.
Есть три варианта оценки: **good**, **neutral**, **bad**. Пользователь выбирает
один из вариантов и видит статистику.

> 💡 Свои стили писать не нужно — сосредоточься только на логике на React и TypeScript.

Вёрстка уже готова: все компоненты с JSX-разметкой и стилями лежат в ветке,
поэтому не нужно тратить время на верстку — сразу переходи к **логике на React
и TypeScript**: состоянию, пропсам, типизации, вычислениям и условному
рендерингу.

## Что уже есть в стартовом коде

![Структура компонентов: CafeInfo, VoteOptions и VoteStats внутри App](assets/task-01/components.png)

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← рендерит все компоненты
│   ├── CafeInfo/       CafeInfo.tsx, CafeInfo.module.css          ← готов, логика не нужна
│   ├── VoteOptions/    VoteOptions.tsx, VoteOptions.module.css    ← разметка кнопок
│   ├── VoteStats/      VoteStats.tsx, VoteStats.module.css        ← разметка статистики (нули)
│   └── Notification/   Notification.tsx, Notification.module.css  ← сообщение «No feedback yet»
└── types/
    └── Vote.ts                                                    ← Votes и VoteTypes
```

- У каждого компонента есть готовая JSX-разметка и свой CSS-модуль.
- `App` рендерит `CafeInfo`, `VoteOptions`, `VoteStats` и `Notification` сразу
  все вместе — логики пока нет.
- В `src/types/Vote.ts` уже экспортированы общие типы:

  ```ts
  export interface Votes {
    good: number;
    neutral: number;
    bad: number;
  }

  export type VoteTypes = "good" | "neutral" | "bad";
  ```

## Общие требования

- Разметку и стили не меняем — добавляем только логику, пропсы и типы.
- Компоненты экспортируются по умолчанию (`export default`).
- Общие типы импортируются из `src/types/Vote.ts`. Типы и интерфейсы, которые
  относятся только к одному компоненту (например, пропсы), объявляются прямо в
  файле этого компонента.
- TypeScript-код должен быть чистым, понятным и отформатированным с помощью
  Prettier.

---

## Шаг 1. Изучи стартовый код

Запусти проект (`npm install`, `npm run dev`) и посмотри файлы в
`src/components` и `src/types`. Сейчас приложение одновременно показывает
информацию о кофейне, кнопки, статистику с нулями и сообщение «No feedback yet»,
а кнопки ничего не делают.

## Шаг 2. Состояние приложения

При клике на **Good / Neutral / Bad** в `VoteOptions` нужно сохранять выбор
пользователя и передавать его другим компонентам, в частности `<VoteStats />`.

Создай в `App` состояние `votes`, типизированное интерфейсом `Votes`:

```ts
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Добавь в `App` функции:

- `handleVote(type)` — обновляет состояние голосов; параметр типизирован через `VoteTypes`;
- `resetVotes()` — сбрасывает состояние.

`votes` — центральный источник данных; компоненты получают актуальные значения
через пропсы.

## Шаг 3. `VoteOptions` — пропсы и клики

Добавь пропсы в `VoteOptions` и подключи их к кнопкам:

| Пропс      | Тип                         | Описание                                                |
| ---------- | --------------------------- | ------------------------------------------------------- |
| `onVote`   | `(type: VoteTypes) => void` | вызывается при клике на кнопку голосования              |
| `onReset`  | `() => void`                | вызывается при клике на Reset, сбрасывает голоса        |
| `canReset` | `boolean`                   | показывать ли кнопку Reset (на этом этапе можно `true`) |

В файле компонента объяви интерфейс `VoteOptionsProps`. Передай из `App`
функции `handleVote` и `resetVotes`. Кнопки должны обновлять состояние в `App`.

После этого шага приложение должно работать так:

![Результат шага 3: кнопки VoteOptions обновляют состояние](assets/task-01/step-04-vote-options.gif)

## Шаг 4. `VoteStats` — вывод голосов

Добавь пропсы в `VoteStats` и замени нули в разметке на реальные значения:

| Пропс          | Тип      | Описание                                       |
| -------------- | -------- | ---------------------------------------------- |
| `votes`        | `Votes`  | количество голосов для good, neutral, bad      |
| `totalVotes`   | `number` | общее количество голосов (пока можно `0`)      |
| `positiveRate` | `number` | процент положительных голосов (пока можно `0`) |

В файле компонента объяви интерфейс `VoteStatsProps`. При кликах на кнопки в
`VoteOptions` изменения должны отображаться в `VoteStats`.

После этого шага приложение должно работать так:

![Результат шага 4: VoteStats показывает голоса](assets/task-01/step-05-vote-stats.gif)

## Шаг 5. Вычисление статистики

Вычисления выполняются в `App`, готовые значения передаются пропсами в
`VoteStats`.

```ts
const totalVotes = votes.good + votes.neutral + votes.bad;

const positiveRate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0;
```

> Для `totalVotes` и `positiveRate` **не нужно** создавать отдельные свойства в
> состоянии — это производные данные.

После этого шага приложение должно работать так:

![Результат шага 5: вычисляются Total и процент положительных](assets/task-01/step-06-statistics.gif)

## Шаг 6. `Notification` — условный рендеринг

Сейчас `App` рендерит `VoteStats` и `Notification` вместе. Сделай так, чтобы это
зависело от `totalVotes`:

- `totalVotes > 0` → рендерится `VoteStats`;
- `totalVotes === 0` → рендерится `Notification`.

`Notification` пропсов не принимает.

После этого шага приложение должно работать так:

![Результат шага 6: Notification показывается до первого голоса](assets/task-01/step-07-notification.gif)

## Шаг 7. Кнопка Reset по условию

Кнопка Reset отображается только когда есть хотя бы один голос. Используй
`totalVotes` в `App`, передай соответствующее значение пропсом `canReset` в
`VoteOptions` и рендери кнопку Reset, только если `canReset` равен `true`.

После этого шага приложение готово и должно работать так:

![Результат шага 7: кнопка Reset появляется только после первого голоса](assets/task-01/step-08-reset.gif)

---

## Сдача на проверку

Решил задачу и хочешь, чтобы я проверил? Вот шаги и условия.

**Требования к решению**

- [ ] Выполнены все шаги 1–7, отмечены все пункты чеклиста ниже.
- [ ] `npm run build` и `npm run lint` проходят без ошибок.
- [ ] Код отформатирован Prettier.
- [ ] Приложение проверено в браузере: голосование, статистика, `Notification` и Reset работают.
- [ ] *(Необязательно)* Приложение задеплоено (Vercel / Netlify / GitHub Pages), ссылка добавлена в PR.

**Как сдать**

1. Сделай **Fork** этого репозитория (кнопка справа вверху на GitHub).
2. Склонируй свой форк и создай свою ветку от ветки задачи:
   ```bash
   git clone https://github.com/<твой-ник>/react.git
   cd react
   git checkout task-01-cafe-feedback
   git checkout -b task-01-cafe-feedback-<твой-ник>
   npm install
   npm run dev
   ```
3. Реши задачу, закоммить и запушь ветку в свой форк:
   ```bash
   git push -u origin task-01-cafe-feedback-<твой-ник>
   ```
4. Открой **Pull Request** в этот репозиторий:
   - **base:** `task-01-cafe-feedback` (ветка задачи, **не** `main`);
   - **compare:** твоя ветка из форка;
   - название: `Решение task-01 — <твой-ник>`;
   - заполни шаблон PR (он подставится сам).
5. Я посмотрю код и оставлю комментарии прямо в PR.

PR **не мерджится**, чтобы ветка задачи осталась чистой для следующих
прохождений. После ревью я закрою PR, а твоё решение останется в твоём форке.

## Чеклист

- [ ] Шаг 1 — изучен стартовый код
- [ ] Шаг 2 — состояние `votes`, `handleVote` и `resetVotes`
- [ ] Шаг 3 — `VoteOptions`: пропсы и клики
- [ ] Шаг 4 — `VoteStats`: пропсы и значения
- [ ] Шаг 5 — `totalVotes` и `positiveRate`
- [ ] Шаг 6 — `Notification` и условный рендеринг
- [ ] Шаг 7 — Reset по условию
