# BIG BLEX GADGET

Premium, dark, mobile-first React website for BIG BLEX GADGET — a
WhatsApp-driven Nigerian gadget store.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Editing the WhatsApp number / messages

Everything lives in one place: `src/config.js`. Change the number there and
every button across the site updates.

## Adding real product photos

Category cards look for an image at:

```
public/images/products/<category-slug>/cover.jpg
```

e.g. `public/images/products/smartphones/cover.jpg`. Until a real photo is
added, the card automatically shows a styled icon placeholder instead of a
broken image — so you can drop photos in at any time with no code changes.

The Home and Buy/Sell/Swap pages also reference a few extra images
(`hero.jpg`, `buy.jpg`, `sell.jpg`, `swap.jpg`) inside those same
category folders — add them the same way. The Why Us page uses a separate
brand photo at `public/images/brand/blex-bag.jpg`.

**Current image status:**

| Category | cover.jpg | Notes |
|---|---|---|
| Smartphones | ✅ | also supplies `hero.jpg` (home) and `buy.jpg` (Buy/Sell/Swap) |
| Tablets | ✅ | extra shot at `gallery-2.jpg` (not wired into any page yet) |
| Earbuds | — | placeholder icon until a photo is added |
| Headphones | — | placeholder icon until a photo is added |
| Smartwatches | ✅ | also supplies `swap.jpg` |
| Laptops | ✅ | also supplies `sell.jpg` |
| Gaming | ✅ | |
| Chargers & Cables | ✅ | |
| Power Banks | ✅ | extra shots at `gallery-2.jpg`, `gallery-3.jpg` |
| Storage | ✅ | |
| Phone Accessories | ✅ | extra shot at `gallery-2.jpg` |
| Other Gadgets | — | placeholder icon until a photo is added |

Every placeholder card still works and looks intentional — just swap in a
`cover.jpg` for Earbuds, Headphones or Other Gadgets whenever you have one.

## Routes

- `/` — Home
- `/categories` — Categories
- `/buy-sell-swap` — Buy / Sell / Swap
- `/why-us` — Why Us
- `/contact` — Contact

All routes are handled by React Router and will work on direct visit/refresh
once deployed (SPA rewrite rules are included for both Netlify
`public/_redirects` and Vercel `vercel.json`).

## Stack

React + Vite + React Router + Tailwind CSS + Framer Motion + Lucide React.
