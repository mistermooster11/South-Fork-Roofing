# South Fork Roofing and Chimney — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-20
Prospect: https://southforkroofingandchimney.com
Template: Enterprise-Business-Template (Clients/Enterprise-Business-Template/)
Reference site: n/a (template structure preserved)

---

## Source Material Summary

**Business name:** South Fork Roofing and Chimney
**Phone:** (631) 527-6834
**Email:** southforkroofingandchimney@gmail.com
**Address:** 105 Newtown Ln, East Hampton, NY 11937
**Founded:** 1985 (40+ years in business)
**Hours:** Available 24 hours, 7 days a week
**Primary service area:** East Hampton, Southampton, Bridgehampton, Hampton Bays, Amagansett, Montauk; all of Long Island
**Google rating:** 5 stars / 52 reviews

**Differentiators extracted from site:**
- 40+ years in business (since 1985)
- Free estimates + written quotes before work begins
- Works directly with insurance adjusters on storm damage claims
- Lifetime warranty shingles available
- Emergency service dispatched fast
- Available 24/7

**Testimonials extracted (5 real reviews):**
1. Joel Wilson — 2-property client, long-term relationship
2. Eli Douglas — praised professionalism start-to-finish
3. Maverick Barrett — emergency roof leak, Tony dispatched quickly
4. Bailey Lewis — Blair worked with insurance to get all repairs covered
5. Liam Morgan — total tear-off of shingle roof and flat roof

**Crawl notes:** All sub-pages of southforkroofingandchimney.com returned 404 or blocked the crawler. Content extracted from homepage only + supplemented with a third-party directory listing (nears.me) for hours and review data.

---

## Service Inventory

1. Roof Repair
2. Roof Replacement
3. Flat Roofing
4. Emergency Roof Repair
5. Chimney Repair & Cleaning
6. Chimney Rebuild
7. Siding
8. Skylights
9. Gutters

---

## Services Consolidated

None. All 9 services are kept as separate entries in `crafts.ts` and `service-pages.tsx`. No merges were made.

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
- Hero: "The Hamptons' Trusted Roofing & Chimney Specialists Since 1985" — pulled from prospect's homepage headline area
- Announcements / How It Works: 3-step process (Free Inspection → Written Estimate → Complete & Clean Up) — generated to match trade standard; no process steps appeared explicitly on the site
- Difference stats: 1985 (founding year), 5★ (52 reviews), Free (estimates + insurance claims) — all extracted
- Testimonials: 5 real reviews from the prospect's site
- HomeCTA: roofing/insurance copy + (631) 527-6834

### About Us (`app/explore/[slug]/page.tsx` — driven by `data/channel/southfork-roofing.tsx`)
- Hero, learnMore sections, resources, crafts list, testimonials, flexFeature (emergency service), getInTouch — all populated with extracted content
- "Why Choose South Fork" differentiators from the prospect's homepage bullets

### Services Index (`app/craft-catalog/page.tsx`)
- Updated metadata and `CraftCatalogHero.tsx` hero copy to match roofing trade

### Individual Service Pages (`app/craft-catalog/[slug]/page.tsx`)
- 9 service pages, each with overview, "When You Need It" section, "Our Process" section, and related services
- Descriptions drawn from extracted content where available; trade library used to fill gaps for less-described services (flat roofing process, skylight types)

### Programs / Service Cards (`data/programs.tsx`)
- 9 cards, one per service — description pulled from service-pages data

### Contact (`app/contact-us/page.tsx`)
- Address: 105 Newtown Ln, East Hampton, NY 11937
- Phone: (631) 527-6834
- Service dropdown: all 9 services
- Map: approximate East Hampton coordinates — [TODO: replace with verified Google Maps embed]

### Service Areas (`app/service-areas/page.tsx`)
- 5 sections: East Hampton (home base), Southampton, Hampton Bays, Montauk, All of Long Island
- Neighborhood callouts generated from regional knowledge — no specific neighborhood list appeared on the source site

### FAQs (`app/general-faqs/page.tsx`)
- 8 roofing-specific FAQs written from trade library + extracted differentiators
- Covers: service area, free estimates, replacement duration, insurance claims, repair vs. replace, emergency repair, chimney cleaning frequency, commercial/industrial

### Gallery (`app/gallery/page.tsx`)
- 6 cards for each service category
- Images: 2 real photos from the prospect's WordPress media library used as placeholders; all marked [TODO] for replacement with actual job photos

### Blog (`app/blog/page.tsx`)
- 6 placeholder posts with realistic titles and excerpts relevant to Long Island roofing trade
- All marked [TODO: Replace with real content once published]

