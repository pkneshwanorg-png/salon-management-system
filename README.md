# Lumina Salon Management System

**Course:** CSE326 Internet Programming  
**Student:** [Your Name]  
**Live URL:** https://neshwanpk.github.io/salon-management-system/

This is a multi-page salon management website I built for my CSE326 Internet Programming course. It covers a complete front-end for a fictional premium salon called "Lumina Salon" in Kochi, Kerala. All data is stored in localStorage — no server or npm required.

---

## Features

- 8-page website with shared design language across all pages
- Online appointment booking with double-booking prevention
- Admin dashboard (login required) to manage, update, and delete bookings
- Customer registration with duplicate-email check
- Service catalog with real INR prices, rendered from a JS data array
- Stylist profiles and weekly availability table
- Photo gallery (CSS Grid), video embed, audio player, and Google Maps iframe
- Dark / light theme toggle saved across sessions
- Fully responsive down to 360px wide
- Toast notifications after successful actions
- Seeded demo data loads on first visit

---

## Admin Login

Go to `appointments.html` and enter:

| Field    | Value        |
|----------|--------------|
| Username | `admin`      |
| Password | `lumina2026` |

Credentials are hardcoded for the demo. Session is stored in `sessionStorage` so it clears on tab close.

---

## Folder Structure

```
/
├── index.html          Home page
├── services.html       Service menu and price table
├── booking.html        Appointment booking form
├── appointments.html   Admin panel
├── staff.html          Stylist profiles
├── gallery.html        Photo gallery, video, audio, map
├── contact.html        Contact form and opening hours
├── register.html       Customer registration
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css
├── js/
│   ├── store.js        localStorage CRUD and seed data
│   └── main.js         Theme toggle, toast, nav active state
└── assets/
    ├── icons/favicon.svg
    ├── images/
    ├── video/
    └── audio/
```

---

## Syllabus Coverage

| Topic | Where Used |
|---|---|
| Valid HTML5 structure, elements, attributes | All pages |
| Text formatting, ordered/unordered/description lists | index.html, services.html |
| Hyperlinks, images with alt text | All pages |
| Inline SVG (logo, icons, decorative divider) | All pages (header, gallery.html, index.html) |
| `<audio>` element | gallery.html |
| `<video>` element | gallery.html |
| `<iframe>` element | gallery.html, contact.html |
| SEO: title, meta description, keywords, Open Graph | All pages `<head>` |
| Favicon | `assets/icons/favicon.svg` |
| sitemap.xml, robots.txt | Root directory |
| Semantic elements (header, nav, main, section, article, aside, figure, figcaption, footer, address, time) | All pages |
| Accessibility: ARIA roles, skip link, aria-label, aria-current, keyboard focus | All pages |
| Forms: all input types, fieldset/legend, HTML5 validation | booking.html, register.html, contact.html |
| Tables: thead, tbody, tfoot, caption, scope, colspan, rowspan | services.html, staff.html, contact.html, appointments.html |
| External CSS | css/style.css |
| CSS Selectors (class, id, descendant, child, sibling, attribute) | css/style.css |
| Pseudo-classes (:hover, :focus, :nth-child, :first-child, :checked, :valid, :invalid, :disabled) | css/style.css |
| Pseudo-elements (::before, ::after, ::first-letter, ::placeholder, ::selection) | css/style.css |
| CSS variables (:root) | css/style.css |
| Dark/light theme toggle | css/style.css + js/main.js |
| Flexbox | Navbar, footer, card rows |
| CSS Grid | Gallery, page layouts, dashboard cards |
| Responsive design, media queries (480/768/1024px) | css/style.css bottom section |
| Hamburger menu (checkbox hack) | All pages |
| CSS transitions and @keyframes animations | css/style.css (hero, loader, toast, button pulse) |
| Google Fonts + fallback stack | All pages |
| Colors, gradients, units (px, rem, em, %, vw, vh) | css/style.css |
| Form validation styling (:valid, :invalid, custom) | css/style.css |
| localStorage CRUD | js/store.js |
| Double-booking prevention | js/store.js `addBooking()` |
| Admin login with sessionStorage | appointments.html |

---

## Screenshots

*(Add screenshots of each page here after deploy)*

---

## How to Run Locally

Just open `index.html` in any browser. No build step needed.

---

## Technologies

- HTML5
- CSS3 (custom, no frameworks)
- Vanilla JavaScript (ES5-compatible)
- Google Fonts (Playfair Display, Lato)
- Unsplash for placeholder images (loaded via URL)
