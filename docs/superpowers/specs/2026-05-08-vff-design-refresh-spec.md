# VFF Design Refresh — Spec

**Date**: 2026-05-08  
**Issue**: NEXA-432  
**Scope**: Homepage Hero, EventAreaCard, Header/Footer, decorative components, Game Icons, typography, Tailwind tokens  
**Timeline**: 75 days until event (2026-07-04/05)

---

## 1. Design System

### 1.1 Color Palette (Locked by Daniel 2026-05-08)

CI/Logo-based (NOT Wix Pink/Yellow):

```css
--color-primary: #A03020;          /* Terracotta — Hero, CTAs */
--color-secondary: #506020;        /* Dark Green — Accents, Links */
--color-secondary-light: #607030;  /* Light Green — Leaves, Ornaments */
--color-accent: #D08040;           /* Orange — Stars, Highlights */
--color-gold: #D0A050;             /* Gold — Gradient BGs, Deco */
--color-text: #33302F;             /* Body Text */
--color-bg: #FFFFFF;               /* Background */
```

Status: ✅ Already in `tailwind.config.ts`, verify no old Wix colors remain.

### 1.2 Typography

| Purpose | Font | Source | Notes |
|---------|------|--------|-------|
| Display / Hero | **Cinzel** | Google Fonts (OFL) | Via `next/font/google`, Roman/Inscriptional, Fantasy-suitable |
| Body | **Barlow** | Existing (keep) | 400/500/600/700 |
| Accent Headlines | **Dancing Script** | Existing (keep) | Sparse use, 1-2 weights |

**NOT allowed**: Pieces of Eight (freeware, no commercial license), Wix-specific fonts.

### 1.3 Spacing & Radius Tokens

Update `tailwind.config.ts`:

```typescript
extend: {
  borderRadius: {
    'lg': '0.5rem',        // 8px (existing)
    '2xl': '1rem',         // 16px (keep)
    '3xl': '1.5rem',       // 24px (add for "playful" look)
  },
  boxShadow: {
    'card': '0 4px 12px rgba(160, 48, 32, 0.08)',     // Warm terracotta tint
    'card-hover': '0 8px 20px rgba(160, 48, 32, 0.12)',
    'ornament': '0 2px 8px rgba(208, 160, 80, 0.15)',  // Gold-tinted
  },
}
```

---

## 2. Component Architecture

### 2.1 Prefabs (React Components with Tests)

**Location**: `src/components/prefabs/`

Three reusable decorative components:

1. **`<StarOrnament />` (StarOrnament.tsx)**
   - SVG star burst pattern (from logo star rays)
   - Props: `size` (sm/md/lg), `color` (primary/accent/gold)
   - Test: render, color prop application, accessibility

2. **`<DividerLeaf />` (DividerLeaf.tsx)**
   - Decorative leaf/vine divider
   - Props: `direction` (horizontal/vertical), `color`, `opacity`
   - Test: render, layout impact, a11y

3. **`<CornerFlourish />` (CornerFlourish.tsx)**
   - Corner ornament (top-left, top-right, bottom-left, bottom-right)
   - Props: `position` (corner), `color`, `size`
   - Test: render, positioning, responsive

Each with `.test.tsx` file: render test + snapshot test.

### 2.2 Game Icons (Static SVGs)

**Location**: `public/icons/game-icons/` (CC BY 3.0 licensed)

Curated set (~15-20 icons for VFF themes):

**Key Facts Section**:
- `hourglass.svg` (📅 → time/duration)
- `wizard-face.svg` (🧙 → fantasy/magic)
- `vegetables.svg` (🌱 → vegan)

**EventAreaCard Mapping** (theme → icon):
- Mittelalter → `castle.svg`
- Live-Musik → `lyre.svg`
- LARP → `crossed-swords.svg`
- Streetfood → `cooking-pot.svg`

**Additional icons** (as needed per page):
- Dragon, potion, candle, scroll, star, flower, etc.

