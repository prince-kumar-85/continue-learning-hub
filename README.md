# Continue Learning — LMS Dashboard

A high-fidelity desktop UI design for a "Continue Learning" feature in a modern EdTech learning platform. Built to help students quickly resume unfinished courses, track progress, stay motivated, and build consistent learning habits.

Inspired by Coursera, Duolingo, and Notion — the design favors a premium, productivity-focused SaaS aesthetic that is clean, intuitive, and accessible.

## Features

- **Hero Resume Section** — One-click return to the last active lesson with progress stats (percentage complete, lessons left, time remaining).
- **Active Courses** — Card grid with progress bars, difficulty badges, and quick-resume actions.
- **AI Recommendations** — Personalized course suggestions with match-percentage scoring.
- **Learning Analytics** — Weekly hours bar chart and study trend widgets.
- **Motivation System** — 7-day streak tracker, daily goal ring, and achievement badges.
- **Course Continuation Flow** — Module sidebar (locked / done / current states) plus lesson player, resources, and notes.
- **Empty State** — Motivational onboarding view for new learners.

## Design System

- OKLCH color tokens defined in `src/styles.css` (`--primary`, `--primary-soft`, `--success`, `--streak`, …)
- Custom shadows and gradients (`--shadow-elevated`, hero & streak gradients)
- Strict 8px spacing grid
- Reusable shadcn/ui component library (buttons, cards, progress, tabs, sidebar, badges)

## Tech Stack

- TanStack Start (React 19 + Vite 7)
- Tailwind CSS v4 with semantic design tokens
- shadcn/ui component primitives
- TypeScript (strict)

## Project Structure

```
src/
  routes/
    __root.tsx       # Root layout
    index.tsx        # Continue Learning dashboard
  components/ui/     # Reusable UI primitives
  styles.css         # Design tokens & theme
```

## UX Rationale

- **Reduce friction** — the hero CTA resumes the exact lesson the student left, eliminating navigation overhead.
- **Drive consistency** — streaks, daily goals, and weekly analytics create lightweight, visible feedback loops.
- **Stay focused** — a calm, content-first layout with restrained color usage keeps attention on learning, not chrome.
- **Scalable structure** — auto-layout cards and a tokenized design system make it easy to extend with new course types, widgets, and states.

## Getting Started

```bash
bun install
bun run dev
```

Open the preview to view the dashboard.