### Privacy Policy (`app/privacy-policy/page.tsx`)
- Updated all business name, phone, address references from previous client (AE NYC Plumbing) to South Fork Roofing and Chimney

---

## Navigation Changes

**Template default (AE NYC):** Home, Services, Explore, Programs, Contact + mega-dropdown

**South Fork nav (simplified to 5 flat items):**
- Home `/`
- Services `/craft-catalog`
- About Us `/explore/southfork-roofing`
- Gallery `/gallery`
- Contact `/contact-us`

**Changes from template default:**
- FAQs removed from primary nav (still accessible via footer)
- Gallery added (trade businesses benefit from visual work showcase)
- Programs renamed to "Services" pointing to craft-catalog
- About Us points to channel page with client slug

---

## Copy Generation Log

The following copy was **generated** (not extracted from the source site):

| Section | Content Generated | Reason |
|---------|------------------|--------|
| Announcements (How It Works) | 3-step process headings + descriptions | No process section existed on source site; standard for roofing trade |
| Service area neighborhoods | Specific neighborhood lists in service-areas page | Source site listed only 6 cities, no neighborhood breakdown |
| Service page "Our Process" sections | Process descriptions for all 9 services | Source site had no per-service process copy |
| Service page "When You Need It" sections | Symptom/trigger lists | Source site had no structured diagnostic copy |
| Blog post titles + excerpts (6 posts) | Placeholder content | No blog existed on source site |
| Gallery item labels | 6 category labels | No real before/after gallery on source site |
| FAQ answers (8 FAQs) | Answers using extracted differentiators + trade library | No FAQ page on source site |

All other copy — business name, phone, address, service names, differentiator bullets, testimonials, hero headline, founding date, geographic coverage — was **extracted** from the prospect's site.

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| `app/robots.ts` | Created — disallows all crawlers | Staging block active; update for production |
| `app/sitemap.ts` | Created — covers all routes + 9 service slugs | Domain set to `southforkroofingandchimney.com` — confirm production domain |
| LocalBusiness JSON-LD | Added to `app/layout.tsx` | `@type: "RoofingContractor"`, real address/phone/email, foundingDate 1985, geo East Hampton, areaServed 6 cities, aggregateRating 5.0/52, hours 24/7 |
| Root metadata (title, description, OG, Twitter) | Done | Full template in `app/layout.tsx`; OG image slot flagged with TODO |
| Production domain | [TODO: confirm] | Currently using `southforkroofingandchimney.com`; verify before launch |
| Business hours | Set to 24/7 (00:00–23:59) | Confirmed from directory listing — verify with client |
| OG image (1200x630) | [TODO: provide] | `/images/og-image.jpg` slot reserved; client to provide branded image |
| Per-page layout.tsx files | Updated | All 6 sub-page layout files have roofing-specific titles and descriptions |

---

## TODOs for Client Before Launch

| # | Item | File | Notes |
|---|------|------|-------|
| 1 | Replace hero image with professional job site photo | `components/custom/Hero.tsx` | Currently using WP media library photo |
| 2 | Add real OG/social sharing image (1200×630 px) | `/public/images/og-image.jpg` | Used in `app/layout.tsx` for Open Graph and Twitter cards |
| 3 | Replace gallery images with actual job photos | `app/gallery/page.tsx` | 6 slots with [TODO] comments; currently using placeholder WP images |
| 4 | Confirm/replace Google Maps embed | `app/contact-us/page.tsx` | Currently using approximate East Hampton coordinates — replace with real Google Maps embed URL |
| 5 | Add Facebook profile URL | `components/custom/Footer.tsx` | `[TODO: Add South Fork Roofing Facebook URL]` |
| 6 | Add YouTube channel URL (if applicable) | `components/custom/Footer.tsx` | `[TODO: Add South Fork Roofing YouTube URL]` |
| 7 | Add company logo | `components/custom/header/Topnav.tsx`, `Footer.tsx` | Logo slots marked with [TODO] |
| 8 | Connect contact form backend | `app/contact-us/page.tsx` | Form currently has no submission handler — wire up to email/CRM |
| 9 | Replace placeholder blog posts with real content | `app/blog/page.tsx` | All 6 posts are placeholders |
| 10 | Replace service accordion images | `lib/constants/AccordionItems.tsx` | 4 image slots reference `/images/` paths with [TODO] comments |
| 11 | Confirm production domain | `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` | Enable indexing and update domain before launch |
| 12 | Verify business hours (currently set to 24/7) | `app/layout.tsx` JSON-LD | Confirm with client if 24/7 is accurate |
| 13 | Add per-service photos | `app/craft-catalog/[slug]/page.tsx` | `PLACEHOLDER_BG` const used; replace with real service photos per slug |
