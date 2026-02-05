# Font Recommendations

This document provides font recommendations for German learning apps in this framework.

---

## Overview

All apps use **Google Fonts** for typography. Fonts are loaded via CDN links in the HTML `<head>` section — no local font files needed.

---

## Lesson-Based Template Fonts

### Primary Fonts

**Playfair Display** (Serif - Headings)
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```
- **Use for:** Main headings, lesson titles, section headers
- **Weights:** 400 (regular), 600 (semibold), 700 (bold)
- **Style:** Classic, elegant, reading-friendly

**Source Sans 3** (Sans-Serif - Body Text)
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600&display=swap" rel="stylesheet">
```
- **Use for:** Body text, explanations, instructions, UI elements
- **Weights:** 300 (light), 400 (regular), 600 (semibold)
- **Style:** Clean, highly legible, professional

**Fira Code** (Monospace - Examples)
```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap" rel="stylesheet">
```
- **Use for:** Example sentences, highlighted text
- **Weights:** 400 (regular)
- **Style:** Modern monospace with coding ligatures (not used for code, but for visual distinction)

### CSS Usage

```css
:root {
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Source Sans 3', system-ui, sans-serif;
  --font-mono: 'Fira Code', 'Courier New', monospace;
}

h1, h2, h3 {
  font-family: var(--font-serif);
}

body, p, button, input {
  font-family: var(--font-sans);
}

.example .de {
  font-family: var(--font-mono);
}
```

---

## Multi-View Template Fonts

### Primary Fonts

**DM Serif Display** (Serif - Headings)
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```
- **Use for:** Main headings, app title
- **Weights:** 400 (regular), 400 italic
- **Style:** Bold, modern serif with high contrast

**IBM Plex Sans** (Sans-Serif - Body Text)
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```
- **Use for:** Body text, UI elements, tabs, buttons
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Style:** Geometric, technical, highly readable

**JetBrains Mono** (Monospace - Code/Examples)
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- **Use for:** Verb forms, examples, monospace text
- **Weights:** 400 (regular), 500 (medium)
- **Style:** Modern monospace designed for coding (excellent readability)

### CSS Usage

```css
:root {
  --font-serif: 'DM Serif Display', Georgia, serif;
  --font-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}

h1, h2 {
  font-family: var(--font-serif);
}

body, button, input, .tab {
  font-family: var(--font-sans);
}

.verb-form, .example {
  font-family: var(--font-mono);
}
```

---

## Font Loading Best Practices

### 1. Always Include Fallbacks

```css
/* GOOD - system fonts as fallbacks */
font-family: 'Playfair Display', Georgia, serif;
font-family: 'Source Sans 3', system-ui, -apple-system, sans-serif;
font-family: 'Fira Code', Consolas, 'Courier New', monospace;

/* BAD - no fallback */
font-family: 'Playfair Display';
```

### 2. Use font-display: swap

Already included in Google Fonts URLs via `&display=swap` parameter.

**What it does:** Shows system font immediately, then swaps to web font when loaded (prevents invisible text).

### 3. Load Only Needed Weights

```html
<!-- GOOD - only weights you use -->
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">

<!-- BAD - all weights (slower loading) -->
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### 4. Preconnect to Google Fonts

Add this to `<head>` before font links for faster loading:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Alternative Font Pairings

If you want to customize your app with different fonts, here are tested alternatives:

### Classic & Readable (Grammar Topics)

**Lora** (serif) + **Open Sans** (sans)
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

### Modern & Technical (Vocabulary/Reference)

**Space Grotesk** (sans) + **Recursive** (variable)
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Recursive:wght@400;600&display=swap" rel="stylesheet">
```

### Warm & Friendly (Mixed Content)

**Merriweather** (serif) + **Nunito** (sans)
```html
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Nunito:wght@300;400;600&display=swap" rel="stylesheet">
```

---

## German Language Considerations

### Special Characters

All recommended fonts have excellent support for German special characters:
- **ä, ö, ü** (umlauts)
- **ß** (eszett/sharp S)
- **ẞ** (capital eszett - available in modern fonts)

### Testing Special Characters

Always test your chosen fonts with German text:

```html
<p>Übung macht den Meister — Größe, Fußball, Straße</p>
```

---

## Offline Fallback

Apps work offline, but Google Fonts require internet on first load. After first visit, fonts are cached by the browser.

**For fully offline apps:** Use system fonts only:

```css
:root {
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: Consolas, 'Courier New', monospace;
}
```

---

## Typography Scale

Both templates use a modular type scale for consistent sizing:

```css
/* Lesson-Based Template */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */

/* Multi-View Template */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.375rem;  /* 22px */
--text-2xl: 1.75rem;  /* 28px */
--text-3xl: 2.125rem; /* 34px */
```

---

## Resources

- **Google Fonts:** https://fonts.google.com/
- **Font Pairing Tool:** https://fontpair.co/
- **Variable Fonts Guide:** https://web.dev/variable-fonts/

---

**Quick Reference:** Fonts are specified in the template HTML files. Look for the `<link>` tags in the `<head>` section and the `:root` CSS variables for customization points.