Source: game-icons.net, download as SVGs, store in repo with CC BY 3.0 attribution in Credits page.

---

## 3. Component Refresh

### 3.1 Hero Section (`src/app/page.tsx`)

**Current**: Plain h1 + subtitle + buttons.

**Refresh**:
- Add `<StarOrnament />` decorations around h1 (left/right, top/bottom)
- Softer shadow on h1 (use new `shadow-card`)
- Consider light gradient background (white → `bg-surface`)
- Buttons: increase `rounded` to `rounded-3xl`, add hover effect

**TDD**: Test h1 + ornament render, h1 color is primary, buttons clickable.

### 3.2 EventAreaCard (`src/components/EventAreaCard.tsx`)

**Current**: Emoji icon + title + description.

**Refresh**:
- Replace emoji with Game Icon SVG (imported from `public/icons/game-icons/`)
- Higher icon opacity, larger size (maybe 3xl → 4xl)
- Add subtle pattern background (Hero Patterns `topography`, very low opacity ~5%)
- Soften border-radius to `rounded-3xl`
- Increase shadow (use `shadow-card-hover` on hover)

**TDD**: Test SVG icon render, description text, accessibility labels for icon.

### 3.3 Header (`src/components/Header.tsx`)

**Current**: Logo + nav.

**Review**:
- Logo size/spacing — ensure legible at mobile (375px)
- Add soft decorative line/divider under nav (thin `border-secondary-light`, opacity 30%)
- Consider Logo variation (smaller for narrow viewport)

**No major overhaul**: Keep nav structure, focus on spacing.

### 3.4 Footer (`src/components/Footer.tsx`)

**Refresh**:
- Add `<DividerLeaf />` above footer content
- Small logo variant (using PNG from NAS if available, else downscaled)
- Add subtle background (very light `bg-surface`, maybe 20% opacity)
- Keep text/links, increase padding

### 3.5 Section Backgrounds

**Pattern**:
- Hero section (h1): `bg-white` or very light gradient
- "Was euch erwartet": `bg-surface` (light beige)
- "Key Facts": `bg-white`
- "Dein Stand": `bg-surface`
- "Wo vegane Küche": `bg-white`
- "Anfahrt": `bg-surface`

**Optional**: Add Hero Patterns `topography` SVG (5-10% opacity) to alternating sections for texture.

### 3.6 Buttons

**Current**: `rounded` (default border-radius).

**Refresh**:
- All buttons: `rounded-3xl` (24px)
- Hover: Add shadow + slight scale effect (transform: scale(1.02))
- Consider Phosphor icon prefix on primary buttons (optional)

---

## 4. Typography Integration

Add to `src/app/layout.tsx`:

```typescript
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html className={cinzel.className}>
      ...
    </html>
  );
}
```

Update Tailwind config:

```typescript
theme: {
  fontFamily: {
    display: ['Cinzel', 'serif'],    // For h1, h2, display headings
    sans: ['Barlow', 'sans-serif'],  // Body (existing)
  },
}
```

Apply to pages:

```tsx
<h1 className="font-display font-bold text-primary">Hero Title</h1>
```

---

## 5. Credits Page

**Route**: `/credits/page.tsx`

**Content**:
- Library attributions (Game Icons CC BY 3.0, Hero Patterns CC BY 4.0, Cinzel/Dancing Script OFL)
- License text for each library
- Link to originals

**TDD**: Test page renders, all links present, license text displayed.

---

## 6. Testing Strategy

### 6.1 Unit Tests (TDD Mandatory)

For each component change:

1. **Render test** — component renders without errors
2. **Props test** — props (color, size, icon) apply correctly
3. **Accessibility** — semantic HTML, alt text for icons, ARIA labels

Example (`StarOrnament.test.tsx`):

