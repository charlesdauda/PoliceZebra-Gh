# Police Zebra

A premium e-commerce storefront for **Police Zebra** — a textile and apparel brand. Customers browse the collection, customize per-unit sizes and colors, and place orders directly through WhatsApp with an auto-generated receipt.

---

## Stack

React 19 · Vite · Tailwind CSS v4 · React Router · Swiper.js · html2canvas · Lucide Icons · Context API

---

## Local Development

```bash
npm install
npm run dev
```


Build for production:

```bash
npm run build
```

---

## Configuration

- **WhatsApp number** — `src/components/CheckoutModal.jsx`
- **Products, sizes, and colors** — `src/data/products.js`
- **Gallery images** — `src/data/Gallery.js`

---

## Structure

```
src/
├── components/   UI components
├── context/      Global cart state
├── data/         Catalog and gallery
├── pages/        Route-level pages
└── assets/       Images and media
```

