# Technical Specification: German Learning App Framework

## Complexity Assessment
**Difficulty: Medium**

This task requires creating a consistent framework/template for German learning apps based on two existing apps. The work involves analyzing existing patterns, defining reusable structures, creating documentation, and establishing conventions without backend infrastructure.

---

## Technical Context

### Language & Architecture
- **Platform**: Pure client-side web application (HTML/CSS/JavaScript)
- **Deployment**: Single-file HTML architecture (no build process required)
- **Dependencies**: Google Fonts only (no npm packages, no frameworks)
- **Target Level**: German B1 (ÖSD B1 preparation)
- **Source Material**: Hueber 5+6 Workbook and Coursebook
- **Design Philosophy**: Follow Claude's frontend design best practices
  - Visually distinctive per app type
  - Progressive difficulty (easy → complex)
  - Immediate feedback with explanations
  - Bilingual support (German UI, English explanations when helpful)
  - Keyboard shortcuts for efficient navigation

### Current State Analysis

#### Existing Apps
1. **als-vs-wenn.html** (Grammar topic)
   - Lesson-based progression structure
   - Multiple exercise types (multiple choice, fill-in-blank)
   - Light/elegant theme (cream, parchment palette)
   - Progress tracking with dots
   - Final results screen
   
2. **german-verbs.html** (Vocabulary/conjugation topic)
   - Multi-view interface (Browse, Flashcards, Quiz)
   - Dark theme with ambient gradients
   - CEFR level filtering (A1-C2)
   - Interactive flashcards with animations
   - Streak tracking in quiz mode

#### Common Patterns Identified
- Single-file HTML with inline CSS/JavaScript
- Structured data arrays (objects with consistent schemas)
- No external dependencies except fonts
- German language UI with English explanations where pedagogically helpful
- Responsive design
- Interactive exercises with immediate feedback
- Progress/score tracking with visual indicators
- Keyboard shortcuts for navigation
- Progressive pedagogy (concepts introduced simply, then layered)
- Metaphors and memory aids (e.g., "als = photo, wenn = video loop")
- Signal words and decision trees to guide learners
- Final assessment/test mode after lesson sequence

#### Hueber Textbook Style Elements
From the provided textbook pages, apps should incorporate:
- **Clear visual hierarchy** - numbered exercises, boxed explanations, distinct sections
- **Structured learning flow** - examples before exercises, rules before practice
- **Varied exercise types** - matching, multiple choice, fill-in-blank, transformation
- **German instructions** - "Ergänzen Sie", "Kreuzen Sie an", "Ordnen Sie zu"
- **Example sentences** - demonstrate usage before testing
- **Contextual learning** - exercises based on realistic scenarios
- **Clean, uncluttered layout** - whitespace, clear grouping, scannable structure

---

## Implementation Approach

### 1. Pedagogical Approach (Hueber-Aligned)

Apps should follow this learning progression:

**For Grammar Topics (Lesson-Based Apps):**
1. **Introduction** - Present core concept with simple explanation
2. **Rules & Patterns** - Explicit grammar rules in digestible chunks
3. **Examples** - Demonstrate usage with bilingual sentences
4. **Signal Words** - Teach recognition patterns (like Hueber does)
5. **Practice** - Guided exercises with immediate feedback
6. **Edge Cases** - Address exceptions and nuances
7. **Final Assessment** - Mixed test of all concepts

**For Vocabulary Topics (Multi-View Apps):**
1. **Browse/Reference** - Complete list for orientation and quick lookup
2. **Flashcards** - Spaced repetition-ready format
3. **Quiz** - Active recall testing with score tracking
4. **Level Filtering** - Focus on appropriate CEFR level

**Feedback Philosophy:**
- Immediate (no "submit quiz" delay)
- Explanatory (not just "correct/incorrect")
- Encouraging (positive reinforcement)
- Bilingual when helpful (German for authenticity, English for clarity)

### 2. Framework Structure

Create a modular framework with three main components:

