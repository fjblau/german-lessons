# Data Schemas

This document defines standard data structures for German learning apps. All schemas use **TypeScript-style interfaces** for clarity, though the actual implementation is in vanilla JavaScript.

---

## Table of Contents

1. [Lesson-Based Schema](#lesson-based-schema)
2. [Vocabulary/Reference Schema](#vocabularyreference-schema)
3. [Exercise Type Schemas](#exercise-type-schemas)
4. [App State Schema](#app-state-schema)

---

## Lesson-Based Schema

For apps organized as sequential lessons (grammar topics, contrasts, patterns).

### Core Lesson Interface

```typescript
interface Lesson {
  number: string;       // "Lektion 1", "Lektion 2", "Abschlusstest"
  title: string;        // Descriptive lesson title
  content: string;      // HTML content (rich pedagogical structure)
  exercises: Exercise[]; // Array of exercise objects
}
```

### Lesson Examples

#### Example 1: Basic Lesson

```javascript
{
  number: "Lektion 1",
  title: "Die Grundregel — Einmalig vs. Wiederholt",
  content: `
    <div class="explain">
      <h3>The Core Distinction</h3>
      <p>Understanding when to use <strong>als</strong> versus <strong>wenn</strong>.</p>
    </div>
    
    <div class="rule-box rule-als">
      <div class="rule-label">ALS</div>
      <div class="rule-text">Use <strong>als</strong> for one-time events in the past.</div>
    </div>
    
    <div class="example">
      <div class="de">Als ich Kind war, wohnte ich in Berlin.</div>
      <div class="en">When I was a child, I lived in Berlin.</div>
    </div>
    
    <div class="tip">💡 Think of <strong>als</strong> as a snapshot — one moment captured.</div>
  `,
  exercises: [
    { 
      sentence: "___ ich gestern aufwachte, schien die Sonne.", 
      answer: "als", 
      explain: "'Gestern' points to a specific single event." 
    },
    { 
      sentence: "___ sie uns besuchte, brachte sie jedes Mal Kuchen mit.", 
      answer: "wenn", 
      explain: "'Jedes Mal' signals repetition." 
    }
  ]
}
```

#### Example 2: Lesson with Comparison Table

```javascript
{
  number: "Lektion 2",
  title: "Signalwörter — Hinweise im Satz",
  content: `
    <div class="explain">
      <h3>Signal Words Guide Your Choice</h3>
      <p>Certain words strongly indicate which conjunction to use.</p>
    </div>
    
    <table class="compare-table">
      <tr>
        <th class="col-als">Signals for ALS</th>
        <th class="col-wenn">Signals for WENN</th>
      </tr>
      <tr>
        <td class="col-als">gestern, letztes Jahr, 1989</td>
        <td class="col-wenn">immer, jedes Mal, oft</td>
      </tr>
    </table>
  `,
  exercises: [
    { 
      sentence: "___ ich ihn zum letzten Mal besuchte, war er krank.", 
      answer: "als", 
      explain: "'Zum letzten Mal' — a unique event." 
    }
  ]
}
```

#### Example 3: Final Assessment

```javascript
{
  number: "Abschlusstest",
  title: "Test Your Knowledge",
  content: `
    <div class="explain">
      <h3>Mixed Exercise Set</h3>
      <p>Apply everything you've learned. Choose carefully!</p>
    </div>
  `,
  exercises: [
    { sentence: "___ ich in Wien war, besuchte ich das Museum.", answer: "als", explain: "One trip to Vienna." },
    { sentence: "___ es regnet, bleibe ich zu Hause.", answer: "wenn", explain: "A general condition." },
    { sentence: "___ sie die Nachricht hörte, weinte sie.", answer: "als", explain: "One specific moment." }
  ]
}
```

---

## Content Building Blocks

The `content` field uses HTML with standardized CSS classes:

### Content Block Reference

```typescript
// Content block types for lesson HTML
type ContentBlock = 
  | ExplainBlock
  | RuleBoxBlock
  | ExampleBlock
  | TipBlock
  | CompareTableBlock
  | SectionSeparator;
```

### Block Examples

#### `.explain` — General Explanation

```html
<div class="explain">
  <h3>Section Heading</h3>
  <p>Explanation text. Can mix German and English for clarity.</p>
  <p>Multiple paragraphs are allowed.</p>
</div>
```

#### `.rule-box` — Highlighted Grammar Rules

```html
<div class="rule-box rule-als">
  <div class="rule-label">ALS</div>
  <div class="rule-text">
    Use <strong>als</strong> for single past events.
  </div>
</div>

<div class="rule-box rule-wenn">
  <div class="rule-label">WENN</div>
  <div class="rule-text">
    Use <strong>wenn</strong> for repeated events or conditions.
  </div>
</div>
```

**Styling variants**: `.rule-als`, `.rule-wenn`, or custom theme-specific classes.

#### `.example` — Bilingual Example Sentences

```html
<div class="example">
  <div class="de">Als ich nach Hause kam, war es dunkel.</div>
  <div class="en">When I came home, it was dark.</div>
</div>
```

**With highlighting**:
```html
<div class="example">
  <div class="de">
    <span class="highlight-als">Als</span> ich Kind war, spielte ich Fußball.
  </div>
  <div class="en">When I was a child, I played soccer.</div>
</div>
```

#### `.tip` — Memory Aids and Helpful Hints

```html
<div class="tip">
  💡 Think of <strong>als</strong> as a photograph — one frozen moment.
</div>
```

#### `.compare-table` — Side-by-Side Comparisons

```html
<table class="compare-table">
  <tr>
    <th class="col-als">ALS Usage</th>
    <th class="col-wenn">WENN Usage</th>
  </tr>
  <tr>
    <td class="col-als">One-time past events</td>
    <td class="col-wenn">Repeated or future events</td>
  </tr>
  <tr>
    <td class="col-als">gestern (yesterday)</td>
    <td class="col-wenn">immer (always)</td>
  </tr>
</table>
```

#### `.section-sep` — Visual Separator

```html
<div class="section-sep"></div>
```

---

## Exercise Type Schemas

### Base Exercise Interface

```typescript
interface Exercise {
  type?: ExerciseType;     // Optional: defaults to "choice"
  sentence: string;        // The exercise sentence (may contain ___ blank)
  answer: string | string[]; // Correct answer(s)
  options?: string[];      // For choice/matching exercises
  explain: string;         // Pedagogical explanation
  instruction?: string;    // Optional German instruction
}

type ExerciseType = "choice" | "fill" | "match" | "truefalse" | "order";
```

---

### 1. Multiple Choice Exercise

**Type**: `"choice"` (default if omitted)

```typescript
interface ChoiceExercise extends Exercise {
  type?: "choice";
  sentence: string;         // Sentence with ___ blank marker
  answer: string;           // Correct choice
  options?: string[];       // Defaults to ["als", "wenn"] if omitted
  explain: string;
  instruction?: string;     // e.g., "Wählen Sie die richtige Antwort"
}
```

**Example**:
```javascript
{
  type: "choice",  // optional, can be omitted
  sentence: "___ ich gestern aufwachte, regnete es.",
  answer: "als",
  options: ["als", "wenn"],  // optional, defaults to these
  explain: "'Gestern' (yesterday) signals a specific single event.",
  instruction: "Kreuzen Sie an"  // optional
}
```

**Example with custom options**:
```javascript
{
  type: "choice",
  sentence: "Er ___ gestern im Park.",
  answer: "war",
  options: ["war", "ist", "hat"],
  explain: "Präteritum of 'sein' is 'war'."
}
```

---

### 2. Fill-in-the-Blank Exercise

**Type**: `"fill"`

```typescript
interface FillExercise extends Exercise {
  type: "fill";
  sentence: string;         // Sentence with ___ blank marker
  answer: string | string[]; // Correct answer(s) — can accept variations
  explain: string;
  instruction?: string;     // e.g., "Ergänzen Sie"
}
```

**Example (single answer)**:
```javascript
{
  type: "fill",
  sentence: "Als ich in Wien _____, besuchte ich das Museum.",
  answer: "war",
  explain: "The verb 'war' goes to the end of the als-clause."
}
```

**Example (multiple acceptable answers)**:
```javascript
{
  type: "fill",
  sentence: "Sie ___ mit dem Auto gefahren.",
  answer: ["ist", "hat"],  // Both "ist gefahren" and "hat gefahren" are acceptable
  explain: "Both auxiliaries work depending on context."
}
```

---

### 3. True/False Exercise

**Type**: `"truefalse"`

```typescript
interface TrueFalseExercise extends Exercise {
  type: "truefalse";
  sentence: string;         // Statement to evaluate
  answer: "richtig" | "falsch" | "true" | "false";
  explain: string;
  instruction?: string;     // e.g., "Richtig oder falsch?"
}
```

**Example**:
```javascript
{
  type: "truefalse",
  sentence: "Man benutzt 'als' für wiederholte Ereignisse in der Vergangenheit.",
  answer: "falsch",
  explain: "'Als' is for one-time past events, not repeated ones.",
  instruction: "Richtig oder falsch?"
}
```

---

### 4. Matching Exercise

**Type**: `"match"`

```typescript
interface MatchExercise extends Exercise {
  type: "match";
  sentence: string;         // Prompt or left-side item
  answer: string;           // Correct match
  options: string[];        // All available choices (including answer)
  explain: string;
  instruction?: string;     // e.g., "Ordnen Sie zu"
}
```

**Example**:
```javascript
{
  type: "match",
  sentence: "als",
  answer: "einmalige Ereignisse",
  options: ["einmalige Ereignisse", "wiederholte Ereignisse", "Bedingungen"],
  explain: "'Als' is used for one-time events.",
  instruction: "Ordnen Sie zu"
}
```

---

### 5. Ordering Exercise

**Type**: `"order"`

```typescript
interface OrderExercise extends Exercise {
  type: "order";
  sentence: string[];       // Array of words/phrases to order
  answer: string[];         // Correct order
  explain: string;
  instruction?: string;     // e.g., "Bringen Sie in die richtige Reihenfolge"
}
```

**Example**:
```javascript
{
  type: "order",
  sentence: ["war", "Als", "ich", "Kind"],
  answer: ["Als", "ich", "Kind", "war"],
  explain: "Subordinate clause word order: conjunction, subject, object, verb.",
  instruction: "Bringen Sie in die richtige Reihenfolge"
}
```

---

## Vocabulary/Reference Schema

For apps with browseable reference lists (verbs, vocabulary, phrases).

### Core Vocabulary Interface

```typescript
interface VocabItem {
  term: string;             // Primary term (German word/phrase)
  definition?: string;      // Meaning or translation
  example?: string;         // Example sentence
  level: CEFRLevel;         // CEFR level classification
  metadata?: {              // Optional additional data
    pos?: string;           // Part of speech: "noun" | "verb" | "adjective" | ...
    gender?: string;        // For nouns: "der" | "die" | "das"
    plural?: string;        // Plural form
    [key: string]: any;     // Extensible for app-specific needs
  };
}

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
```

---

### Verb Conjugation Schema

Specialized schema for strong/irregular verb apps:

```typescript
interface VerbItem {
  inf: string;              // Infinitive (e.g., "gehen")
  pres: string;             // 3rd person present (e.g., "geht")
  pret: string;             // Präteritum (e.g., "ging")
  perf: string;             // Perfekt with auxiliary (e.g., "ist gegangen")
  level: CEFRLevel;         // CEFR level
}
```

**Example**:
```javascript
{
  inf: "gehen",
  pres: "geht",
  pret: "ging",
  perf: "ist gegangen",
  level: "A1"
}
```

**Example with dual auxiliary**:
```javascript
{
  inf: "fahren",
  pres: "fährt",
  pret: "fuhr",
  perf: "hat/ist gefahren",  // Both auxiliaries depending on transitive/intransitive
  level: "A1"
}
```

---

### Noun Vocabulary Schema

```typescript
interface NounItem extends VocabItem {
  term: string;             // The noun itself (e.g., "Buch")
  definition: string;       // Translation (e.g., "book")
  level: CEFRLevel;
  metadata: {
    pos: "noun";
    gender: "der" | "die" | "das";
    plural?: string;        // e.g., "Bücher"
  };
}
```

**Example**:
```javascript
{
  term: "Buch",
  definition: "book",
  level: "A1",
  metadata: {
    pos: "noun",
    gender: "das",
    plural: "Bücher"
  }
}
```

---

### Phrase/Expression Schema

```typescript
interface PhraseItem extends VocabItem {
  term: string;             // German phrase (e.g., "Guten Appetit!")
  definition: string;       // English equivalent (e.g., "Enjoy your meal!")
  example?: string;         // Context example
  level: CEFRLevel;
  metadata?: {
    pos: "phrase" | "expression";
    context?: string;       // When to use it (e.g., "before eating")
  };
}
```

**Example**:
```javascript
{
  term: "Guten Appetit!",
  definition: "Enjoy your meal!",
  example: "Bevor wir essen, sagen wir immer 'Guten Appetit!'",
  level: "A1",
  metadata: {
    pos: "phrase",
    context: "before eating"
  }
}
```

---

## App State Schema

For tracking user progress, scores, and current position.

### Lesson-Based App State

```typescript
interface LessonAppState {
  currentIndex: number;     // Current lesson index (0-based)
  scores: {
    [lessonIndex: number]: {
      correct: number;
      total: number;
    };
  };
  userAnswers: {
    [lessonIndex: number]: {
      [exerciseIndex: number]: string | boolean;
    };
  };
}
```

**Example**:
```javascript
const state = {
  currentIndex: 2,          // Currently on Lesson 3 (0-indexed)
  scores: {
    0: { correct: 5, total: 6 },
    1: { correct: 6, total: 6 }
  },
  userAnswers: {
    0: { 0: "als", 1: "wenn", 2: "als" },
    1: { 0: "wenn", 1: "als" }
  }
};
```

---

### Multi-View App State

```typescript
interface MultiViewAppState {
  currentView: "browse" | "flashcards" | "quiz";
  activeLevel: CEFRLevel | "ALL";
  flashcardState: {
    currentIndex: number;
    isFlipped: boolean;
    order: number[];         // Shuffled indices
  };
  quizState: {
    quizType: "prateritum" | "perfekt" | "mixed";
    correct: number;
    incorrect: number;
    streak: number;
    currentQuestion: number;
  };
}
```

**Example**:
```javascript
const state = {
  currentView: "flashcards",
  activeLevel: "B1",
  flashcardState: {
    currentIndex: 12,
    isFlipped: false,
    order: [4, 12, 7, 23, 1, ...]  // Shuffled indices
  },
  quizState: {
    quizType: "prateritum",
    correct: 8,
    incorrect: 2,
    streak: 3,
    currentQuestion: 10
  }
};
```

---

## Character Encoding Best Practices

### HTML Entities for Special Characters

**Always use HTML entities in JavaScript strings** to avoid encoding issues:

```javascript
// ✅ CORRECT — Use HTML entities
content: `<p>Das &bdquo;als&ldquo; ist wichtig.</p>`

// ❌ WRONG — Smart quotes break in some editors
content: `<p>Das „als" ist wichtig.</p>`
```

### Common German Character Entities

```javascript
&auml;   // ä
&ouml;   // ö
&uuml;   // ü
&Auml;   // Ä
&Ouml;   // Ö
&Uuml;   // Ü
&szlig;  // ß
&bdquo;  // „ (German opening quote)
&ldquo;  // " (closing quote, same as English)
```

### Template Literals Are Safe

Template literals (backticks) handle apostrophes correctly:

```javascript
// ✅ Safe with backticks
content: `
  <p>It's important to use "als" correctly.</p>
`

// Can also use straight quotes
content: `<p>Das "als" ist wichtig.</p>`
```

---

## Validation Helper

### TypeScript Type Guards (for documentation)

```typescript
// Type guard functions (if using TypeScript)
function isChoiceExercise(ex: Exercise): ex is ChoiceExercise {
  return !ex.type || ex.type === "choice";
}

function isFillExercise(ex: Exercise): ex is FillExercise {
  return ex.type === "fill";
}

function isTrueFalseExercise(ex: Exercise): ex is TrueFalseExercise {
  return ex.type === "truefalse";
}
```

---

## Summary

### When to Use Each Schema

| **Content Type** | **Schema** | **Template** |
|------------------|------------|--------------|
| Grammar contrasts, rules, patterns | Lesson-Based Schema | lesson-based/template.html |
| Verb conjugations | Verb Conjugation Schema | multi-view/template.html |
| Vocabulary lists | Vocabulary/Reference Schema | multi-view/template.html |
| Mixed lesson + vocab | Both schemas | hybrid/template.html |

### Key Principles

1. **Keep data at top of `<script>` section** for easy editing
2. **Use `const` for data arrays** (immutable references)
3. **Normalize user input** (trim, lowercase) when comparing answers
4. **Accept answer variations** where grammatically valid (arrays)
5. **Use HTML entities** for special characters in JavaScript strings
6. **Provide explanatory feedback** — not just "correct/incorrect"

---

## Next Steps

- See [./exercise-types.md](./exercise-types.md) for complete HTML/CSS/JS implementation patterns
- See [./design-system.md](./design-system.md) for styling guidelines
- See [./getting-started.md](./getting-started.md) for creating your first app
