# Lumina Salon Management System

**Course:** CSE326 Internet Programming  
**Student:** Neshwan PK  
**Live Website:** https://pkneshwanorg-png.github.io/salon-management-system/

A lightweight, 5-page salon management website for Lumina Salon (Kochi), built using pure HTML5, CSS3, and minimal vanilla JavaScript. All appointment data is stored locally in the browser using `localStorage`.

---

## Pages

1. **index.html** - Home page featuring hero banner, services overview, why-us highlights, and client testimonials.
2. **services.html** - Full service menu rendered dynamically from a JavaScript array, plus our stylist team directory and salon guidelines.
3. **booking.html** - Appointment reservation form with full HTML5 input validation, saving bookings to `localStorage` and displaying them in a table below.
4. **gallery.html** - CSS Grid visual transformation gallery, ambient audio player, interior walkthrough video, and interactive Google Maps iframe.
5. **contact.html** - Contact inquiry form, salon operating hours table, and location details.

---

## Syllabus Coverage (CSE326)

| Syllabus Unit | Concept / Requirement | Where It Is Used |
|---|---|---|
| **Unit I** | Valid HTML5 structure, elements & attributes | All 5 pages (`index.html`, `services.html`, etc.) |
| **Unit I** | Text formatting, headings hierarchy (`h1`-`h4`) | All pages |
| **Unit I** | Lists: Unordered (`<ul>`), Ordered (`<ol>`), Description (`<dl>`) | `index.html` (features), `services.html` (terms) |
| **Unit I** | Hyperlinks, images with descriptive `alt` text | All pages, `gallery.html` |
| **Unit I** | Inline SVG graphics (brand logo, icons, decorations) | Header on all pages, `gallery.html`, `index.html` |
| **Unit I** | `<audio>`, `<video>`, and `<iframe>` elements | `gallery.html` (audio & video), `contact.html` (Google Map) |
| **Unit I** | SEO: Meta title, description, keywords, Open Graph, favicon, sitemap, robots | All `<head>` tags, `sitemap.xml`, `robots.txt` |
| **Unit II** | Semantic elements (`header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `footer`, `address`, `time`) | All pages across site structure |
| **Unit II** | Accessibility: skip-to-content link, ARIA roles, label-for pairing, visible focus | All pages (`skip-link`, `aria-label`, form labels) |
| **Unit II** | Form controls: text, email, tel, date, time, number, select, datalist, radio, checkbox, textarea, range | `booking.html`, `contact.html` |
| **Unit II** | Form attributes: required, pattern, min, max, placeholder, autocomplete, HTML5 validation | `booking.html`, `contact.html` |
| **Unit II** | Tables: `thead`, `tbody`, `tfoot`, `caption`, `scope`, `colspan` | `services.html` (rates & stylists), `contact.html` (hours), `booking.html` |
| **Unit III** | External CSS stylesheet (`css/style.css`) | `css/style.css` linked across all pages |
| **Unit III** | CSS Variables (`:root`) and color palette | Top of `css/style.css` (`--gold`, `--bg`, etc.) |
| **Unit III** | Typography: Google Fonts (`Playfair Display`, `Lato`) with fallback font stack | `css/style.css` |
| **Unit III** | Selectors: class, id, descendant, child (`>`), adjacent sibling (`+`), grouping, attribute selectors (`input[type="..."]`, `a[href^="https"]`) | `css/style.css` |
| **Unit III** | Pseudo-classes: `:hover`, `:focus`, `:nth-child`, `:first-child`, `:checked`, `:valid`, `:invalid`, `:disabled` | `css/style.css` |
| **Unit III** | Pseudo-elements: `::before`, `::after`, `::first-letter`, `::placeholder`, `::selection` | `css/style.css` |
| **Unit III** | Box model, CSS units (`px`, `rem`, `em`, `%`, `vw`, `vh`) and positioning (`relative`, `absolute`, `fixed`) | `css/style.css` |
| **Unit III** | Flexbox: navigation bar, footer layout, button groups | `css/style.css` (`.nav-container`, `.nav-links`) |
| **Unit III** | CSS Grid: cards grid, gallery layout, responsive columns | `css/style.css` (`.cards-grid`, `.gallery-grid`) |
| **Unit III** | Pure CSS hamburger menu using checkbox hack | `index.html` & all pages (`#navToggle` + `.hamburger`) |
| **Unit III** | CSS transitions and `@keyframes` animations (`fadeUp`, `pulse`) | `css/style.css` (`.btn`, `.hero-content`) |
| **Unit III** | Responsive design with mobile-first media queries (`480px`, `768px`) | Bottom of `css/style.css` |
| **JavaScript** | LocalStorage CRUD, dynamic DOM rendering, client-side validation | `js/main.js` (< 60 lines) |

---

## How to Run

1. Open any of the HTML files directly in your web browser (e.g. double-click `index.html`).
2. No build tools, servers, or dependencies are required.