#### A. Documentation & Guidelines
- **Framework overview document** explaining architecture decisions
- **Getting started guide** for creating new learning apps
- **Design system specification** defining:
  - Color palettes (light theme, dark theme, accent colors)
  - Typography scales and font pairings
  - Component patterns (cards, buttons, inputs, etc.)
  - Animation standards
  - Responsive breakpoints
  
#### B. Template Files
Create starter templates for different app types:

1. **Lesson-based template** (based on als-vs-wenn pattern)
   - **Best for**: Grammar topics, contrasts, rules, patterns
   - **Structure**: Sequential lessons with progress tracking
   - **Features**: 
     - Progress dots showing lesson completion
     - Rich content sections (rules, examples, tips, tables)
     - Multiple exercise types per lesson
     - Previous/Next navigation
     - Final assessment with percentage score
   - **Theme**: Light/elegant (cream/parchment)
   - **Fonts**: Playfair Display (serif titles), Source Sans 3 (body), Fira Code (mono)
   
2. **Multi-view template** (based on german-verbs pattern)
   - **Best for**: Vocabulary, verb forms, reference lists
   - **Structure**: Three-tab interface (Browse/Flashcards/Quiz)
   - **Features**:
     - Browse: Sortable/filterable reference table
     - Flashcards: Flippable cards with keyboard nav
     - Quiz: Active recall with streak tracking
     - CEFR level filtering (A1-C2)
   - **Theme**: Dark/modern (charcoal with neon accents)
   - **Fonts**: DM Serif Display (serif), IBM Plex Sans (sans), JetBrains Mono (mono)

3. **Hybrid template** (future development)
   - Combines both approaches
   - Lessons with embedded flashcard/quiz modes
   - Flexible for different learning objectives

#### C. Reusable Code Modules
Document JavaScript patterns for:
- Data structure schemas
- Exercise types (multiple choice, fill-in-blank, matching, true/false)
- Progress tracking logic
- Scoring systems
- Keyboard navigation
- State management patterns
- Animation utilities

### 2. Content Patterns from Hueber

Based on the textbook pages provided, common topic structures include:

**Grammar Topics:**
- **Contrasts** (als vs. wenn, seit vs. vor, etc.)
  - Side-by-side rule boxes
  - Signal words for each option
  - Decision trees or flowcharts
  
- **Verb Conjugations** (Präteritum, Perfekt, Konjunktiv)
  - Tables showing forms
  - Pattern recognition (strong vs. weak)
  - Level-based organization
  
- **Cases & Declensions** (Akkusativ, Dativ, Genitiv)
  - Tables of endings
  - Trigger words/prepositions
  - Example sentences per case
  
- **Word Order** (Hauptsatz, Nebensatz, Weil/Dass/Ob)
  - Visual diagrams
  - Fill-in exercises with position awareness
  - Sentence building exercises

**Exercise Progression Pattern:**
1. Start with clear examples
2. Provide 3-5 guided exercises with hints
3. Mix difficulty gradually
4. Include 5-7 exercises per lesson
5. Final test with 10-15 mixed exercises

**Common Hueber Instructions:**
- "Ergänzen Sie die richtige Form"
- "Kreuzen Sie an: richtig oder falsch?"
- "Ordnen Sie zu"
- "Bilden Sie Sätze"
- "Was passt? Wählen Sie aus"

### 3. File Organization

Propose GitHub repository structure:
```
german-learning-apps/
├── README.md
├── docs/
│   ├── framework-overview.md
│   ├── getting-started.md
│   ├── design-system.md
│   ├── data-schemas.md
│   └── exercise-types.md
├── templates/
│   ├── lesson-based/
│   │   └── template.html
│   ├── multi-view/
│   │   └── template.html
│   └── hybrid/
│       └── template.html
├── examples/
│   ├── als-vs-wenn.html
│   ├── german-verbs.html
│   └── [future apps]
├── components/
│   ├── css-snippets/
│   │   ├── color-palettes.css
│   │   ├── typography.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   └── animations.css
│   └── js-snippets/
│       ├── exercise-handlers.js
│       ├── progress-tracking.js
│       ├── keyboard-nav.js
│       └── scoring.js
└── assets/
    └── fonts/
        └── font-recommendations.md
```

