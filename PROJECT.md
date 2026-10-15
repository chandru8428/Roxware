# Roxware Consultancy — Website

## Overview
Roxware Consultancy is a creative web development and IT services studio website. The site is a **multi-page static web application** built with vanilla HTML5, CSS3, and ES6+ JavaScript — no frameworks, no build tools, no template bloat.

- **Repository**: [https://github.com/chandru8428/Roxware.git](https://github.com/chandru8428/Roxware.git)
- **Branch**: `main`

## Purpose
Professional online presence for Roxware Consultancy showcasing services (web development, digital marketing, SEO/GEO, IT infrastructure), case studies, testimonials, blog content, and a contact/project brief submission form.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Structure | Semantic HTML5 |
| Styling | Vanilla CSS3 (custom properties, grid, flexbox) |
| Logic | ES6+ JavaScript (no frameworks) |
| Typography | Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| Hosting | Static files via `npx serve -l 8080` |
| 3D (legacy) | Three.js (three-scenes.js, currently not loaded in multi-page version) |

## Pages
| Page | File | Hero Image | Description |
|------|------|-----------|-------------|
| Home | `index.html` | `hero_home.jpg` | Landing with photo-frame parallax hero, services strip, bento matrix, case studies, testimonials, CTA |
| Services | `services.html` | `hero_services.jpg` | Detailed service breakdowns: web dev, marketing, SEO/GEO, IT |
| About Us | `about.html` | `hero_about.jpg` | Company story, values, process timeline, tech stack |
| Blog | `blog.html` | `hero_blog.jpg` | Blog card grid with 6 article previews |
| Contact | `contact.html` | `hero_contact.jpg` | Contact info + project brief submission form |

## Installation & Development
```bash
# Install dependencies (just the serve tool)
npm install

# Start local dev server
npm run dev
# → http://localhost:8080
```

## Folder Structure
```
roxware/
├── index.html              # Home page (with Organization, WebSite & FAQ Schema)
├── services.html           # Services page (with Service catalogue & Breadcrumb Schema)
├── about.html              # About Us page (with AboutPage & Breadcrumb Schema)
├── blog.html               # Blog page (with Blog & BlogPosting Schema)
├── contact.html            # Contact page (with ContactPage & Breadcrumb Schema)
├── sitemap.xml             # Complete XML sitemap with image extensions
├── robots.txt              # Search engine crawling policies
├── site.webmanifest        # PWA & mobile search manifest
├── styles.css              # Complete design system & all component styles
├── app.js                  # Theme toggle, mobile drawer, scroll parallax, forms
├── three-scenes.js         # Three.js 3D scenes (legacy, not loaded in multi-page)
├── motion-prompts.json     # Detailed image/video motion prompts for hero frames
├── package.json            # NPM config with serve script
├── PROJECT.md              # This file
└── public/
    ├── logo.jpeg           # Roxware logo
    ├── hero_home.jpg       # Home page hero
    ├── hero_services.jpg   # Services page hero
    ├── hero_about.jpg      # About Us page hero
    ├── hero_contact.jpg    # Contact page hero
    ├── hero_blog.jpg       # Blog page hero
    ├── case_saas.jpg       # Case study image
    ├── case_retail.jpg     # Case study image
    └── case_creator.jpg    # Case study image
```

## Architecture Overview

### Photo-Frame Scroll-Driven Hero System
Each page has an immersive full-viewport hero with a photo background that responds to scroll:
- **Sticky container** (`position: sticky`) pins the hero to the viewport
- **Scroll progress** is calculated from the container's position relative to viewport
- **Parallax engine** in `app.js` applies lerp-interpolated `scale()` and `translateY()` transforms
- **Content fades** out as user scrolls past the hero zone
- **Overlay gradient** ensures text readability over any image

### Design System (CSS Custom Properties)
- Dark/Light theme via `[data-theme]` attribute with full token switching
- Warm copper/slate color palette derived from the Roxware logo
- Consistent spacing, typography, and component tokens across all pages

### Multi-Page Navigation
- Desktop: floating pill nav bar with active state per page
- Mobile: slide-in drawer with focus trap and escape-key close
- Active nav state detected from `window.location.pathname`

## Motion Prompts
The `motion-prompts.json` file contains detailed specifications for generating motion videos from the hero still images. Each entry includes:
- Still image prompt (subject, style, lighting, color palette)
- Motion video prompt (camera move, duration, frame count, easing)
- Parallax layer definitions (depth values, movement descriptions)
- Start/end frame transform specifications

Camera moves follow the motion-scroll-site skill's library:
- Home: `slow_dolly_in`
- Services: `slow_pan_right_with_tilt`
- About: `slow_orbit_left`
- Contact: `slow_crane_up`
- Blog: `slow_push_in_with_rotation`

## Current Status
- ✅ Multi-page architecture (5 pages)
- ✅ Photo-frame scroll-driven hero on all pages
- ✅ Background grid pattern removed
- ✅ Warm copper/slate hero images generated
- ✅ Motion prompts JSON created
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Dark/Light theme toggle
- ✅ Contact form with validation
- ✅ Testimonial slider
- ✅ Blog card grid
- ✅ Repository connected & published to GitHub (`main` branch)
- ✅ Advanced On-Page SEO: Open Graph, Twitter cards, canonical tags & targeted keywords
- ✅ Schema.org JSON-LD structured data (ProfessionalService, WebSite, FAQPage, Service, AboutPage, Blog, ContactPage, Breadcrumbs)
- ✅ Search engine assets: robots.txt, sitemap.xml, site.webmanifest
- ✅ Image SEO & Core Web Vitals optimization (100% explicit width/height, lazy loading, async decoding, zero CLS)

## Roadmap
- [ ] Generate actual motion videos from prompts (WebP frame sequences)
- [ ] Add blog article detail pages
- [ ] Connect contact form to backend/email service
- [ ] Add page transition animations between pages
- [ ] Performance audit and image optimization (WebP conversion)
