# Design System Documentation

## Overview

This design system is extracted from the existing German learning apps and provides a consistent foundation for creating new learning applications. The system supports two distinct visual themes while maintaining pedagogical consistency.

---

## Design Philosophy

### Core Principles

1. **Visually Distinctive Per App Type**
   - Lesson-based apps: Light, elegant, reading-friendly (cream/parchment palette)
   - Multi-view apps: Dark, modern, vocabulary-drilling focused (charcoal with neon accents)

2. **Progressive Pedagogy**
   - Easy to complex learning progression
   - Immediate feedback with explanations
   - Bilingual support (German UI with English explanations when helpful)

3. **User Experience**
   - Keyboard shortcuts for efficient navigation
   - Responsive design for all devices
   - Smooth animations and transitions
   - Clear visual hierarchy

---

## Color Palettes

### Theme 1: Light/Elegant (Lesson-Based Apps)

**Purpose**: Best for reading-heavy, grammar-focused content where learners spend time absorbing explanations and rules.

For font choices and typography implementation, see **[Font Recommendations](../assets/fonts/font-recommendations.md)**.

#### Base Colors
```css
--cream: #faf6f0;           /* Main background */
--cream-dark: #f0ebe3;      /* Darker variant */
--parchment: #e8e0d4;       /* Subtle accents */
```

#### Text Colors
```css
--ink: #2c2420;             /* Primary text */
--ink-light: #5a4f46;       /* Secondary text */
--ink-faint: #8a7f74;       /* Tertiary text */
--ink-ghost: #b8afa5;       /* Disabled/muted */
--ink-whisper: #d4cdc5;     /* Borders/separators */
```

#### Semantic Colors (als vs. wenn example)
```css
--als-color: #c0582e;       /* Semantic accent 1 */
--als-bg: #fdf0ea;          /* Accent background 1 */
--als-border: #e8c4b2;      /* Accent border 1 */

--wenn-color: #2e6b8a;      /* Semantic accent 2 */
--wenn-bg: #eaf3f8;         /* Accent background 2 */
--wenn-border: #b2d0e0;     /* Accent border 2 */
```

#### Feedback Colors
```css
--correct: #4a7c59;         /* Correct answer */
--correct-bg: #eef5f0;      /* Correct background */
--incorrect: #a84032;       /* Incorrect answer */
--incorrect-bg: #fdf0ee;    /* Incorrect background */
--gold: #b8943e;            /* Achievement/progress */
--gold-bg: #faf5e8;         /* Achievement background */
```

#### Shadows
```css
--shadow: 0 2px 12px rgba(44,36,32,.06);
--shadow-lg: 0 8px 32px rgba(44,36,32,.08);
```

---

### Theme 2: Dark/Modern (Multi-View Apps)

**Purpose**: Best for vocabulary drilling, verb tables, and reference lists where focus and contrast are important.

For font choices and typography implementation, see **[Font Recommendations](../assets/fonts/font-recommendations.md)**.

#### Base Colors
```css
--bg: #0e0f13;              /* Main background */
--surface: #16171d;         /* Card/panel background */
--surface-2: #1e1f27;       /* Elevated surfaces */
--surface-3: #262731;       /* Highest elevation */
```

#### Border Colors
```css
--border: #2a2b36;          /* Primary borders */
--border-light: #35364280;  /* Subtle borders */
```

#### Text Colors
```css
--text: #e8e6e3;            /* Primary text */
--text-dim: #8a8997;        /* Secondary text */
--text-muted: #5c5b6b;      /* Tertiary text */
```

#### CEFR Level Accent Colors
```css
--accent-a1: #4fc3f7;       /* A1 level - Light blue */
--accent-a2: #81c784;       /* A2 level - Light green */
--accent-b1: #ffb74d;       /* B1 level - Orange */
--accent-b2: #ef5350;       /* B2 level - Red */
--accent-c1: #ce93d8;       /* C1 level - Purple */
--accent-c2: #f48fb1;       /* C2 level - Pink */
```

