# Food Message — Law Website (React + TypeScript)

Frontend for **Food Message**, a React + TypeScript site for a lawyer specializing in food law, commercial law and consumer law.

---

## Quick start

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

---

## Project structure

```
src/
  components/
    layout/       # NavBar, Footer, SEO
    pages/        # Individual pages (Derecho Alimentario, etc.)
    sections/     # Home page sections Hero, PracticeSection, etc.
    ui/           # Reusable UI primitives
    hooks/        # Shared logic
  config/
    siteConfig.ts # Text, localization, navigation
  types/
    types.ts      # Shared interfaces
```


## Styling

TailwindCSS is used for styling. Common utilities are wrapped into reusable components in `ui/`. Avoid repeating long class strings.

---


## Notes for Deployment

Build and serve statically. Ensure 404 fallback to `index.html`.

---

© Food Message. Built with React, TypeScript, and Vite.
