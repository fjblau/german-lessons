# Framework Overview

## Purpose

This framework provides a consistent, pedagogically-sound foundation for creating German B1-level learning applications. It's designed specifically for self-study in preparation for the ÖSD B1 test, following the Hueber 5+6 Workbook and Coursebook methodology.

---

## Design Philosophy

### Core Principles

**1. Single-File Architecture**
- Each app is a complete, standalone HTML file
- No build process, dependencies, or external servers required
- Works offline and is easily portable
- Simple to deploy (just open in a browser)

**2. Pedagogical First**
- Follows proven Hueber textbook methodology
- Progressive difficulty (easy → complex)
- Immediate feedback with explanations
- Bilingual support (German UI, English explanations when helpful)
- Multiple exercise types to maintain engagement

**3. Visual Consistency with Flexibility**
- Two distinct theme presets for different content types
- Consistent component patterns across all apps
- Customizable accent colors per topic
- Professional, distraction-free design

**4. Developer-Friendly**
- Clear separation of data and logic
- Well-commented code with customization points marked
- Copy-paste ready components
- No framework dependencies (vanilla JavaScript)

---

## Architecture Decisions

### Why Single-File HTML?

**Advantages:**
- ✅ Zero setup time - no npm, no build tools
- ✅ Complete portability - share a single file
- ✅ Works offline immediately
- ✅ Easy to understand and modify
- ✅ Fast loading (no bundle size concerns)

**Trade-offs:**
- ⚠️ Code reuse requires copy-paste
- ⚠️ Harder to maintain very large apps

**Mitigation Strategy:**
- Provide excellent templates with clear customization points
- Offer reusable CSS/JS snippets for common patterns
- Keep apps focused (one topic per app)
- Document best practices thoroughly

### Why No Framework (React/Vue/etc)?

**Reasoning:**
- B1-level topics are well-scoped (not massive applications)
- Vanilla JavaScript is sufficient for the interactions needed
- Adding frameworks introduces:
  - Build complexity
  - Learning curve for contributors
  - Dependency management overhead
  - Larger file sizes

**Approach:**
- Use modern ES6+ JavaScript features
- Provide clear patterns for state management
- Document common interactions thoroughly

### Data Organization

**Decision:** Keep data inline in HTML files (not external JSON)

**Why:**
- Maintains single-file architecture
- Easier to edit (all content in one place)
- No CORS issues
- Perfect for static deployment

**Convention:**
- Define all data at the top of `<script>` section
- Use `const` for data arrays
- Comment data structure clearly
- Provide examples for each schema type

---

## Framework Components

### 1. Templates

Two main templates for different learning objectives:

#### **Lesson-Based Template** (`templates/lesson-based/`)

**Best for:** Grammar topics, contrasts, rules, patterns

**Structure:**
- Sequential lessons with progress tracking
- Rich content sections (explanations, rules, examples, tips)
- Multiple exercise types per lesson
- Previous/Next navigation
- Final assessment with scoring

**Visual Theme:** Light/Elegant (cream/parchment palette)
- Reading-friendly for text-heavy content
- Warm, inviting feel
- Clear visual hierarchy

**Example Use Cases:**
- als vs. wenn
- Modalverben (sollen, müssen, dürfen)
- Konjunktiv II
- Passiv
- Adjektivdeklination

#### **Multi-View Template** (`templates/multi-view/`)

**Best for:** Vocabulary, verb forms, reference lists

**Structure:**
- Three-tab interface (Browse, Flashcards, Quiz)
- Browse: Sortable/filterable table
- Flashcards: Interactive cards with animations
- Quiz: Active recall with streak tracking
- CEFR level filtering (A1-C2)

**Visual Theme:** Dark/Modern (charcoal with neon accents)
- High contrast for focus
- Modern, energetic feel
- Optimized for drilling/memorization