### 3. Data Schema Standardization

Define consistent data structures for different content types:

#### Lesson-Based Schema (Hueber-Style)
```javascript
{
  number: "Lektion 1",  // or "Abschlusstest" for final assessment
  title: "Descriptive lesson title",
  
  // Rich HTML content with pedagogical structure
  content: `
    <div class="explain">
      <h3>Core concept heading</h3>
      <p>Explanation text (can mix German and English)</p>
    </div>
    
    <div class="rule-box">
      <div class="rule-label">RULE NAME</div>
      <div class="rule-text">Explanation with <strong>emphasis</strong></div>
    </div>
    
    <div class="example">
      <div class="de">German example sentence</div>
      <div class="en">English translation</div>
    </div>
    
    <div class="tip">
      💡 Memory aid or helpful tip
    </div>
    
    <table class="compare-table">
      <!-- Comparison tables for contrasts -->
    </table>
  `,
  
  // Exercise array with varied types
  exercises: [
    {
      type: "choice",  // "choice" | "fill" | "match" | "truefalse" | "order"
      sentence: "German sentence with ___ blank marker",
      answer: "correct answer",
      options: ["option1", "option2"],  // for choice/match types
      explain: "Why this is correct (pedagogical explanation)",
      instruction: "Ergänzen Sie"  // optional German instruction
    }
  ]
}
```

**Content Building Blocks:**
- `.explain` - General explanation sections
- `.rule-box` - Highlighted grammar rules (can be color-coded by theme)
- `.example` - Bilingual example sentences with `.de` and `.en` children
- `.tip` - Memory aids, metaphors, helpful hints
- `.compare-table` - Side-by-side comparisons
- `.section-sep` - Visual separator between sections

#### Vocabulary/Reference Schema
```javascript
{
  term: "German word/phrase",
  definition: "Meaning or translation",
  example: "Example sentence",
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2",
  metadata: {
    pos: "noun|verb|adjective|etc",
    // other relevant fields
  }
}
```

### 4. Design System

#### Theme Variants
Define 3 theme presets:
1. **Light/Elegant** (cream/parchment - for reading-heavy content)
2. **Dark/Modern** (charcoal/neon accents - for vocabulary drilling)
3. **Neutral/Balanced** (new middle-ground option)

Each theme includes:
- CSS custom properties for all colors
- Consistent component styling
- Accessibility considerations (contrast ratios)

#### Typography System
- Define font pairings (serif for titles, sans for body, mono for code)
- Create modular type scale
- Establish hierarchy patterns

#### Component Library
Document CSS/HTML patterns for:
- Cards (lesson cards, exercise cards, flashcards)
- Buttons (primary, secondary, disabled states)
- Input fields (text, select, checkbox)
- Progress indicators (bars, dots, counters)
- Feedback messages (correct, incorrect, hints)
- Navigation elements (tabs, arrows, pagination)

### 5. Exercise Type Library

Define standard exercise formats aligned with Hueber textbook patterns:

1. **Auswahl / Multiple Choice** (2-4 options)
   - German instruction: "Kreuzen Sie an" / "Wählen Sie die richtige Antwort"
   - Visual: Radio buttons or clickable option cards
   - Feedback: Immediate with explanation
   
2. **Lückentext / Fill-in-the-Blank** (text input)
   - German instruction: "Ergänzen Sie"
   - Visual: Inline text inputs within sentences
   - Validation: Accept variations (e.g., "hat gefahren" or "ist gefahren")
   - Feedback: Show correct answer with explanation
   
3. **Richtig/Falsch / True/False** (binary choice)
   - German instruction: "Richtig oder falsch?"
   - Visual: Two-button choice (✓ / ✗)
   - Feedback: Brief explanation of why
   
