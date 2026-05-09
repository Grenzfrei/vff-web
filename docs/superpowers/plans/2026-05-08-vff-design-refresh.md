# VFF Design Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add playful Fantasy-flair to VeganFantasyFair website using CI color palette, decorative SVG components, Game Icons, and Cinzel typography; 10 acceptance criteria.

**Architecture:** Four-phase approach: (1) Foundation — Tailwind tokens + Cinzel font + Prefab components with TDD, (2) Assets — Curate Game Icons from game-icons.net, (3) Components — Refresh Hero, EventAreaCard, Header, Footer with new assets, (4) Testing & QA — Full test suite + dev server verification + Cloudflare Pages preview.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3.4, Vitest + Testing Library, React 18, static export (Cloudflare Pages).

**Timeline:** 75 days to event (2026-07-04/05); design must be production-ready by ~2026-06-15.

---

## File Structure

### New Files (to create)

| Path | Responsibility |
|------|-----------------|
| `src/components/prefabs/StarOrnament.tsx` | Reusable star burst SVG component (props: size, color) |
| `src/components/prefabs/StarOrnament.test.tsx` | StarOrnament unit + snapshot tests |
| `src/components/prefabs/DividerLeaf.tsx` | Reusable leaf divider component (props: direction, color, opacity) |
| `src/components/prefabs/DividerLeaf.test.tsx` | DividerLeaf unit + snapshot tests |
| `src/components/prefabs/CornerFlourish.tsx` | Reusable corner ornament (props: position, color, size) |
| `src/components/prefabs/CornerFlourish.test.tsx` | CornerFlourish unit + snapshot tests |
| `public/icons/game-icons/*.svg` | Curated Game Icons (~15-20 SVGs, CC BY 3.0 licensed) |
| `src/app/credits/page.tsx` | Credits page with library attributions |
| `src/app/credits/layout.tsx` | Credits page layout (optional, reuse root layout if possible) |

### Modified Files

| Path | Sections | Purpose |
|------|----------|---------|
| `tailwind.config.ts` | `theme.extend.borderRadius`, `theme.extend.boxShadow`, `theme.fontFamily` | Add border-radius (3xl), shadow tokens, display font |
| `src/app/layout.tsx` | Import block, className on `<html>` | Import Cinzel, apply to root |
| `src/components/EventAreaCard.tsx` | Icon rendering, className | Replace emoji with Game Icon SVG import |
| `src/app/page.tsx` | Hero section (h1 area), Key Facts section | Add ornaments, improve styling |
| `src/components/Header.tsx` | After nav, className | Add soft divider line |
| `src/components/Footer.tsx` | Before footer content, className | Add DividerLeaf, improve styling |

---

## Phase 1: Foundation (Tailwind + Cinzel + Prefabs)

### Task 1: Update Tailwind Config — Tokens & Typography

**Files:**
- Modify: `tailwind.config.ts`

**Steps:**

- [ ] **Step 1: Open tailwind.config.ts and verify current state**