**Example Use Cases:**
- German verb conjugations
- Trennbare/Untrennbare Verben
- Nomen-Verb-Verbindungen
- Themenspezifischer Wortschatz

### 2. Design System

**Location:** `docs/design-system.md`

Comprehensive specification including:
- Color palettes for both themes
- Typography system (font pairings, scales, hierarchy)
- Component patterns (buttons, cards, inputs, etc.)
- Animation standards
- Responsive breakpoints
- Accessibility guidelines

**CSS Snippets:** `components/css-snippets/`
- `color-palettes.css` - Theme color variables
- `typography.css` - Font definitions and scales
- `buttons.css` - Button variants and states
- `cards.css` - Card components
- `animations.css` - Reusable animations
- `exercises-*.css` - Exercise-specific styles

### 3. Data Schemas

**Location:** `docs/data-schemas.md`

Standardized data structures using TypeScript-style interfaces:
- **Lesson schema** - For sequential lesson-based content
- **Vocabulary schema** - For reference/vocabulary apps
- **Exercise schemas** - For all exercise types
- **State management** - For tracking progress/scores

Ensures consistency across all apps and makes customization straightforward.

### 4. Exercise Type Library

**Location:** `docs/exercise-types.md`

Complete specifications for 5 exercise types:
1. **Multiple Choice (Auswahl)** - Select from 2-4 options
2. **Fill-in-the-Blank (Lückentext)** - Text input with validation
3. **True/False (Richtig/Falsch)** - Binary choice
4. **Matching (Zuordnung)** - Connect pairs
5. **Ordering (Reihenfolge)** - Arrange in correct sequence

Each type includes:
- Authentic German instructions (Hueber-style)
- HTML structure template
- CSS styling patterns
- JavaScript interaction logic
- Data schema with examples
- Accessibility considerations

**JavaScript Snippets:** `components/js-snippets/`
- `exercise-choice.js` - Multiple choice handler
- `exercise-fill.js` - Fill-in-blank handler
- `exercise-truefalse.js` - True/false handler
- `exercise-match.js` - Matching handler
- `exercise-order.js` - Ordering handler
- `exercise-utilities.js` - Shared utilities

---

## Pedagogical Approach

### Learning Progression (Lesson-Based Apps)

Follows Hueber textbook methodology:

1. **Introduction** - Present core concept simply
2. **Rules & Patterns** - Explicit grammar rules in digestible chunks
3. **Examples** - Bilingual demonstration sentences
4. **Signal Words** - Teach recognition patterns
5. **Guided Practice** - Exercises with immediate feedback
6. **Edge Cases** - Address exceptions and nuances
7. **Final Assessment** - Mixed test of all concepts

### Content Building Blocks

Standardized HTML classes for rich content:
- `.explain` - General explanation sections
- `.rule-box` - Highlighted grammar rules
- `.example` - Bilingual example sentences
- `.tip` - Memory aids and metaphors
- `.compare-table` - Side-by-side comparisons
- `.section-sep` - Visual separators

### Feedback Philosophy

- **Immediate** - No "submit quiz" delay
- **Explanatory** - Not just "correct/incorrect"
- **Encouraging** - Positive reinforcement
- **Bilingual** - German for authenticity, English for clarity

---

## File Organization

```
german-learning-apps/
├── README.md                      # Project overview
├── .gitignore                     # Standard web project ignores
│
├── docs/                          # Framework documentation
│   ├── framework-overview.md      # This file
│   ├── getting-started.md         # Step-by-step creation guide
│   ├── design-system.md           # Visual design specification
│   ├── data-schemas.md            # Data structure standards
│   └── exercise-types.md          # Exercise type library
│
├── templates/                     # Starter templates
│   ├── lesson-based/
│   │   └── template.html          # Grammar/lesson template
│   ├── multi-view/
│   │   └── template.html          # Vocabulary/reference template
│   └── hybrid/                    # Future: combined approach
│
├── components/                    # Reusable code snippets
│   ├── css-snippets/              # CSS modules
│   │   ├── color-palettes.css
│   │   ├── typography.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── animations.css
│   │   └── exercises-*.css
│   │
│   └── js-snippets/               # JavaScript modules
│       ├── exercise-choice.js
│       ├── exercise-fill.js
│       ├── exercise-truefalse.js
│       ├── exercise-match.js
│       ├── exercise-order.js
│       └── exercise-utilities.js
│
├── examples/                      # Example apps
│   ├── als-vs-wenn.html
│   ├── german-verbs.html
│   └── [future apps]
│
└── assets/                        # Shared resources
    └── fonts/
```