4. **Zuordnung / Matching** (selection or drag-and-drop)
   - German instruction: "Ordnen Sie zu"
   - Visual: Connect items or select pairs
   - Implementation: Click-based pairing (simpler than drag-drop)
   - Feedback: Highlight correct/incorrect pairs
   
5. **Reihenfolge / Ordering** (sequence arrangement)
   - German instruction: "Bringen Sie in die richtige Reihenfolge"
   - Visual: Numbered items or drag handles
   - Feedback: Show correct sequence

6. **Transformation / Sentence Building** (future extension)
   - German instruction: "Bilden Sie Sätze"
   - Example: Conjugate verb, change tense, reorder words

For each type, document:
- German instruction patterns (authentic Hueber style)
- HTML structure template
- CSS styling patterns
- JavaScript interaction logic
- Data schema with examples
- Feedback message patterns
- Accessibility considerations (keyboard nav, ARIA labels)

### 6. Naming Conventions

Establish consistent naming for:
- CSS classes (BEM methodology or similar)
- JavaScript variables and functions
- File names
- Data object properties
- ID attributes

### 7. Common Pitfalls & Best Practices

Document important technical considerations:

**Character Encoding Issues:**
- **Avoid smart quotes** in JavaScript strings (", ", „, ")
  - Use HTML entities instead: `&bdquo;`, `&ldquo;`, `&rdquo;`
  - Or use straight quotes: `"`, `'`
- **Template literals** (backticks) are safe for German text with apostrophes
- Test all content for proper UTF-8 encoding

**JavaScript Best Practices:**
- Keep data at top of `<script>` section for easy editing
- Use `const` for data arrays (immutable references)
- Use descriptive function names (e.g., `answerExercise`, `goLesson`)
- Handle variations in answers (e.g., "hat gefahren" vs "ist gefahren")
- Normalize user input (trim, lowercase) for text comparison

**CSS Best Practices:**
- Use CSS custom properties for theming
- Mobile-first responsive approach
- Test on common breakpoints (320px, 768px, 1024px)
- Ensure sufficient color contrast for accessibility

**Content Best Practices:**
- Keep lessons focused (one concept per lesson)
- 5-7 exercises per lesson is ideal
- Mix exercise types within lessons
- Always provide explanatory feedback
- Use memory aids and metaphors where helpful

---

## Source Code Structure Changes

### New Files to Create

1. **Documentation files** (`docs/` folder)
   - framework-overview.md
   - getting-started.md
   - design-system.md
   - data-schemas.md
   - exercise-types.md

2. **Template files** (`templates/` folder)
   - lesson-based/template.html (extracted from als-vs-wenn)
   - multi-view/template.html (extracted from german-verbs)
   - hybrid/template.html (new combination)

3. **Component snippets** (`components/` folder)
   - CSS modules for reusable styles
   - JavaScript modules for reusable logic

4. **Example apps** (`examples/` folder)
   - Move als-vs-wenn.html here
   - Move german-verbs.html here

5. **Root documentation**
   - README.md (project overview)
   - .gitignore (standard web project ignores)

### Files to Modify
- None (existing apps remain as reference examples)

---

## Data Model / API / Interface Changes

**No backend/API required** - all apps are static HTML files.

### Data Interfaces
Define TypeScript-style interfaces for documentation:

```typescript
interface Lesson {
  number: string;
  title: string;
  content: string;
  exercises: Exercise[];
}

interface Exercise {
  type: 'choice' | 'fill' | 'match' | 'truefalse';
  sentence: string;
  answer: string | string[];
  options?: string[];
  explain: string;
}

interface VocabItem {
  term: string;
  translation?: string;
  definition?: string;
  example?: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

interface AppState {
  currentIndex: number;
  scores: ScoreData;
  userAnswers: Record<string, any>;
}
```

---

## Verification Approach

### Manual Testing Checklist
For each template:
- [ ] Opens in modern browsers (Chrome, Firefox, Safari)
- [ ] Responsive at mobile, tablet, desktop sizes
- [ ] All exercise types function correctly
- [ ] Progress tracking works
- [ ] Scoring calculates accurately
- [ ] Keyboard shortcuts work (if applicable)
- [ ] Animations are smooth
- [ ] Fonts load correctly
- [ ] No console errors

### Documentation Validation
- [ ] Getting started guide can be followed by someone new
- [ ] Code snippets are syntactically correct
- [ ] Examples match documentation
- [ ] All file paths are accurate
- [ ] Design system is comprehensive

### Framework Validation
- [ ] Create a new test app using the templates
- [ ] Verify it takes < 1 hour to set up basic content
- [ ] Check that customization is straightforward
- [ ] Ensure consistency between apps created with framework

### GitHub Repository Setup
- [ ] Repository created with proper structure
- [ ] README is clear and welcoming
- [ ] .gitignore excludes unnecessary files
- [ ] Example apps work when cloned
- [ ] Documentation renders properly on GitHub

---

## Design Decisions

### Why Single-File HTML?
- **Pros**: No build process, easy deployment, portable, works offline
- **Cons**: Harder to maintain large apps, no code reuse between apps
- **Decision**: Keep single-file for B1-level topics (limited scope), provide good templates and snippets to copy/paste

### Why No Framework (React/Vue)?
- **Reasoning**: Adds complexity, build steps, and dependencies; current apps are lightweight and performant
- **Decision**: Stay vanilla JavaScript; use modern ES6+ features; document patterns clearly

### Theme Approach
- **Option 1**: Single unified theme across all apps
- **Option 2**: Multiple theme options to match content type
- **Decision**: Option 2 - provide 2-3 theme presets; allow customization per app based on content needs

### Data Organization
- **Decision**: Keep data inline in HTML files (not external JSON) for portability
- **Convention**: Define data at top of `<script>` section for easy editing

### Exercise Type Extensibility
- **Decision**: Document 5 core exercise types thoroughly; make it easy to add custom types
- **Approach**: Provide clear patterns and examples for creating new exercise types

---

## Success Criteria

The framework is successful if:
1. A new German learning app can be created in < 2 hours using the templates
2. All apps maintain visual and functional consistency
3. Apps align with Hueber B1 textbook style and pedagogy
4. Documentation enables someone unfamiliar with the project to create a new app
5. Example apps demonstrate best practices
6. Code snippets are copy-paste ready
7. Repository is well-organized and navigable on GitHub
8. German instructions follow authentic Hueber patterns
9. Exercise types match common Hueber formats
10. Lessons follow progressive difficulty structure

## Potential Future Topics (Hueber B1 Curriculum)

To guide framework design, here are common B1-level topics that could become apps:

**Grammar Topics (Lesson-Based):**
- Modalverben (sollen, müssen, dürfen, können, wollen, mögen)
- Konjunktiv II (würde + Infinitiv, hätte/wäre, wishes and polite requests)
- Passiv (Präsens, Präteritum, mit Modalverben)
- Relativsätze (der/die/das, Akkusativ, Dativ cases)
- Adjektivdeklination (definite, indefinite, zero article)
- Präpositionen mit Akkusativ/Dativ (Wechselpräpositionen)
- Nebensätze (weil, dass, ob, wenn, als, während, bis)
- Verben mit Präpositionen (sich freuen auf, warten auf, denken an)

**Vocabulary Topics (Multi-View):**
- Trennbare/Untrennbare Verben
- Nomen-Verb-Verbindungen
- Redemittel (Meinungen äußern, Diskutieren, Argumentieren)
- Themenspezifischer Wortschatz (Arbeit, Gesundheit, Medien, Umwelt)

---

## Out of Scope

- Backend services or databases
- User accounts or authentication
- Progress persistence across sessions (browser storage could be added later)
- Mobile native apps
- Automated testing framework
- Build/bundling tools
- Translation to other languages beyond German