#### Glow Effects (for CEFR levels)
```css
--glow-a1: rgba(79,195,247,.12);
--glow-a2: rgba(129,199,132,.12);
--glow-b1: rgba(255,183,77,.12);
--glow-b2: rgba(239,83,80,.12);
--glow-c1: rgba(206,147,216,.12);
--glow-c2: rgba(244,143,177,.12);
```

#### Feedback Colors
```css
--correct: #66bb6a;         /* Correct answer */
--incorrect: #ef5350;       /* Incorrect answer */
```

#### Shapes
```css
--card-radius: 16px;        /* Card border radius */
```

---

## Typography

### Font Pairings

#### Option 1: Light/Elegant Theme
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

**Usage:**
- **Headings**: `font-family: 'Playfair Display', Georgia, serif;`
- **Body Text**: `font-family: 'Source Sans 3', sans-serif;`
- **Code/Input**: `font-family: 'Fira Code', monospace;`

#### Option 2: Dark/Modern Theme
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Usage:**
- **Headings**: `font-family: 'DM Serif Display', serif;`
- **Body Text**: `font-family: 'IBM Plex Sans', sans-serif;`
- **Code/Input**: `font-family: 'JetBrains Mono', monospace;`

---

### Type Scale

#### Light Theme Scale
```css
/* Headers */
.header h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(32px, 6vw, 52px);
  font-weight: 400;
  line-height: 1.15;
}

.lesson-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
}

.exercise-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20px;
}

/* Body text */
body {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  line-height: 1.7;
}

.explain p {
  font-size: 15.5px;
}

/* Small text */
.header-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
}
```

#### Dark Theme Scale
```css
/* Headers */
.header h1 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 400;
  line-height: 1.15;
}

/* Large display text */
.quiz-prompt-verb {
  font-family: 'DM Serif Display', serif;
  font-size: 36px;
}

.card-front-verb {
  font-family: 'DM Serif Display', serif;
  font-size: 42px;
}

/* Body text */
body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
}

/* Small/label text */
.header-tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
```

---

### Typography Hierarchy

**Level 1 - Page Title**: 32-52px, serif, light weight
**Level 2 - Section Title**: 28px, serif, regular weight  
**Level 3 - Subsection**: 20px, serif, regular weight
**Level 4 - Labels**: 11-12px, sans-serif, bold, uppercase, tracked
**Body - Primary**: 15-16px, sans-serif, regular weight
**Body - Secondary**: 14-15px, sans-serif, light weight
**Monospace**: 14-16px, monospace, regular weight

---

## Component Patterns

### Buttons

#### Light Theme Buttons

**Primary Button**
```css
.nav-btn-primary {
  padding: 14px 32px;
  border-radius: 100px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--cream);
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all .25s;
  box-shadow: var(--shadow);
}
.nav-btn-primary:hover {
  background: var(--ink-light);
}
```

**Secondary Button**
```css
.nav-btn {
  padding: 14px 32px;
  border-radius: 100px;
  border: 1px solid var(--ink-whisper);
  background: white;
  color: var(--ink);
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all .25s;
  box-shadow: var(--shadow);
}
.nav-btn:hover {
  background: var(--ink);
  color: var(--cream);
  box-shadow: var(--shadow-lg);
}
```

**Choice Buttons (Semantic Colors)**
```css
.choice-btn {
  padding: 10px 28px;
  border-radius: 100px;
  border: 2px solid;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}

.choice-als {
  border-color: var(--als-border);
  background: var(--als-bg);
  color: var(--als-color);
}
.choice-als:hover {
  background: var(--als-color);
  color: white;
}
```

#### Dark Theme Buttons

**Primary Button**
```css
.quiz-btn-primary {
  padding: 12px 32px;
  border-radius: 100px;
  border: 1px solid var(--accent-a1);
  background: var(--accent-a1);
  color: var(--bg);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}
.quiz-btn-primary:hover {
  background: #6dd0fa;
  border-color: #6dd0fa;
}
```

**Secondary Button**
```css
.quiz-btn {
  padding: 12px 32px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;
}
.quiz-btn:hover {
  background: var(--surface-2);
  border-color: var(--text-muted);
}
```