---

## Naming Conventions

### File Names
- Lowercase with hyphens: `als-vs-wenn.html`
- Descriptive of topic: `adjektiv-deklination.html`
- Template files: `template.html`

### CSS Classes
- Lowercase with hyphens (BEM-inspired)
- Semantic names: `.lesson`, `.exercise`, `.rule-box`
- State classes: `.active`, `.correct`, `.incorrect`, `.completed`
- Theme-specific: `.rule-als`, `.col-wenn`

### JavaScript Variables
- camelCase for variables and functions
- Descriptive names: `currentLessonIndex`, `checkAnswer()`
- Constants in UPPERCASE: `const LESSONS = [...]`
- State objects: `state`, `scores`, `userAnswers`

### CSS Custom Properties
- Lowercase with hyphens
- Semantic naming: `--cream`, `--ink`, `--correct`
- Component-specific: `--btn-primary-bg`, `--card-shadow`

---

## Best Practices

### Content Guidelines

**Lesson Structure:**
- Keep lessons focused (one concept per lesson)
- 5-7 exercises per lesson is ideal
- Mix exercise types within lessons
- Always provide explanatory feedback
- Use memory aids and metaphors

**Exercise Design:**
- Start with clear examples before testing
- Provide 3-5 guided exercises with hints
- Mix difficulty gradually
- Include final test with 10-15 mixed exercises
- Use authentic German instructions (Hueber-style)

**Text & Language:**
- German UI for immersion
- English explanations when pedagogically helpful
- Use Hueber-style instructions: "Ergänzen Sie", "Kreuzen Sie an"
- Avoid English translations where learners should infer from context

### Technical Guidelines

