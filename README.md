**English** | [Русский](README.ru.md) | [Українська](README.uk.md) | [Español](README.es.md)

# ⚛️ React — learning repository

My personal repository for learning React. Everything I study about React lives
here: theory, practice and tasks to solve again, all in one place.

## How the repository is organized

### `main` — current learning

This is where I push what I'm studying in the course right now. Each folder in
`src/components` is a learning stage built as a mini-project that I solve along
the way. The list grows as I progress.

| Folder                        | Mini-project                     |
| ----------------------------- | -------------------------------- |
| `src/components/Theory-pr`    | Theory in practice (`useState`)  |
| `src/components/Theory-pr2`   | Theory in practice, part 2       |
| `src/components/Cocktails-pr` | Cocktails app                    |

### Branches — tasks for re-solving

Separate branches hold tasks and components I want to come back to and solve
again to reinforce what I've learned. Branches are **never merged** into `main`.

- **`task-XX-name`** — the task description (README) on a clean template. I
  don't change this branch.

## Tasks

| #  | Task                               | Branch                                                                                     | Topics                                                     |
| -- | ---------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 01 | Feedback widget (Sip Happens Café) | [`task-01-cafe-feedback`](https://github.com/mrkorzun/react/tree/task-01-cafe-feedback) | components, props, `useState`, typing, conditional rendering |

> The full list of task branches is in this table. New task = new row.
> How to solve a task and how to add a new one is described in each task
> branch's README.

## Want to solve a task and show me?

I'd be happy to review your solution. Here's how:

1. **Fork** this repository (button at the top right on GitHub).
2. Clone your fork and switch to the task branch:
   ```bash
   git clone https://github.com/<your-username>/react.git
   cd react
   git checkout task-01-cafe-feedback
   git checkout -b task-01-cafe-feedback-<your-username>
   ```
3. Solve the task following its README, then commit and push the branch to your fork:
   ```bash
   git push -u origin task-01-cafe-feedback-<your-username>
   ```
4. Open a **Pull Request** to this repository:
   - **base:** `task-01-cafe-feedback` (the task branch, **not** `main`);
   - **compare:** your branch from the fork;
   - title: `Solution task-01 — <your-username>`.
5. I'll review the code and leave comments right in the PR.

PRs are **not merged**, so the task branch stays clean for future attempts.
After the review I'll close the PR, and your solution stays in your fork.

## Stack

- React 19 + TypeScript
- Vite
- CSS Modules + `modern-normalize`
- ESLint, Prettier
- `clsx`, `react-icons`

## Scripts

| Command           | What it does                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | start the dev server          |
| `npm run build`   | type-check and build          |
| `npm run preview` | preview the production build  |
| `npm run lint`    | run ESLint                    |