**Filter Buttons (with CEFR level colors)**
```css
.filter-btn {
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-dim);
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
  letter-spacing: .5px;
}
.filter-btn:hover {
  border-color: var(--text-muted);
  color: var(--text);
}
.filter-btn.active[data-level="B1"] {
  background: var(--glow-b1);
  border-color: var(--accent-b1);
  color: var(--accent-b1);
}
```

---

### Cards

#### Light Theme Cards

**Explanation Card**
```css
.explain {
  background: white;
  border: 1px solid var(--ink-whisper);
  border-radius: var(--radius);
  padding: 28px 28px 24px;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
}
```

**Rule Box (with semantic color)**
```css
.rule-box {
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 16px;
  border-left: 4px solid;
}
.rule-als {
  background: var(--als-bg);
  border-color: var(--als-color);
}
```

**Example Card**
```css
.example {
  background: white;
  border: 1px solid var(--ink-whisper);
  border-radius: var(--radius);
  padding: 18px 24px;
  margin-bottom: 10px;
  font-size: 16px;
}
.example .de {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 4px;
}
.example .en {
  font-size: 13.5px;
  color: var(--ink-faint);
  font-style: italic;
}
```

**Exercise Card**
```css
.exercise-item {
  background: white;
  border: 1px solid var(--ink-whisper);
  border-radius: var(--radius);
  padding: 22px 24px;
  margin-bottom: 12px;
  box-shadow: var(--shadow);
  transition: border-color .3s;
}
.exercise-item.answered-correct {
  border-color: var(--correct);
}
.exercise-item.answered-incorrect {
  border-color: var(--incorrect);
}
```

#### Dark Theme Cards

**Browse Row**
```css
.verb-row {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.5fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all .2s;
  cursor: default;
}
.verb-row:hover {
  background: var(--surface-2);
  border-color: var(--border-light);
  transform: translateY(-1px);
}
```

**Flashcard**
```css
.flashcard-container {
  perspective: 1200px;
  width: 100%;
  max-width: 480px;
  height: 320px;
  cursor: pointer;
}

.flashcard {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .55s cubic-bezier(.4,.0,.2,1);
}
.flashcard.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: var(--card-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border: 1px solid var(--border);
}

.card-front {
  background: linear-gradient(145deg, var(--surface) 0%, var(--surface-2) 100%);
}

.card-back {
  background: linear-gradient(145deg, var(--surface-2) 0%, var(--surface-3) 100%);
  transform: rotateY(180deg);
  gap: 16px;
}
```

**Quiz Card**
```css
.quiz-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--card-radius);
  padding: 40px 32px;
  text-align: center;
  margin-bottom: 20px;
}
```

---

### Input Fields

#### Light Theme Input

**Fill-in-the-blank Input**
```css
.fill-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-bottom: 2px solid var(--ink-ghost);
  background: transparent;
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  color: var(--ink);
  text-align: center;
  outline: none;
  transition: border-color .3s;
}
.fill-input:focus {
  border-color: var(--ink);
}
.fill-input.correct {
  border-color: var(--correct);
  color: var(--correct);
}
.fill-input.incorrect {
  border-color: var(--incorrect);
  color: var(--incorrect);
}
```

#### Dark Theme Input

**Quiz Input**
```css
.quiz-input {
  width: 100%;
  max-width: 320px;
  padding: 14px 20px;
  background: var(--bg);
  border: 2px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  text-align: center;
  outline: none;
  transition: border-color .2s;
}
.quiz-input:focus {
  border-color: var(--accent-a1);
}
.quiz-input.correct {
  border-color: var(--correct);
  background: rgba(102,187,106,.06);
}
.quiz-input.incorrect {
  border-color: var(--incorrect);
  background: rgba(239,83,80,.06);
}
```

---

### Feedback Messages

#### Light Theme Feedback
```css
.exercise-feedback {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.6;
  padding: 12px 16px;
  border-radius: 8px;
  display: none;
}
.exercise-feedback.show {
  display: block;
}
.exercise-feedback.correct {
  background: var(--correct-bg);
  color: var(--correct);
  border: 1px solid rgba(74,124,89,.15);
}
.exercise-feedback.incorrect {
  background: var(--incorrect-bg);
  color: var(--incorrect);
  border: 1px solid rgba(168,64,50,.15);
}
```