Verify that CI colors are present (primary #A03020, secondary #506020, accent #D08040, gold #D0A050).
Confirm no old Wix colors (pink #FC8CC7, yellow #FECF3B, red #FF2800).

- [ ] **Step 2: Add border-radius tokens to theme.extend**

Replace the entire `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A03020",
          light: "#C04030",
        },
        secondary: {
          DEFAULT: "#506020",
          light: "#607030",
        },
        accent: {
          DEFAULT: "#D08040",
          gold: "#D0A050",
        },
        cta: {
          DEFAULT: "#A03020",
          hover: "#8A2818",
        },
        surface: {
          DEFAULT: "#F5F0EB",
          white: "#FFFFFF",
        },
        text: {
          DEFAULT: "#33302F",
          heading: "#33302F",
          muted: "#606060",
        },
        footer: "#33302F",
      },
      borderRadius: {
        lg: "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card": "0 4px 12px rgba(160, 48, 32, 0.08)",
        "card-hover": "0 8px 20px rgba(160, 48, 32, 0.12)",
        "ornament": "0 2px 8px rgba(208, 160, 80, 0.15)",
      },
      fontFamily: {
        sans: ["Barlow", "Arial", "sans-serif"],
        display: ["Cinzel", "serif"],
      },
      spacing: {
        "section-mobile": "2rem",
        "section-desktop": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add Tailwind design tokens — border-radius, shadows, display font

Adds rounded-3xl (24px), box-shadow tokens (card, card-hover, ornament),
and fontFamily.display for Cinzel. Prepares for component refresh."
```

---

### Task 2: Integrate Cinzel Font via next/font/google

**Files:**
- Modify: `src/app/layout.tsx`

**Steps:**

- [ ] **Step 1: Read current layout.tsx**

Check the imports and structure.

- [ ] **Step 2: Add Cinzel import at top of file**

Add after any existing imports (before React imports):

```typescript
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
```

- [ ] **Step 3: Apply Cinzel to root html element**

Find the `<html>` tag in the component return. Update className:

```tsx
<html className={cinzel.className}>
  {/* children */}
</html>
```

If the `<html>` tag already has a className, append the cinzel class:

```tsx
<html className={`${cinzel.className} custom-class`}>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds, no errors about Cinzel.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: integrate Cinzel display font via next/font/google

Adds Cinzel (400, 700 weights) for use with font-display Tailwind class.
Applied globally to html element for font-feature-settings support."
```

---

### Task 3: Create StarOrnament Prefab Component

**Files:**
- Create: `src/components/prefabs/StarOrnament.tsx`
- Create: `src/components/prefabs/StarOrnament.test.tsx`

**Steps:**

- [ ] **Step 1: Create directory and component file**

```bash
mkdir -p src/components/prefabs
```

- [ ] **Step 2: Write StarOrnament test first (TDD)**

Create `src/components/prefabs/StarOrnament.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import StarOrnament from "./StarOrnament";

describe("StarOrnament", () => {
  it("renders SVG element", () => {
    const { container } = render(<StarOrnament size="md" color="primary" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies color class correctly", () => {
    const { container } = render(<StarOrnament size="md" color="accent" />);
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("text-accent")).toBe(true);
  });

  it("applies size class correctly", () => {
    const { container } = render(<StarOrnament size="lg" color="primary" />);
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("h-12")).toBe(true);
  });

  it("renders with aria-hidden for decoration", () => {
    const { container } = render(<StarOrnament size="md" color="gold" />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("matches snapshot", () => {
    const { container } = render(<StarOrnament size="md" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm run test:run -- src/components/prefabs/StarOrnament.test.tsx`
Expected: FAIL — "Cannot find module './StarOrnament'"

- [ ] **Step 4: Write StarOrnament component**

Create `src/components/prefabs/StarOrnament.tsx`:

```typescript
interface StarOrnamentProps {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "accent" | "gold";
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  gold: "text-accent-gold",
};

export default function StarOrnament({ size, color }: StarOrnamentProps) {
  return (
    <svg
      className={`${sizeMap[size]} ${colorMap[color]} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm run test:run -- src/components/prefabs/StarOrnament.test.tsx`
Expected: PASS (5/5 tests)

- [ ] **Step 6: Commit**

```bash
git add src/components/prefabs/StarOrnament.tsx src/components/prefabs/StarOrnament.test.tsx
git commit -m "feat: create StarOrnament Prefab component with tests

Decorative star SVG with props for size (sm/md/lg) and color
(primary/secondary/accent/gold). Includes unit + snapshot tests.
Follows TDD pattern: test → fail → implement → pass → commit."
```

---

### Task 4: Create DividerLeaf Prefab Component

**Files:**
- Create: `src/components/prefabs/DividerLeaf.tsx`
- Create: `src/components/prefabs/DividerLeaf.test.tsx`

**Steps:**

- [ ] **Step 1: Write DividerLeaf test first (TDD)**

Create `src/components/prefabs/DividerLeaf.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import DividerLeaf from "./DividerLeaf";

describe("DividerLeaf", () => {
  it("renders SVG element for horizontal divider", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="secondary-light" opacity="100" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders SVG element for vertical divider", () => {
    const { container } = render(
      <DividerLeaf direction="vertical" color="primary" opacity="50" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies opacity correctly", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="primary" opacity="30" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.style.opacity).toBe("0.3");
  });

  it("applies aria-hidden for decoration", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="gold" opacity="75" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("matches snapshot", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="secondary-light" opacity="100" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- src/components/prefabs/DividerLeaf.test.tsx`
Expected: FAIL — "Cannot find module './DividerLeaf'"

- [ ] **Step 3: Write DividerLeaf component**

Create `src/components/prefabs/DividerLeaf.tsx`:

```typescript
interface DividerLeafProps {
  direction: "horizontal" | "vertical";
  color: "primary" | "secondary" | "secondary-light" | "accent" | "gold";
  opacity: "30" | "50" | "75" | "100";
}

const colorMap = {
  primary: "#A03020",
  secondary: "#506020",
  "secondary-light": "#607030",
  accent: "#D08040",
  gold: "#D0A050",
};

const opacityMap = {
  "30": 0.3,
  "50": 0.5,
  "75": 0.75,
  "100": 1,
};

export default function DividerLeaf({
  direction,
  color,
  opacity,
}: DividerLeafProps) {
  const opacityValue = opacityMap[opacity];
  const colorValue = colorMap[color];

  if (direction === "horizontal") {
    return (
      <svg
        className="w-full h-8"
        viewBox="0 0 200 32"
        preserveAspectRatio="none"
        style={{ opacity: opacityValue }}
        aria-hidden="true"
      >
        <path
          d="M 0 16 Q 50 8 100 16 T 200 16"
          stroke={colorValue}
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="16" r="3" fill={colorValue} />
        <circle cx="170" cy="16" r="3" fill={colorValue} />
      </svg>
    );
  }

  return (
    <svg
      className="h-full w-8"
      viewBox="0 0 32 200"
      preserveAspectRatio="none"
      style={{ opacity: opacityValue }}
      aria-hidden="true"
    >
      <path
        d="M 16 0 Q 8 50 16 100 T 16 200"
        stroke={colorValue}
        strokeWidth="2"
        fill="none"
      />
      <circle cy="30" cx="16" r="3" fill={colorValue} />
      <circle cy="170" cx="16" r="3" fill={colorValue} />
    </svg>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:run -- src/components/prefabs/DividerLeaf.test.tsx`
Expected: PASS (5/5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/prefabs/DividerLeaf.tsx src/components/prefabs/DividerLeaf.test.tsx
git commit -m "feat: create DividerLeaf Prefab component with tests

Decorative leaf-vine divider with props for direction (horizontal/vertical),
color, and opacity. Includes unit + snapshot tests. Used in Header/Footer."
```

---

### Task 5: Create CornerFlourish Prefab Component

**Files:**
- Create: `src/components/prefabs/CornerFlourish.tsx`
- Create: `src/components/prefabs/CornerFlourish.test.tsx`

**Steps:**

- [ ] **Step 1: Write CornerFlourish test first (TDD)**

Create `src/components/prefabs/CornerFlourish.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import CornerFlourish from "./CornerFlourish";

describe("CornerFlourish", () => {
  it("renders SVG for top-left corner", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="md" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders SVG for bottom-right corner", () => {
    const { container } = render(
      <CornerFlourish position="bottom-right" color="gold" size="lg" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies correct positioning class", () => {
    const { container } = render(
      <CornerFlourish position="top-right" color="accent" size="md" />
    );
    const div = container.firstChild;
    expect(div).toHaveClass("absolute");
  });

  it("applies color correctly", () => {
    const { container } = render(
      <CornerFlourish position="bottom-left" color="secondary-light" size="sm" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("text-secondary-light")).toBe(true);
  });

  it("applies size correctly", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="lg" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("h-16")).toBe(true);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="md" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- src/components/prefabs/CornerFlourish.test.tsx`
Expected: FAIL — "Cannot find module './CornerFlourish'"

- [ ] **Step 3: Write CornerFlourish component**

Create `src/components/prefabs/CornerFlourish.tsx`:

```typescript
interface CornerFlourishProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color: "primary" | "secondary" | "secondary-light" | "accent" | "gold";
  size: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  "secondary-light": "text-secondary-light",
  accent: "text-accent",
  gold: "text-accent-gold",
};

const positionMap = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

export default function CornerFlourish({
  position,
  color,
  size,
}: CornerFlourishProps) {
  return (
    <div className={`absolute ${positionMap[position]} pointer-events-none`}>
      <svg
        className={`${sizeMap[size]} ${colorMap[color]} fill-current`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 3h2v2H3V3zm8 0h2v2h-2V3zm8 0h2v2h-2V3zM3 11h2v2H3v-2zm8 0h2v2h-2v-2zm8 0h2v2h-2v-2zM3 19h2v2H3v-2zm8 0h2v2h-2v-2zm8 0h2v2h-2v-2z" />
      </svg>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:run -- src/components/prefabs/CornerFlourish.test.tsx`
Expected: PASS (6/6 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/prefabs/CornerFlourish.tsx src/components/prefabs/CornerFlourish.test.tsx
git commit -m "feat: create CornerFlourish Prefab component with tests

Decorative corner ornament with props for position (top-left/right, bottom-left/right),
color, and size. Positioned absolutely. Includes unit + snapshot tests."
```

---

## Phase 2: Assets (Game Icons Curation)

### Task 6: Curate and Set Up Game Icons

**Files:**
- Create: `public/icons/game-icons/*.svg` (15-20 files)
- Create: `GAME_ICONS_SOURCES.md` (source documentation)

**Steps:**

- [ ] **Step 1: Create game-icons directory**

```bash
mkdir -p public/icons/game-icons
```

- [ ] **Step 2: Download required Game Icons from game-icons.net**

Visit https://game-icons.net and download the following SVGs (all CC BY 3.0):

**Key Facts Section:**
- `hourglass.svg` (for time/duration)
- `wizard-face.svg` (for fantasy/magic)
- `vegetables.svg` (for vegan theme)

**EventAreaCard Mapping:**
- `castle.svg` (for Mittelalter area)
- `lyre.svg` (for Live-Musik area)
- `crossed-swords.svg` (for LARP area)
- `cooking-pot.svg` (for Streetfood area)

**Additional Decorative (as options for other pages):**
- `dragon.svg`
- `potion-bottle.svg`
- `candle.svg`
- `scroll.svg`
- `star.svg`
- `flower.svg`
- `tree.svg`
- `beer-bottle.svg`

Save each to `public/icons/game-icons/` with standardized names (lowercase, hyphens, no spaces).

- [ ] **Step 3: Create GAME_ICONS_SOURCES.md documentation**

Create `public/icons/game-icons/GAME_ICONS_SOURCES.md`:

```markdown
# Game Icons Sources

All icons in this directory are from [game-icons.net](https://game-icons.net) and licensed under CC BY 3.0.

## Attribution

**License:** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

When using these icons, credit must be given: "Icons by Game Icons (https://game-icons.net)"

## Icon List

| Filename | Icon Name | Use Case |
|----------|-----------|----------|
| hourglass.svg | Hourglass | Key Facts: Time/Duration |
| wizard-face.svg | Wizard Face | Key Facts: Fantasy/Magic |
| vegetables.svg | Vegetables | Key Facts: Vegan Theme |
| castle.svg | Castle | EventAreaCard: Mittelalter |
| lyre.svg | Lyre | EventAreaCard: Live-Musik |
| crossed-swords.svg | Crossed Swords | EventAreaCard: LARP |
| cooking-pot.svg | Cooking Pot | EventAreaCard: Streetfood |
| dragon.svg | Dragon | Decorative, optional |
| potion-bottle.svg | Potion Bottle | Decorative, optional |
| candle.svg | Candle | Decorative, optional |
| scroll.svg | Scroll | Decorative, optional |
| star.svg | Star | Decorative, optional |
| flower.svg | Flower | Decorative, optional |
| tree.svg | Tree | Decorative, optional |
| beer-bottle.svg | Beer Bottle | Decorative, optional |

Attribution: Icons by Game Icons (https://game-icons.net)
License: CC BY 3.0
```

- [ ] **Step 4: Verify SVG files are valid**

Run: `ls -la public/icons/game-icons/ | wc -l`
Expected: At least 15 files listed.

Sample one: `cat public/icons/game-icons/hourglass.svg` should show valid SVG markup.

- [ ] **Step 5: Commit**

```bash
git add public/icons/game-icons/
git commit -m "assets: curate Game Icons from game-icons.net

Add 15+ Fantasy-themed SVG icons (CC BY 3.0 licensed) for homepage
components: hourglass, wizard-face, vegetables (Key Facts);
castle, lyre, crossed-swords, cooking-pot (EventAreaCard);
additional decorative icons (dragon, star, potion, etc).
Includes source documentation and attribution."
```

---

## Phase 3: Component Refresh

### Task 7: Refresh EventAreaCard with Game Icons

**Files:**
- Modify: `src/components/EventAreaCard.tsx`
- Check: `src/lib/constants.ts` (EVENT_AREAS structure)

**Steps:**

- [ ] **Step 1: Review EVENT_AREAS constant**

Open `src/lib/constants.ts` and check the `EVENT_AREAS` array structure. Confirm each area has a `.name` property.

Example expected:
```typescript
export const EVENT_AREAS = [
  { name: "Mittelalter", description: "...", icon: "castle" },
  { name: "Live-Musik", description: "...", icon: "lyre" },
  { name: "LARP", description: "...", icon: "crossed-swords" },
  { name: "Streetfood", description: "...", icon: "cooking-pot" },
];
```

If icons are emojis, note which area needs which Game Icon filename.

- [ ] **Step 2: Write test for EventAreaCard with Game Icon**

Open or create `src/components/__tests__/EventAreaCard.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import EventAreaCard from "../EventAreaCard";

describe("EventAreaCard", () => {
  const mockArea = {
    name: "Mittelalter",
    description: "Medieval fantasy",
    icon: "castle",
  };

  it("renders area name and description", () => {
    const { getByText } = render(<EventAreaCard area={mockArea} />);
    expect(getByText("Mittelalter")).toBeInTheDocument();
    expect(getByText("Medieval fantasy")).toBeInTheDocument();
  });

  it("renders Game Icon if provided", () => {
    const { container } = render(<EventAreaCard area={mockArea} />);
    const img = container.querySelector('img[src*="castle"]');
    expect(img).toBeInTheDocument();
  });

  it("applies correct styling classes", () => {
    const { container } = render(<EventAreaCard area={mockArea} />);
    const card = container.firstChild;
    expect(card).toHaveClass("rounded-3xl");
    expect(card).toHaveClass("shadow-card");
  });

  it("applies hover shadow on interaction", () => {
    const { container } = render(<EventAreaCard area={mockArea} />);
    const card = container.firstChild;
    expect(card?.classList.toString()).toMatch(/hover:/);
  });

  it("matches snapshot", () => {
    const { container } = render(<EventAreaCard area={mockArea} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

Run: `npm run test:run -- src/components/__tests__/EventAreaCard.test.tsx`
Expected: FAIL — Component doesn't support Game Icons yet.

- [ ] **Step 3: Update EventAreaCard component**

Replace `src/components/EventAreaCard.tsx` with:

```typescript
import Image from "next/image";

interface EventArea {
  name: string;
  description: string;
  icon?: string;
}

interface EventAreaCardProps {
  area: EventArea;
}

export default function EventAreaCard({ area }: EventAreaCardProps) {
  return (
    <div className="bg-surface p-6 rounded-3xl shadow-card hover:shadow-card-hover transition-shadow text-center">
      {area.icon && (
        <div className="mb-4 flex justify-center">
          <Image
            src={`/icons/game-icons/${area.icon}.svg`}
            alt={area.name}
            width={48}
            height={48}
            className="w-12 h-12 fill-primary"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-primary mb-2">{area.name}</h3>
      <p className="text-text-muted">{area.description}</p>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:run -- src/components/__tests__/EventAreaCard.test.tsx`
Expected: PASS (5/5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/EventAreaCard.tsx src/components/__tests__/EventAreaCard.test.tsx
git commit -m "feat: refresh EventAreaCard with Game Icons

Replace emoji icons with Game Icon SVGs (castle, lyre, crossed-swords, cooking-pot).
Increase border-radius to rounded-3xl, add shadow-card with hover effect.
Includes unit + snapshot tests."
```

---

### Task 8: Refresh Hero Section

**Files:**
- Modify: `src/app/page.tsx`
- Test: Create `src/app/__tests__/page.test.tsx` for HomePage

**Steps:**

- [ ] **Step 1: Write test for Hero section with ornaments**

Create `src/app/__tests__/page.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import HomePage from "../page";

describe("HomePage", () => {
  it("renders main heading", () => {
    const { getByRole } = render(<HomePage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Vegan Fantasy Fair 2026");
  });

  it("renders heading with primary color class", () => {
    const { getByRole } = render(<HomePage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-primary");
  });

  it("renders call-to-action buttons", () => {
    const { getAllByRole } = render(<HomePage />);
    const links = getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders Key Facts section with icons", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Key Facts")).toBeInTheDocument();
  });

  it("renders Event Areas grid", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Was euch erwartet")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
```

Run test to establish baseline:

```bash
npm run test:run -- src/app/__tests__/page.test.tsx
```

- [ ] **Step 2: Refactor Hero section with ornaments and improved styling**

Update `src/app/page.tsx` — replace Hero section (lines 10-33) with:

```typescript
import Link from "next/link";
import { EVENT, EVENT_AREAS } from "@/lib/constants";
import EventAreaCard from "@/components/EventAreaCard";
import StarOrnament from "@/components/prefabs/StarOrnament";
import { EventStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <EventStructuredData />
      <section className="bg-white py-12 desktop:py-16 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          {/* Decorative star ornaments */}
          <div className="absolute top-8 left-4 hidden tablet:block">
            <StarOrnament size="md" color="accent" />
          </div>
          <div className="absolute top-12 right-4 hidden tablet:block">
            <StarOrnament size="lg" color="gold" />
          </div>

          <h1 className="font-display text-4xl desktop:text-6xl font-bold text-primary mb-4">
            Vegan Fantasy Fair 2026
          </h1>
          <p className="text-xl text-text-muted mb-8">
            4. & 5. Juli 2026 &middot; Schlosspark Geislautern, Völklingen
          </p>
          <div className="flex flex-col tablet:flex-row justify-center gap-4">
            <Link
              href="/mitmachen"
              className="px-6 py-3 bg-cta text-white rounded-3xl font-semibold hover:bg-cta-hover hover:scale-105 transition-all shadow-card"
            >
              Als Aussteller:in bewerben
            </Link>
            <Link
              href="/programm"
              className="px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white transition-colors shadow-card"
            >
              Zum Programm
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-display text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Was euch erwartet
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {EVENT_AREAS.map((area) => (
              <EventAreaCard key={area.name} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-display text-2xl desktop:text-3xl font-bold text-primary text-center mb-8">
            Key Facts
          </h2>
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                icon: "hourglass",
                label: "4. & 5. Juli 2026",
                desc: "Zwei volle Festival-Tage",
              },
              {
                icon: "location",
                label: "Schlosspark Geislautern",
                desc: "Völklingen, Saarland",
              },
              {
                icon: "vegetables",
                label: "100% vegan",
                desc: "Essen, Mode, Kunst, Lifestyle",
              },
              {
                icon: "wizard-face",
                label: "Fantasy & Cosplay",
                desc: "Für alle, die mehr wollen als nur einen Markt",
              },
              { icon: "lyre", label: "Live-Musik", desc: "Bands und Solokünstler:innen" },
              {
                icon: "cooking-pot",
                label: "Aussteller",
                desc: "Vegane Marken, Handwerk, Food",
              },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-surface-white p-5 rounded-3xl shadow-card text-center"
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {fact.icon}
                </div>
                <p className="font-semibold text-primary">{fact.label}</p>
                <p className="text-text-muted text-sm mt-1">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-display text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Dein Stand auf der VFF 2026
          </h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            Ihr seid Aussteller:in und möchtet dabei sein? Ob vegane Produkte,
            Foodtruck, Kunsthandwerk oder Info-Stand — wir freuen uns auf eure
            Bewerbung!
          </p>
          <Link
            href="/mitmachen"
            className="inline-block px-8 py-4 bg-cta text-white rounded-3xl font-semibold text-lg hover:bg-cta-hover hover:scale-105 transition-all shadow-card"
          >
            Jetzt als Aussteller:in bewerben
          </Link>
        </div>
      </section>

      <section className="bg-surface py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-display text-2xl desktop:text-3xl font-bold text-primary text-center mb-6">
            Wo vegane Küche auf Fantasy trifft
          </h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Die Vegan Fantasy Fair ist das vegane Festival im Saarland. An
            zwei Tagen verwandelt sich der Schlosspark Geislauterns in eine Welt voller
            veganer Köstlichkeiten, Fantasy-Flair, Cosplay, Live-Musik und kreativer
            Begegnungen.
          </p>
          <p className="text-center text-lg font-medium text-primary mb-6">
            10.000 qm. Fünf Areas. Zwei Tage. Eine Community.
          </p>
          <p className="text-center">
            <Link
              href="/die-fair"
              className="px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white transition-colors shadow-card"
            >
              Mehr über die Fair
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-display text-2xl desktop:text-3xl font-bold text-primary mb-4">
            Schlosspark Geislauterns, Völklingen
          </h2>
          <p className="text-text-muted mb-6">
            Gut erreichbar mit Auto und Bahn.
          </p>
          <Link
            href="/anfahrt"
            className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-3xl font-semibold hover:bg-primary hover:text-white transition-colors shadow-card"
          >
            Anfahrt &amp; Parken
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run tests to verify changes**

Run: `npm run test:run -- src/app/__tests__/page.test.tsx`
Expected: PASS (all tests, snapshot may differ)

- [ ] **Step 4: Verify dev server**

Run: `npm run dev` and visit `http://localhost:3000`
- Check Hero h1 renders with primary color
- Check Star ornaments appear (on tablet+)
- Check buttons have rounded-3xl and hover scale effect
- Check Key Facts section displays correctly
- Check responsive at 375px (mobile)

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/__tests__/page.test.tsx
git commit -m "feat: refresh Hero section with ornaments and improved styling

Add StarOrnament decorations (top-left, top-right) to Hero.
Update all headings to use font-display (Cinzel).
Increase button border-radius to rounded-3xl, add hover:scale-105.
Apply shadow-card and improved spacing.
Includes unit + snapshot tests. Verified at dev server (375px+)."
```

---

### Task 9: Refresh Header (Minor Tweaks)

**Files:**
- Modify: `src/components/Header.tsx`
- Test: Create `src/components/__tests__/Header.test.tsx`

**Steps:**

- [ ] **Step 1: Write test for Header with decorative line**

Create `src/components/__tests__/Header.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders header element", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("renders navigation", () => {
    const { getByRole } = render(<Header />);
    const nav = getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("includes decorative divider line", () => {
    const { container } = render(<Header />);
    const divider = container.querySelector(".border-secondary-light");
    expect(divider).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

Run: `npm run test:run -- src/components/__tests__/Header.test.tsx`
Expected: FAIL (if divider not yet in Header)

- [ ] **Step 2: Update Header component**

Open `src/components/Header.tsx` and add a soft divider line after nav.

After the closing `</nav>` tag, add:

```tsx
<div className="border-b border-secondary-light opacity-30"></div>
```

Update className to ensure proper spacing and Logo size is responsive:

Example updated Header structure:

```typescript
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl font-display text-primary">
          VFF 2026
        </Link>
        <nav className="flex gap-6">
          {/* Existing nav links */}
        </nav>
      </div>
      <div className="border-b border-secondary-light opacity-30"></div>
    </header>
  );
}
```

- [ ] **Step 3: Run tests to verify**

Run: `npm run test:run -- src/components/__tests__/Header.test.tsx`
Expected: PASS (all tests)

- [ ] **Step 4: Verify dev server**

Run: `npm run dev` and visit `http://localhost:3000`
- Check Header appears with soft decorative line below nav
- Check responsive at 375px (line should be visible, logo text clear)

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/__tests__/Header.test.tsx
git commit -m "feat: add decorative line to Header footer

Add soft border-secondary-light divider (opacity-30) below navigation.
Minor spacing refinement. Includes unit + snapshot tests."
```

---

### Task 10: Refresh Footer with DividerLeaf

**Files:**
- Modify: `src/components/Footer.tsx`
- Test: Create `src/components/__tests__/Footer.test.tsx`

**Steps:**

- [ ] **Step 1: Write test for Footer with DividerLeaf**

Create `src/components/__tests__/Footer.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/2026/)).toBeInTheDocument();
  });

  it("includes DividerLeaf component", () => {
    const { container } = render(<Footer />);
    const divider = container.querySelector("svg");
    expect(divider).toBeInTheDocument();
  });

  it("applies soft background styling", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-surface");
  });

  it("matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

Run: `npm run test:run -- src/components/__tests__/Footer.test.tsx`
Expected: FAIL (if DividerLeaf not yet in Footer)

- [ ] **Step 2: Update Footer component**

Open `src/components/Footer.tsx` and import DividerLeaf, then add it above footer content.

Updated structure:

```typescript
import DividerLeaf from "./prefabs/DividerLeaf";

export default function Footer() {
  return (
    <footer className="bg-surface py-12 desktop:py-16 text-center">
      <div className="mb-8">
        <DividerLeaf
          direction="horizontal"
          color="secondary-light"
          opacity="50"
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Existing footer content */}
        <p className="text-text-muted text-sm mb-4">
          © {new Date().getFullYear()} Vegan Fantasy Fair. Alle Rechte vorbehalten.
        </p>
        <p className="text-text-muted text-xs">
          <Link href="/impressum" className="hover:text-primary">
            Impressum
          </Link>
          {" | "}
          <Link href="/datenschutz" className="hover:text-primary">
            Datenschutz
          </Link>
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Run tests to verify**

Run: `npm run test:run -- src/components/__tests__/Footer.test.tsx`
Expected: PASS (all tests)

- [ ] **Step 4: Verify dev server**

Run: `npm run dev` and scroll to bottom of `http://localhost:3000`
- Check DividerLeaf renders above footer content
- Check footer has soft bg-surface background
- Check responsive at 375px (divider should scale, text remain readable)

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx src/components/__tests__/Footer.test.tsx
git commit -m "feat: refresh Footer with DividerLeaf ornament

Add DividerLeaf (horizontal, secondary-light, 50% opacity) above footer content.
Update background to bg-surface, improve padding. Includes unit + snapshot tests."
```

---

## Phase 4: Credits Page & Testing

### Task 11: Create Credits Page with Library Attributions

**Files:**
- Create: `src/app/credits/page.tsx`

**Steps:**

- [ ] **Step 1: Write test for Credits page**

Create `src/app/__tests__/credits.test.tsx`:

```typescript
import { render } from "@testing-library/react";
import CreditsPage from "../credits/page";

describe("CreditsPage", () => {
  it("renders Credits heading", () => {
    const { getByRole } = render(<CreditsPage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Credits");
  });

  it("includes Game Icons attribution", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/game-icons/i)).toBeInTheDocument();
  });

  it("includes CC BY 3.0 license text", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/CC BY 3.0/)).toBeInTheDocument();
  });

  it("includes Cinzel font attribution", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/Cinzel/)).toBeInTheDocument();
  });

  it("renders links to original sources", () => {
    const { getAllByRole } = render(<CreditsPage />);
    const links = getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("matches snapshot", () => {
    const { container } = render(<CreditsPage />);
    expect(container).toMatchSnapshot();
  });
});
```

Run: `npm run test:run -- src/app/__tests__/credits.test.tsx`
Expected: FAIL (page doesn't exist yet)

- [ ] **Step 2: Create Credits page**

Create `src/app/credits/page.tsx`:

```typescript
import Link from "next/link";

export default function CreditsPage() {
  return (
    <>
      <section className="py-12 desktop:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-display text-4xl desktop:text-5xl font-bold text-primary mb-8 text-center">
            Credits
          </h1>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Game Icons
              </h2>
              <p className="text-text-muted mb-3">
                Decorative icons used throughout the site are from{" "}
                <a
                  href="https://game-icons.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light underline"
                >
                  Game Icons
                </a>
                .
              </p>
              <p className="text-text-muted text-sm mb-2">
                <strong>License:</strong> CC BY 3.0
              </p>
              <p className="text-text-muted text-sm">
                <strong>Attribution:</strong> Icons by Game Icons
                (https://game-icons.net)
              </p>
              <p className="text-text-muted text-sm mt-2">
                <strong>License Text:</strong> You are free to copy, modify,
                and distribute these works, even for commercial purposes, all
                without asking permission as long as you provide attribution.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Typography
              </h2>
              <p className="text-text-muted mb-3">
                Display and accent fonts are provided by Google Fonts under the
                OFL (Open Font License).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-muted text-sm">
                <li>
                  <strong>Cinzel</strong> (Display) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Cinzel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
                <li>
                  <strong>Dancing Script</strong> (Accent) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Dancing+Script"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
                <li>
                  <strong>Barlow</strong> (Body) —{" "}
                  <a
                    href="https://fonts.google.com/specimen/Barlow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light underline"
                  >
                    Google Fonts
                  </a>
                </li>
              </ul>
              <p className="text-text-muted text-sm mt-4">
                <strong>License:</strong> OFL (Open Font License)
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Patterns & Backgrounds
              </h2>
              <p className="text-text-muted mb-3">
                Decorative background patterns are sourced from{" "}
                <a
                  href="https://www.heropatterns.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light underline"
                >
                  Hero Patterns
                </a>
                .
              </p>
              <p className="text-text-muted text-sm">
                <strong>License:</strong> CC BY 4.0
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-3xl font-semibold hover:bg-opacity-90 transition-all shadow-card"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run tests to verify**

Run: `npm run test:run -- src/app/__tests__/credits.test.tsx`
Expected: PASS (all tests)

- [ ] **Step 4: Verify dev server**

Run: `npm run dev` and visit `http://localhost:3000/credits`
- Check all sections render (Game Icons, Typography, Patterns)
- Check links open in new tabs
- Check responsive at 375px

- [ ] **Step 5: Commit**

```bash
git add src/app/credits/page.tsx src/app/__tests__/credits.test.tsx
git commit -m "feat: create Credits page with library attributions

Add dedicated /credits/ page with CC BY 3.0 (Game Icons),
OFL (Cinzel/Dancing Script/Barlow), and CC BY 4.0 (Hero Patterns)
attributions. Links to original sources. Includes unit + snapshot tests."
```

---

### Task 12: Full Test Suite & Verification

**Files:**
- Run: `npm run test:run`
- Verify: Dev server (175px mobile, tablet, desktop)
- Review: Lighthouse scores

**Steps:**

- [ ] **Step 1: Run full test suite**

Run: `npm run test:run`

Expected output example:
```
✓ src/app/__tests__/page.test.tsx (6 tests)
✓ src/components/__tests__/EventAreaCard.test.tsx (5 tests)
✓ src/components/prefabs/StarOrnament.test.tsx (5 tests)
✓ src/components/prefabs/DividerLeaf.test.tsx (5 tests)
✓ src/components/prefabs/CornerFlourish.test.tsx (6 tests)
✓ src/components/__tests__/Header.test.tsx (4 tests)
✓ src/components/__tests__/Footer.test.tsx (5 tests)
✓ src/app/__tests__/credits.test.tsx (6 tests)

PASS [total tests: 42 passed in 3.2s]
```

If any test fails, fix the component/test inline and re-run.

- [ ] **Step 2: Dev server visual verification**

Run: `npm run dev`

**Mobile (375px):**
- Visit `http://localhost:3000`
- Zoom to 375px width (DevTools)
- Check: Hero h1, buttons, ornaments scale down
- Check: EventAreaCard icons visible
- Check: Key Facts section responsive
- No horizontal scroll

**Tablet (768px):**
- Resize to 768px
- Check: Layout adapts (grid-cols-2)
- Check: Star ornaments visible on Hero

**Desktop (1200px):**
- Full width
- Check: 3-column grid for Event Areas
- Check: All ornaments render

**Dark mode (if browser supports):**
- Try dark mode CSS media query
- Should still be readable (or explicitly light mode only)

- [ ] **Step 3: Lighthouse check**

In DevTools (F12):
- Lighthouse tab → Generate report (Desktop)
- Note scores: Performance, Accessibility, Best Practices, SEO
- Compare to baseline (if available from before changes)

Target: Maintain or improve existing scores. If degraded by >5 points, investigate:
- Unused CSS from Tailwind
- Large image sizes
- Missing alt texts

- [ ] **Step 4: Verify build**

Run: `npm run build`

Expected output:
```
● info: Export directory: out/
  (Built at ...)

✓ Built successfully
```

Check that `out/` directory contains static files (HTML, CSS, etc.).

- [ ] **Step 5: Final commit & summary**

Run:

```bash
git log --oneline -10
```

Verify all 12 tasks are committed. Example log:

```
abc1234 feat: full test suite passing + Lighthouse verification
def5678 feat: create Credits page with library attributions
...
ghi9012 docs: VFF Design Refresh spec
```

---

## Acceptance Criteria Checklist

After all tasks complete, verify against original spec:

- [ ] **Tailwind tokens on CI palette** — Color verification in tailwind.config.ts ✅
- [ ] **Cinzel integrated** — Via next/font/google in layout.tsx ✅
- [ ] **3+ decorative SVG components** — StarOrnament, DividerLeaf, CornerFlourish (with tests) ✅
- [ ] **Game Icons curated** — ~15-20 SVGs in public/icons/game-icons/ ✅
- [ ] **Hero section refreshed** — Ornaments, font-display, improved shadows ✅
- [ ] **EventAreaCard with Game Icons** — SVG icons instead of emoji ✅
- [ ] **Mobile-First verified** — 375px basis, tablet/desktop tested ✅
- [ ] **Lighthouse score maintained** — Performance/Accessibility not degraded ✅
- [ ] **Tests green** — `npm run test:run` passes all ✅
- [ ] **Credits page** — `/credits/` with attributions (CC BY 3.0, OFL, CC BY 4.0) ✅

---

## Next Steps (Post-Implementation)

1. **Create PR** — Push feature branch, create PR on GitHub
2. **Cloudflare Pages Preview** — PR auto-deploys preview URL
3. **Daniel + Jenny Review** — Both review at `vff-web.pages.dev` preview
4. **Approval** — Go/No-Go before DNS cutover (NEXA-244)
5. **Merge** — Once approved, merge to `master`
6. **Test-URL Update** — `vff-web.pages.dev` reflects merged changes

---

## Execution Notes

- **TDD throughout**: Test → Fail → Implement → Pass → Commit
- **Atomic commits**: One task = one logical commit (not multiple per task)
- **No Placeholder Steps**: Each step has exact code/command
- **DRY & YAGNI**: No redundant components or premature abstraction
- **Responsive Design**: Test at 375px, 768px, 1200px
- **Accessibility**: alt text for images, ARIA labels, semantic HTML

---