```typescript
describe('StarOrnament', () => {
  it('renders SVG with correct color class', () => {
    const { container } = render(<StarOrnament color="primary" />);
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('text-primary')).toBe(true);
  });

  it('applies size prop correctly', () => {
    const { container } = render(<StarOrnament size="lg" />);
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('h-8')).toBe(true);
  });
});
```

### 6.2 Snapshot Tests

After unit tests pass, capture snapshots:

```typescript
it('matches snapshot', () => {
  const { container } = render(<StarOrnament size="md" color="gold" />);
  expect(container.firstChild).toMatchSnapshot();
});
```

Run after all changes:

```bash
npm run test:run
```

### 6.3 Visual Verification (Manual)

1. **Dev server**: `npm run dev` (localhost:3000)
2. **Check against references**:
   - Instagram @veganfantasyfair (tone, imagery, playfulness)
   - Flyer 2026 (spacing, color usage)
   - Wix site (layout patterns)
3. **Mobile-First** (375px viewport baseline, test tablet/desktop breakpoints)
4. **Lighthouse**: Maintain current performance/accessibility scores

### 6.4 PR Review & Approval

- Daniel + Jenny review preview at `vff-web.pages.dev` (via Cloudflare Pages PR deployment)
- Screenshots in PR (before/after)
- Approval gates: Go/No-Go before DNS cutover (NEXA-244)

---

## 7. Acceptance Criteria Mapping

- ✅ **Tailwind tokens on CI palette**: Verify no old colors in config
- ✅ **Cinzel integrated**: Via `next/font/google`
- ✅ **3+ decorative SVG components**: StarOrnament, DividerLeaf, CornerFlourish (with tests)
- ✅ **Game Icons curated & integrated**: ~15-20 SVGs in `public/icons/game-icons/`
- ✅ **Hero section refreshed**: Ornaments, softer styling, visible at vff-web.pages.dev
- ✅ **EventAreaCard with Game Icons**: Emoji → SVG swap
- ✅ **Mobile-First verified**: 375px basis, tablet/desktop breakpoints tested
- ✅ **Lighthouse score maintained**: Performance/Accessibility not degraded
- ✅ **Tests green**: `npm run test:run` passes
- ✅ **Credits page**: `/credits/` with attributions
- ✅ **PR with screenshots**: Before/after of main sections

---

## 8. Phasing & Next Steps

### Phase 1: Foundation
1. Update Tailwind config (verify colors, add radius/shadow tokens)
2. Integrate Cinzel via `next/font/google`
3. Create Prefabs (StarOrnament, DividerLeaf, CornerFlourish) + tests

### Phase 2: Assets
4. Curate & download Game Icons from game-icons.net
5. Store in `public/icons/game-icons/`
6. Create Credits page

### Phase 3: Components
7. Refresh Hero section
8. Refresh EventAreaCard
9. Refresh Header/Footer (minor tweaks)
10. Add section background patterns (optional, low priority)

### Phase 4: Testing & QA
11. Run full test suite (`npm run test:run`)
12. Dev server visual check (375px, tablet, desktop)
13. Create PR with Cloudflare Pages preview
14. Daniel + Jenny review & approve

---

## 9. Branch & Workflow

- **Branch**: `feature/design-refresh-v1` (from `master`)
- **Commit frequency**: Small, atomic commits per component/feature
- **Build**: Static export (no SSR)
- **Deploy**: Cloudflare Pages (auto-deploy on master merge)
- **Preview**: PR preview URL for Daniel/Jenny review

---

## 10. Constraints & Notes

- **Static export only** (no SSR/API routes)
- **TDD mandatory** per repo CLAUDE.md
- **No AI-generated graphics** (Daniel designs)
- **No AI-generated text** (Jenny writes)
- **Timezone**: Always `Europe/Berlin`
- **Review gate**: Daniel + Jenny must approve before DNS cutover (NEXA-244)
- **75-day timeline**: Event 2026-07-04/05, design must be production-ready by ~2026-06-15

---