#### Dark Theme Feedback
```css
.quiz-feedback {
  margin-top: 16px;
  font-size: 15px;
  min-height: 24px;
  font-weight: 500;
}
.quiz-feedback.correct {
  color: var(--correct);
}
.quiz-feedback.incorrect {
  color: var(--incorrect);
}
```

---

### Progress Indicators

#### Progress Dots (Light Theme)
```css
.progress-bar {
  display: flex;
  gap: 4px;
  margin-bottom: 32px;
}

.progress-dot {
  flex: 1;
  height: 5px;
  border-radius: 100px;
  background: var(--parchment);
  transition: background .4s, box-shadow .4s;
  cursor: pointer;
}
.progress-dot.completed {
  background: var(--gold);
}
.progress-dot.current {
  background: var(--ink);
  box-shadow: 0 0 0 2px var(--cream), 0 0 0 4px var(--ink);
}
```

#### Score Bar (Dark Theme)
```css
.quiz-score-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 14px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.quiz-score-item {
  text-align: center;
}

.quiz-score-label {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
}

.quiz-score-val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 22px;
  font-weight: 500;
}
.score-correct { color: var(--correct); }
.score-incorrect { color: var(--incorrect); }
.score-streak { color: var(--accent-a1); }
```

---

### Tabs & Navigation

#### Tab Navigation (Dark Theme)
```css
.tabs {
  display: flex;
  gap: 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 5px;
  margin-bottom: 24px;
}

.tab {
  flex: 1;
  padding: 12px 8px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--text-dim);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;
}
.tab:hover {
  color: var(--text);
  background: var(--surface-2);
}
.tab.active {
  background: var(--surface-3);
  color: var(--text);
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
}
```

---

### Special Elements

#### Tip/Note Boxes
```css
.tip {
  background: var(--gold-bg);
  border: 1px solid rgba(184,148,62,.2);
  border-radius: var(--radius);
  padding: 18px 24px;
  margin: 20px 0;
  font-size: 14.5px;
  color: var(--ink-light);
}
.tip::before {
  content: '💡';
  margin-right: 8px;
}
```

#### Comparison Tables
```css
.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14.5px;
}
.compare-table th {
  font-weight: 700;
  text-align: left;
  padding: 10px 16px;
  border-bottom: 2px solid var(--ink-whisper);
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.compare-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--parchment);
  vertical-align: top;
}
```

#### Keyboard Hints
```css
.kbd-hint {
  text-align: center;
  color: var(--text-muted);
  font-size: 12px;
  margin-top: 12px;
  font-weight: 300;
}
.kbd {
  display: inline-block;
  padding: 2px 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  margin: 0 2px;
}
```

#### Level Badges (Dark Theme)
```css
.verb-level {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 6px;
  text-align: center;
  min-width: 36px;
}
.level-A1 { background: var(--glow-a1); color: var(--accent-a1); }
.level-A2 { background: var(--glow-a2); color: var(--accent-a2); }
.level-B1 { background: var(--glow-b1); color: var(--accent-b1); }
.level-B2 { background: var(--glow-b2); color: var(--accent-b2); }
.level-C1 { background: var(--glow-c1); color: var(--accent-c1); }
.level-C2 { background: var(--glow-c2); color: var(--accent-c2); }
```

---

## Animation Standards

### Transitions

**Standard Duration**: `.2s` - `.25s` for interactive elements
**Longer Duration**: `.4s` - `.55s` for page/state changes

```css
/* Button hover */
transition: all .2s;

/* Card state changes */
transition: border-color .3s;

/* Page transitions */
transition: all .25s;

/* Flashcard flip */
transition: transform .55s cubic-bezier(.4,.0,.2,1);

/* Progress indicators */
transition: background .4s, box-shadow .4s;
```

### Fade-In Animation
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.lesson {
  animation: fadeIn .4s ease;
}
```

### Slide-In Animation
```css
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.verb-row {
  animation: fadeSlideIn .3s ease both;
}
```

### Hover Effects

**Subtle lift**
```css
.verb-row:hover {
  transform: translateY(-1px);
}
```

**Shadow expansion**
```css
.nav-btn:hover {
  box-shadow: var(--shadow-lg);
}
```

---

## Background Effects

### Light Theme - Paper Texture
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.015'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}
```

