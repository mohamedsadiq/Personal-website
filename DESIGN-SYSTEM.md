# Design System Documentation

A comprehensive design system for maintaining consistent styling across the entire website.

## Table of Contents

1. [Overview](#overview)
2. [Design Tokens](#design-tokens)
3. [Colors](#colors)
4. [Typography](#typography)
5. [Spacing](#spacing)
6. [Border Radius](#border-radius)
7. [Shadows](#shadows)
8. [Breakpoints](#breakpoints)
9. [Accessibility](#accessibility)
10. [Migration Guide](#migration-guide)
11. [Best Practices](#best-practices)

---

## Overview

This design system establishes a unified set of design tokens (CSS variables) that should be used throughout the codebase. It replaces the previous ad-hoc approach where values were hardcoded, resulting in:

- **100+** unique color values → Consolidated to semantic color tokens
- **20+** font sizes → Standardized type scale
- **15+** breakpoints → 6 consistent breakpoints
- **15+** border radius values → Standardized radius scale

### Files Structure

```
styles/
├── design-tokens.css    # Core design tokens (CSS variables)
├── globals.css          # Global styles using tokens
└── ...

tailwind.config.js       # Tailwind extended with design tokens
```

---

## Design Tokens

All design values should be accessed via CSS variables defined in `styles/design-tokens.css`.

### Usage Examples

```css
/* In CSS */
.my-component {
  color: var(--color-text-primary);
  background-color: var(--color-bg-card);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
}
```

```jsx
/* In Tailwind (JSX) */
<div className="text-text-primary bg-bg-card p-4 rounded-lg text-base">
  Content
</div>
```

---

## Colors

### Semantic Color System

Colors are organized semantically, not by their visual appearance. This enables consistent theming and easier dark mode support.

#### Background Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-bg-primary` | `#ffffff` | `#121212` | Page background |
| `--color-bg-secondary` | `#fafafa` | `#1a1a1a` | Secondary surfaces |
| `--color-bg-tertiary` | `#f4f4f4` | `#222222` | Elevated surfaces |
| `--color-bg-card` | `#ffffff` | `#1a1a1a` | Card backgrounds |
| `--color-bg-muted` | `#f0f0f0` | `#2a2a2a` | Muted backgrounds |

#### Text Colors

| Token | Light Mode | Dark Mode | Usage | Contrast |
|-------|------------|-----------|-------|----------|
| `--color-text-primary` | `#000000` | `#ffffff` | Primary text | 21:1 (AAA) |
| `--color-text-secondary` | `#616161` | `#d5d5d5` | Secondary text | 5.9:1 (AA) |
| `--color-text-tertiary` | `#757575` | `#a0a0a0` | Tertiary text | 4.6:1 (AA) |
| `--color-text-muted` | `#767676` | `#808080` | Muted text | 4.5:1 (AA) |
| `--color-text-link` | `#1e5297` | `#7FD1FF` | Links | 7.2:1 (AAA) |

#### Border Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-border-default` | `#e5e5e5` | `#2b2b2b` | Default borders |
| `--color-border-light` | `#f0f0f0` | `#3a3a3a` | Light borders |
| `--color-border-focus` | `#1e5297` | `#7FD1FF` | Focus states |

#### Status Colors

| Token | Default | Usage |
|-------|---------|-------|
| `--color-success` | `#00c78e` | Success states |
| `--color-warning` | `#f59e0b` | Warning states |
| `--color-error` | `#dc2626` | Error states |
| `--color-info` | `#3b82f6` | Info states |

### Tailwind Usage

```jsx
// Background colors
<div className="bg-bg-primary" />     // Page background
<div className="bg-bg-card" />        // Card background
<div className="bg-surface-1" />      // Surface level 1

// Text colors
<p className="text-text-primary" />   // Primary text
<p className="text-text-secondary" /> // Secondary text
<p className="text-text-muted" />     // Muted text

// Border colors
<div className="border border-default" />
<div className="border border-focus" />
```

---

## Typography

### Type Scale

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-2xs` | 10px / 0.625rem | Fine print |
| `--font-size-xs` | 12px / 0.75rem | Captions |
| `--font-size-sm` | 14px / 0.875rem | Small text |
| `--font-size-base` | 16px / 1rem | Body text |
| `--font-size-lg` | 18px / 1.125rem | Large body |
| `--font-size-xl` | 20px / 1.25rem | H4 |
| `--font-size-2xl` | 24px / 1.5rem | H3 |
| `--font-size-3xl` | 30px / 1.875rem | H2 |
| `--font-size-4xl` | 36px / 2.25rem | H1 |
| `--font-size-5xl` | 48px / 3rem | Display |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-light` | 300 | Light emphasis |
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Medium emphasis |
| `--font-weight-semibold` | 600 | Headings |
| `--font-weight-bold` | 700 | Strong emphasis |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-tight` | 1.25 | Headings |
| `--line-height-normal` | 1.5 | Body text |
| `--line-height-relaxed` | 1.625 | Readable text |
| `--line-height-loose` | 2 | Spacious text |

### Tailwind Usage

```jsx
<h1 className="text-4xl font-semibold leading-tight">Heading</h1>
<p className="text-base font-normal leading-relaxed">Body text</p>
<span className="text-sm text-text-secondary">Caption</span>
```

---

## Spacing

### Spacing Scale

Based on a 4px base unit (0.25rem):

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-0` | 0 | 0px |
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |

### Tailwind Usage

```jsx
<div className="p-4 m-2 gap-6">     // padding: 16px, margin: 8px, gap: 24px
<div className="px-6 py-4">          // horizontal: 24px, vertical: 16px
<div className="mt-8 mb-4">          // margin-top: 32px, margin-bottom: 16px
```

---

## Border Radius

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | No rounding |
| `--radius-sm` | 4px | Subtle rounding |
| `--radius-DEFAULT` | 6px | Default |
| `--radius-md` | 8px | Medium elements |
| `--radius-lg` | 12px | Buttons, inputs |
| `--radius-xl` | 16px | Cards |
| `--radius-2xl` | 20px | Large cards |
| `--radius-3xl` | 24px | Modals |
| `--radius-4xl` | 32px | Large modals |
| `--radius-full` | 9999px | Pills, avatars |

### Component-Specific Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-button` | 12px | Buttons |
| `--radius-card` | 20px | Cards |
| `--radius-input` | 8px | Form inputs |
| `--radius-modal` | 24px | Modals |
| `--radius-tag` | 9999px | Tags, badges |
| `--radius-avatar` | 9999px | Avatars |

### Tailwind Usage

```jsx
<button className="rounded-button">Button</button>
<div className="rounded-card">Card content</div>
<input className="rounded-input" />
<span className="rounded-tag">Tag</span>
```

---

## Shadows

### Shadow Scale

| Token | Usage |
|-------|-------|
| `--shadow-xs` | Subtle elevation |
| `--shadow-sm` | Small elevation |
| `--shadow-DEFAULT` | Default elevation |
| `--shadow-md` | Medium elevation |
| `--shadow-lg` | Large elevation |
| `--shadow-xl` | Extra large |
| `--shadow-2xl` | Maximum elevation |

### Component Shadows

| Token | Usage |
|-------|-------|
| `--shadow-card` | Card shadows |
| `--shadow-card-hover` | Card hover state |
| `--shadow-dropdown` | Dropdown menus |
| `--shadow-modal` | Modal dialogs |

### Tailwind Usage

```jsx
<div className="shadow-card hover:shadow-card-hover">Card</div>
<div className="shadow-dropdown">Dropdown</div>
```

---

## Breakpoints

### Standardized Breakpoints

**Replaces 15+ inconsistent breakpoints with 6 standard ones:**

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `xs` | 475px | Extra small devices |
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

### Tailwind Usage

```jsx
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  Responsive padding
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

### CSS Usage

```css
/* Mobile first approach */
.component {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .component {
    padding: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .component {
    padding: var(--space-8);
  }
}
```

---

## Accessibility

### Focus States

All interactive elements have visible focus states:

```css
:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
```

### Color Contrast

All text/background combinations meet WCAG AA standards:

- Primary text on primary background: **21:1** (passes AAA)
- Secondary text on primary background: **7.1:1** (passes AA)
- Muted text on primary background: **4.7:1** (passes AA)

### Reduced Motion

Respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Migration Guide

### Step 1: Replace Hardcoded Colors

**Before:**
```css
.element {
  color: #616161;
  background-color: #fafafa;
  border-color: #e5e5e5;
}
```

**After:**
```css
.element {
  color: var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border-default);
}
```

### Step 2: Replace Hardcoded Spacing

**Before:**
```css
.element {
  padding: 24px;
  margin-bottom: 16px;
  gap: 12px;
}
```

**After:**
```css
.element {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  gap: var(--space-3);
}
```

### Step 3: Replace Hardcoded Border Radius

**Before:**
```css
.card { border-radius: 24px; }
.button { border-radius: 12px; }
.input { border-radius: 8px; }
```

**After:**
```css
.card { border-radius: var(--radius-card); }
.button { border-radius: var(--radius-button); }
.input { border-radius: var(--radius-input); }
```

### Step 4: Update Tailwind Classes

**Before:**
```jsx
<div className="text-[#616161] bg-[#fafafa] p-[24px] rounded-[12px]">
```

**After:**
```jsx
<div className="text-text-secondary bg-bg-secondary p-6 rounded-lg">
```

### Color Replacement Map

| Old Value | New Token |
|-----------|-----------|
| `#000`, `#000000` | `var(--color-text-primary)` |
| `#fff`, `#ffffff` | `var(--color-bg-primary)` |
| `#121212`, `#171717` | `var(--color-bg-primary)` (dark) |
| `#616161`, `#676767` | `var(--color-text-secondary)` |
| `#818181`, `#838383` | `var(--color-text-tertiary)` |
| `#a0a0a0`, `#a1a1a1` | `var(--color-text-muted)` |
| `#fafafa`, `#f8f8f8` | `var(--color-bg-secondary)` |
| `#f4f4f4`, `#f0f0f0` | `var(--color-bg-tertiary)` |
| `#e5e5e5`, `#eaeaea`, `#eee` | `var(--color-border-default)` |
| `#2b2b2b`, `#1f1f1f` | `var(--color-border-default)` (dark) |
| `#00c78e` | `var(--color-success)` |
| `#1e5297` | `var(--color-brand-primary)` |

---

## Best Practices

### DO ✅

1. **Use semantic tokens** - Use `--color-text-primary` not `--color-black`
2. **Use spacing scale** - Use `var(--space-4)` not `16px`
3. **Use component tokens** - Use `--radius-card` not `20px`
4. **Mobile-first responsive** - Start with mobile, add breakpoints
5. **Test in both themes** - Verify light and dark mode

### DON'T ❌

1. **Don't hardcode colors** - Avoid `color: #616161`
2. **Don't use arbitrary values** - Avoid `p-[17px]`
3. **Don't mix old and new** - Pick one system
4. **Don't skip breakpoints** - Use the defined scale
5. **Don't ignore dark mode** - Always test both themes

---

## Linting (Optional)

Add these stylelint rules to enforce token usage:

```json
{
  "rules": {
    "color-no-hex": true,
    "declaration-property-value-disallowed-list": {
      "/^(padding|margin|gap)/": ["/\\d+px$/"],
      "/^border-radius$/": ["/\\d+px$/"]
    }
  }
}
```

---

## Questions?

For questions about the design system:
1. Check this documentation first
2. Look at `styles/design-tokens.css` for all available tokens
3. Reference `tailwind.config.js` for Tailwind mappings