**Character Encoding:**
- Always use UTF-8: `<meta charset="UTF-8">`
- Avoid smart quotes in JavaScript strings (", ", „, ")
- Use HTML entities for special quotes: `&bdquo;`, `&ldquo;`, `&rdquo;`
- Template literals (backticks) are safe for German text

**JavaScript:**
- Keep data at top of `<script>` for easy editing
- Use `const` for data arrays (immutable references)
- Descriptive function names: `answerExercise()`, `goToLesson()`
- Handle answer variations (normalize input: trim, lowercase)
- Comment customization points clearly

**CSS:**
- Use CSS custom properties for theming
- Mobile-first responsive approach
- Test at common breakpoints (320px, 768px, 1024px)
- Ensure sufficient color contrast (WCAG AA minimum)
- Smooth transitions for interactive elements

**Accessibility:**
- Semantic HTML elements
- Keyboard navigation support
- ARIA labels where appropriate
- Sufficient color contrast
- Focus indicators for interactive elements

---

## Common Pitfalls

### 1. Smart Quotes in JavaScript
**Problem:** Smart quotes (", ", „, ") break JavaScript strings  
**Solution:** Use straight quotes or HTML entities

```javascript
// ❌ WRONG - will cause syntax errors
const text = "Das ist „falsch"";

// ✅ CORRECT - use HTML entities
const text = "Das ist &bdquo;richtig&ldquo;";

// ✅ CORRECT - use template literals
const text = `Das ist "auch richtig"`;
```

### 2. Answer Variation Handling
**Problem:** Learners may write valid variations not in your answer key  
**Solution:** Normalize and allow common variations

```javascript
// ✅ GOOD - handle variations
function normalizeAnswer(str) {
  return str.trim().toLowerCase();
}

// Accept multiple correct answers
const correctAnswers = ["hat gefahren", "ist gefahren"];
const isCorrect = correctAnswers.some(ans => 
  normalizeAnswer(userInput) === normalizeAnswer(ans)
);
```

### 3. Forgetting Mobile Responsiveness
**Problem:** App looks great on desktop but breaks on mobile  
**Solution:** Test at multiple breakpoints

```css
/* Always include responsive styles */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  .exercise-options { flex-direction: column; }
}
```

### 4. Missing Customization Point Comments
**Problem:** Users don't know what to change in templates  
**Solution:** Mark every customization point

```html
<!-- CUSTOMIZATION POINT: Change the title to match your topic -->
<title>German B1 Learning App Template</title>
```

### 5. Inconsistent Data Schemas
**Problem:** Different apps use different data structures  
**Solution:** Follow documented schemas strictly

```javascript
// ✅ CORRECT - follows standard schema
const lesson = {
  number: "Lektion 1",
  title: "Die Grundregel",
  content: `...`,
  exercises: [...]
};
```

---

## Extending the Framework

### Adding New Exercise Types

1. **Design the exercise pattern**
   - Sketch HTML structure
   - Define data schema
   - Plan user interaction flow

2. **Implement the code**
   - Create HTML template
   - Write CSS styling
   - Build JavaScript handler
   - Test thoroughly

3. **Document thoroughly**
   - Add to `docs/exercise-types.md`
   - Include German instructions
   - Provide complete examples
   - Create reusable snippet in `components/js-snippets/`

4. **Update templates**
   - Add example to both templates
   - Mark as optional/advanced feature

### Creating a Custom Theme

1. **Define color palette**
   - Choose base colors
   - Define text colors (ensure contrast)
   - Select accent colors
   - Define feedback colors

2. **Update CSS custom properties**
   ```css
   :root {
     --bg-main: #...;
     --text-primary: #...;
     /* etc */
   }
   ```

3. **Test thoroughly**
   - Check all components
   - Verify readability
   - Test on mobile
   - Validate accessibility (contrast ratios)

4. **Document**
   - Add to `design-system.md`
   - Provide use case recommendations
   - Create snippet in `components/css-snippets/`

---

## Future Enhancements

Possible directions for framework evolution:

**Hybrid Template**
- Combine lesson-based and multi-view approaches
- Lessons with embedded flashcard/quiz modes
- More flexible for varied learning objectives

**Progress Persistence**
- localStorage to save progress between sessions
- Export/import study records
- Spaced repetition scheduling

**Audio Integration**
- Pronunciation examples
- Listening comprehension exercises
- Text-to-speech for vocabulary

**Advanced Exercise Types**
- Sentence transformation
- Drag-and-drop word ordering
- Audio-based exercises

**Accessibility Improvements**
- Screen reader optimization
- High-contrast mode
- Keyboard-only navigation improvements

---

## Success Metrics

The framework is successful when:

✅ A new German learning app can be created in **< 2 hours**  
✅ All apps maintain **visual and functional consistency**  
✅ Apps align with **Hueber B1 textbook pedagogy**  
✅ Documentation enables **newcomers to create apps independently**  
✅ Example apps demonstrate **best practices**  
✅ Code snippets are **copy-paste ready**  
✅ Repository is **well-organized and navigable**

---

## Getting Started

Ready to create your first app? See [Getting Started Guide](./getting-started.md) for step-by-step instructions.

## Additional Resources

- [Design System](./design-system.md) - Visual design specifications
- [Data Schemas](./data-schemas.md) - Data structure standards
- [Exercise Types](./exercise-types.md) - Complete exercise library
- [Example Apps](../examples/) - Working examples to learn from
