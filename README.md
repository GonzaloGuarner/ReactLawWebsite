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
    pages/        
    sections/     # Home page sections 
    ui/           # Reusable UI primitives
    hooks/        
  config/
    siteConfig.ts # Text, localization, navigation
  types/
    types.ts      # Shared interfaces
```


## Styling

TailwindCSS is used for styling. Common utilities are wrapped into reusable components in `ui/`.

---


## Notes for Deployment

Build and serve statically. Ensure 404 fallback to `index.html`.

---

© Food Message. Built with React, TypeScript, and Vite.
