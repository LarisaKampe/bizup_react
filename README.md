# BizUp — React + Tailwind

## Stack
- **React 18** + **React Router v6**
- **Tailwind CSS v3**
- **Vite 5** (build tool)
- **Netlify** ready (SPA redirect via `netlify.toml`)

## Project structure
```
bizup/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← sticky nav, dropdowns, mobile menu
│   │   ├── Footer.jsx         ← 5-column footer
│   │   ├── HeroSection.jsx    ← reusable hero (all 4 pages)
│   │   ├── AnimateIn.jsx      ← scroll fade-in wrapper
│   │   └── ui/
│   │       ├── Button.jsx     ← primary / outline / lime variants
│   │       └── FundingCard.jsx
│   ├── hooks/
│   │   └── useInView.js       ← IntersectionObserver hook
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── OfferFinancePage.jsx
│   ├── App.jsx                ← router + scroll-to-top
│   ├── main.jsx
│   └── index.css              ← Tailwind + shared layer utilities
├── tailwind.config.js         ← custom colors: navy, cyan, lime
├── netlify.toml               ← SPA redirect rule
└── vite.config.js
```

## Getting started locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy to Netlify via GitHub
1. Push this folder to a GitHub repo
2. In Netlify: **Add new site → Import from GitHub**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `netlify.toml` handles all SPA redirect routing automatically

## Swapping hero images
All page hero images are referenced in the top of each page file:
```js
const HERO_IMG = 'https://...'   ← replace with /assets/your-image.jpg
```
Place images in `/public/assets/` and reference as `/assets/filename.jpg`.

## Custom brand colors (tailwind.config.js)
| Token       | Value     | Usage                  |
|-------------|-----------|------------------------|
| `navy`      | `#0C2D4E` | Primary dark           |
| `navy-dark` | `#091F37` | Hero backgrounds       |
| `cyan`      | `#19B8E8` | Accent, CTAs           |
| `lime`      | `#C4E415` | Bottom CTA banner      |

## Micro-animations included
- **Scroll reveal** — `AnimateIn` fades + slides elements in as they enter the viewport
- **Stagger delays** — cards in a row each animate in 80–100 ms apart
- **Hover lift** — `card-hover` class gives -translate-y + elevated shadow
- **Button press** — `active:scale-95` on all buttons
- **Nav link underline** — CSS animated underline on hover
- **Image zoom** — resource article images scale on hover
- **Sticky tabs** — careers tabs highlight based on scroll position via IntersectionObserver
