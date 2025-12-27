# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm run lint    # eslint
npm run start   # production server
```

## Architecture

Next.js 16 portfolio site for photographer Valentina Motta ("exha studio"). Uses App Router, React 19, Tailwind CSS 4, shadcn/ui (new-york style).

### Key Structure
- `app/` - pages: home, /works, /works/[category], /about, /contact
- `components/layout/` - Sidebar (fixed nav w/ collapsible works submenu), CursorDot (custom cursor)
- `components/gallery/` - CollageGrid (asymmetric masonry), ImageReveal (hover B&W reveal effect)
- `components/ui/` - shadcn primitives
- `lib/constants.ts` - design tokens (TIMING, EASING, BREAKPOINT_MOBILE)
- `hooks/use-mobile.ts` - shared mobile detection hook

### Routing
Static category pages via `generateStaticParams()`. Categories: editorial, personal, commercial, video.

### Styling
- Raleway font (100, 300, 400 weights)
- Custom CSS classes: `.text-label`, `.text-caption`, `.text-micro`, `.opacity-subtle/muted/soft`, `.vertical-text`, `.image-lift`
- CSS vars in `app/globals.css` for theming (warm cream palette)
- All text lowercase, minimal aesthetic
- Animation timing: 150ms (fast), 300ms (medium), 500ms (slow) with single easing

### Data
Project/work data currently hardcoded in page components (no CMS/DB).

## Conventions
- Use `cn()` from `lib/utils.ts` for class merging
- Use `useIsMobile()` from `hooks/use-mobile.ts` for responsive logic
- Use `TIMING`, `EASING` from `lib/constants.ts` for animations
- Images via Next.js `<Image>` with fill + object-cover
- Components are client-side ("use client") when using hooks/state