### Dark Theme - Ambient Gradients
```css
body::before {
  content: '';
  position: fixed;
  top: -40%; left: -20%;
  width: 80vw; height: 80vw;
  background: radial-gradient(circle, rgba(79,195,247,.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}
body::after {
  content: '';
  position: fixed;
  bottom: -30%; right: -20%;
  width: 70vw; height: 70vw;
  background: radial-gradient(circle, rgba(206,147,216,.03) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}
```

---

## Responsive Breakpoints

### Mobile Breakpoint: 600px

#### Light Theme Responsive
```css
@media (max-width: 600px) {
  .app { padding: 16px 16px 80px; }
  .explain, .exercise-item { padding: 20px 18px; }
  .rule-box { padding: 16px 18px; }
  .example { padding: 14px 18px; }
  .lesson-title { font-size: 24px; }
  .compare-table { font-size: 13px; }
  .compare-table td, .compare-table th { padding: 8px 10px; }
}
```

#### Dark Theme Responsive
```css
@media (max-width: 600px) {
  .verb-row {
    grid-template-columns: 1fr 1fr;
    gap: 6px 12px;
    padding: 12px 16px;
  }
  .verb-perf { grid-column: 1 / -1; font-size: 13px; }
  .flashcard-container { height: 280px; }
  .card-front-verb { font-size: 32px; }
  .quiz-prompt-verb { font-size: 28px; }
  .tabs { gap: 2px; }
  .tab { font-size: 13px; padding: 10px 6px; }
}
```

---

## Layout Patterns

### Container Max-Width

**Light Theme**: `740px`
```css
.app {
  max-width: 740px;
  margin: 0 auto;
  padding: 32px 24px 100px;
}
```

**Dark Theme**: `900px`
```css
.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}
```

### Spacing Scale

**Tight**: `4px`, `8px`  
**Standard**: `12px`, `16px`, `20px`, `24px`  
**Generous**: `28px`, `32px`, `36px`  
**Large**: `40px`, `48px`

---

## Accessibility Considerations

### Contrast Ratios
- All text should meet WCAG AA standards (4.5:1 for body text)
- Interactive elements should have clear focus states
- Color should not be the only indicator of state

### Focus States
```css
.quiz-input:focus {
  border-color: var(--accent-a1);
  outline: none;
}

.fill-input:focus {
  border-color: var(--ink);
  outline: none;
}
```

### Keyboard Navigation
- All interactive elements should be keyboard accessible
- Tab order should follow visual hierarchy
- Keyboard shortcuts should be documented

---

## Usage Guidelines

### When to Use Light Theme
- Grammar-heavy lessons with extensive explanations
- Apps requiring prolonged reading
- Contrasting concepts (like "als vs. wenn")
- Apps focused on rules and patterns

### When to Use Dark Theme
- Vocabulary drilling apps
- Reference tables and lists
- Apps with CEFR level filtering
- Apps with quiz/testing focus
- Apps meant for repeated, shorter sessions

### Mixing Themes
Avoid mixing theme elements. Each app should commit fully to either light or dark theme for visual consistency and user experience.

---

## Design Tokens Summary

### Border Radius
- **Small**: `8px`
- **Standard**: `10px` (light), `12px` (dark)
- **Large**: `14px` (tabs), `16px` (cards)
- **Round**: `100px` (buttons)

### Font Weights
- **Light**: `300`
- **Regular**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`

### Letter Spacing
- **Tight**: `0.5px`
- **Standard**: `1px` - `1.5px`
- **Wide**: `2px` - `2.5px`
- **Extra Wide**: `3px` (small uppercase labels)

---

## Future Enhancements

Potential additions to the design system:

1. **Neutral/Balanced Theme**: A middle-ground option between light and dark
2. **Additional CEFR Color Variations**: Pre-A1 and post-C2 support
3. **Animation Library**: More sophisticated transitions and micro-interactions
4. **Icon System**: Standardized iconography for common actions
5. **Print Styles**: CSS for printing lesson content
6. **High Contrast Mode**: Enhanced accessibility option

---

*Last Updated: Based on als-vs-wenn.html and german-verbs.html analysis*
