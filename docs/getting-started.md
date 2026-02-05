# Getting Started Guide

This guide will walk you through creating your first German B1 learning app using this framework. You'll have a working app in under 2 hours!

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Choosing Your Template](#choosing-your-template)
3. [Creating a Lesson-Based App](#creating-a-lesson-based-app)
4. [Creating a Multi-View App](#creating-a-multi-view-app)
5. [Testing Your App](#testing-your-app)
6. [Common Customizations](#common-customizations)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### What You Need

- **Text editor** (VS Code, Sublime, Notepad++, or any code editor)
- **Web browser** (Chrome, Firefox, Safari, or Edge)
- **Basic HTML/CSS/JavaScript knowledge** (helpful but not required)
- **Your learning content** (grammar rules, vocabulary, exercises)

### What You Don't Need

- ❌ No Node.js, npm, or build tools
- ❌ No server setup
- ❌ No framework knowledge (React, Vue, etc.)
- ❌ No command line experience

---

## Choosing Your Template

### Decision Tree

**Start here:** What type of content are you creating?

#### 📚 **Grammar Topic, Rules, or Contrasts?**
**→ Use Lesson-Based Template**

Examples:
- als vs. wenn
- Modalverben (sollen, müssen, dürfen)
- Konjunktiv II
- Passiv (active vs. passive voice)
- Adjektivdeklination
- Präpositionen mit Akkusativ/Dativ
- Relativsätze

**Characteristics:**
- Sequential learning progression
- Rich explanations and rules
- Multiple exercise types per lesson
- Final assessment/test
- Light/elegant visual theme

#### 📖 **Vocabulary, Verb Forms, or Reference List?**
**→ Use Multi-View Template**

Examples:
- German verb conjugations
- Trennbare/Untrennbare Verben
- Nomen-Verb-Verbindungen
- Thematic vocabulary (Arbeit, Gesundheit, Medien)
- Prepositions reference

**Characteristics:**
- Three-tab interface (Browse, Flashcards, Quiz)
- Sortable/filterable reference table
- Interactive flashcards
- Active recall quizzing
- Dark/modern visual theme

#### 🤔 **Not Sure?**

If your topic includes both rules AND vocabulary, consider:
1. **Create two separate apps** (one lesson-based, one multi-view)
2. **Start with lesson-based** (more flexible for mixed content)

---

## Creating a Lesson-Based App

### Step 1: Copy the Template

1. Navigate to `templates/lesson-based/`
2. Copy `template.html`
3. Rename it to match your topic (e.g., `modalverben.html`, `konjunktiv-ii.html`)
4. Save it in your working directory or `examples/` folder

### Step 2: Customize the Header

Open your new file in a text editor and find the `<head>` section:

```html
<!-- CUSTOMIZATION POINT: Change the title to match your topic -->
<title>German B1 Learning App Template</title>
```

**Change to:**
```html
<title>Modalverben — German B1</title>
```

Scroll down to the header section:

```html
<header>
  <h1>Your Topic Title</h1>
  <div class="subtitle">Brief description of the topic</div>
</header>
```

**Change to:**
```html
<header>
  <h1>Modalverben</h1>
  <div class="subtitle">müssen · sollen · dürfen · können · wollen · mögen</div>
</header>
```

### Step 3: Customize Theme Colors (Optional)

Find the CSS custom properties section:

```css
/* CUSTOMIZATION POINT: Semantic colors for your topic */
--accent-1-color: #c0582e;
--accent-1-bg: #fdf0ea;
--accent-1-border: #e8c4b2;

--accent-2-color: #2e6b8a;
--accent-2-bg: #eaf3f8;
--accent-2-border: #b2d0e0;
```

These colors are used for semantic highlighting (e.g., "als" vs. "wenn" in the example).

**For Modalverben, you might use:**
- Accent 1: For Modalverben (modal verbs)
- Accent 2: For Vollverben (full verbs)

Or keep the defaults if they work for your content.

### Step 4: Define Your Lessons Data

Scroll down to the `<script>` section and find:

```javascript
const LESSONS = [
  {
    number: "Lektion 1",
    title: "Example Lesson Title",
    content: `...`,
    exercises: [...]
  },
  // more lessons...
];
```

**Replace with your content:**

```javascript
const LESSONS = [
  {
    number: "Lektion 1",
    title: "Einführung — Was sind Modalverben?",
    content: `
      <div class="explain">
        <h3>Modal Verbs in German</h3>
        <p>Modal verbs (Modalverben) express ability, permission, necessity, or desire. They modify the meaning of the main verb.</p>
      </div>
      
      <div class="rule-box">
        <div class="rule-label">STRUKTUR</div>
        <div class="rule-text">
          <strong>Modalverb</strong> (conjugated) + <strong>Infinitiv</strong> (at the end)
        </div>
      </div>
      
      <div class="example">
        <div class="de">Ich <strong>muss</strong> heute arbeiten.</div>
        <div class="en">I have to work today.</div>
      </div>
      
      <div class="tip">
        💡 The modal verb is conjugated, but the main verb stays in infinitive form!
      </div>
    `,
    exercises: [
      {
        type: "choice",
        sentence: "Ich ___ Deutsch sprechen.",
        answer: "kann",
        options: ["kann", "muss", "will"],
        explain: "'Kann' expresses ability — I am able to speak German."
      },
      {
        type: "choice",
        sentence: "Du ___ heute nicht kommen.",
        answer: "darfst",
        options: ["darfst", "kannst", "musst"],
        explain: "'Darfst' with negation expresses prohibition — you're not allowed to come."
      },
      {
        type: "fill",
        sentence: "Er ___ (sollen) mehr lernen.",
        answer: "soll",
        explain: "'Soll' expresses recommendation or obligation — he should learn more."
      }
    ]
  },
  
  {
    number: "Lektion 2",
    title: "Müssen vs. Sollen",
    content: `
      <div class="explain">
        <h3>Two Ways to Express Obligation</h3>
        <p>Both express "should/must" but with different nuances.</p>
      </div>
      
      <table class="compare-table">
        <tr>
          <th class="col-accent-1">MÜSSEN</th>
          <th class="col-accent-2">SOLLEN</th>
        </tr>
        <tr>
          <td class="col-accent-1">Internal necessity, no choice</td>
          <td class="col-accent-2">External recommendation, advice</td>
        </tr>
        <tr>
          <td class="col-accent-1">"I must" (I have no choice)</td>
          <td class="col-accent-2">"I should" (someone advises me)</td>
        </tr>
      </table>
      
      <div class="example">
        <div class="de">Ich muss zum Arzt gehen. (Ich bin krank!)</div>
        <div class="en">I must go to the doctor. (I'm sick!)</div>
      </div>
      
      <div class="example">
        <div class="de">Ich soll zum Arzt gehen. (Der Lehrer sagt das.)</div>
        <div class="en">I should go to the doctor. (The teacher says so.)</div>
      </div>
    `,
    exercises: [
      {
        type: "choice",
        sentence: "Der Arzt sagt, ich ___ weniger Kaffee trinken.",
        answer: "soll",
        options: ["muss", "soll"],
        explain: "The doctor recommends it, so use 'soll'."
      },
      {
        type: "choice",
        sentence: "Ich ___ jetzt gehen, sonst verpasse ich den Zug!",
        answer: "muss",
        options: ["muss", "soll"],
        explain: "This is a necessity with no choice, so use 'muss'."
      }
    ]
  },
  
  // Add more lessons...
  
  {
    number: "Abschlusstest",
    title: "Final Test",
    content: `
      <div class="explain">
        <h3>Test Your Knowledge</h3>
        <p>Mixed exercises covering all Modalverben concepts.</p>
      </div>
    `,
    exercises: [
      // Add 10-15 mixed exercises here
    ]
  }
];
```

### Step 5: Content Building Blocks Reference

Use these HTML patterns in your `content` field:

#### Explanation Section
```html
<div class="explain">
  <h3>Section Heading</h3>
  <p>Explanation text here.</p>
</div>
```

#### Rule Box
```html
<div class="rule-box">
  <div class="rule-label">RULE NAME</div>
  <div class="rule-text">The rule explanation with <strong>emphasis</strong>.</div>
</div>
```

#### Themed Rule Box (using accent colors)
```html
<div class="rule-box rule-accent-1">
  <div class="rule-label">MÜSSEN</div>
  <div class="rule-text">Explanation here.</div>
</div>
```

#### Bilingual Example
```html
<div class="example">
  <div class="de">German sentence here.</div>
  <div class="en">English translation here.</div>
</div>
```

#### Tip / Memory Aid
```html
<div class="tip">
  💡 Helpful tip or memory trick here.
</div>
```

#### Comparison Table
```html
<table class="compare-table">
  <tr>
    <th class="col-accent-1">OPTION 1</th>
    <th class="col-accent-2">OPTION 2</th>
  </tr>
  <tr>
    <td class="col-accent-1">Explanation for option 1</td>
    <td class="col-accent-2">Explanation for option 2</td>
  </tr>
</table>
```

#### Section Separator
```html
<div class="section-sep"></div>
```

### Step 6: Exercise Types Reference

For detailed schemas, see [Exercise Types Documentation](./exercise-types.md).

#### Multiple Choice (Default)
```javascript
{
  type: "choice",  // optional, this is the default
  sentence: "___ ich gestern aufwachte, regnete es.",
  answer: "als",
  options: ["als", "wenn"],  // optional, defaults to ["als", "wenn"]
  explain: "Explanation why this is correct.",
  instruction: "Kreuzen Sie an"  // optional
}
```

#### Fill-in-the-Blank
```javascript
{
  type: "fill",
  sentence: "Ich ___ gestern im Kino.",
  answer: "war",
  explain: "Use 'war' (past tense of sein) for describing a state in the past.",
  instruction: "Ergänzen Sie"
}
```

#### True/False
```javascript
{
  type: "truefalse",
  sentence: "'Als' is used for repeated actions in the past.",
  answer: false,
  explain: "False. 'Als' is for single events. 'Wenn' is for repeated actions.",
  instruction: "Richtig oder falsch?"
}
```

#### Matching
```javascript
{
  type: "match",
  sentence: "Match the modal verbs to their meanings:",
  pairs: [
    { left: "können", right: "can, to be able to" },
    { left: "müssen", right: "must, to have to" },
    { left: "wollen", right: "to want to" }
  ],
  explain: "These are the core meanings of each modal verb.",
  instruction: "Ordnen Sie zu"
}
```

#### Ordering
```javascript
{
  type: "order",
  sentence: "Put these words in the correct order:",
  correctOrder: ["Ich", "muss", "heute", "arbeiten"],
  explain: "Modal verb in position 2, infinitive at the end.",
  instruction: "Bringen Sie in die richtige Reihenfolge"
}
```

### Step 7: Test Your App

1. **Save your file**
2. **Open it in a web browser** (double-click or drag into browser)
3. **Check each lesson:**
   - Does content display correctly?
   - Do exercises work?
   - Is feedback accurate and helpful?
4. **Test on mobile** (or use browser DevTools responsive mode)

### Step 8: Polish and Refine

- Add more lessons (aim for 5-7)
- Mix exercise types within lessons
- Ensure explanations are clear
- Test the final assessment
- Check for typos and formatting issues

---

## Creating a Multi-View App

### Step 1: Copy the Template

1. Navigate to `templates/multi-view/`
2. Copy `template.html`
3. Rename it (e.g., `trennbare-verben.html`, `nomen-verb-verbindungen.html`)
4. Save it in your working directory

### Step 2: Customize the Header

```html
<title>German B1 Learning App Template</title>
```

**Change to:**
```html
<title>Trennbare Verben — German B1</title>
```

And in the header section:

```html
<header>
  <h1>Trennbare Verben</h1>
  <div class="subtitle">Separable Verbs · CEFR A1-B2</div>
</header>
```

### Step 3: Define Your Data

Find the `<script>` section:

```javascript
const ITEMS = [
  {
    term: "Example word",
    translation: "English translation",
    example: "Example sentence",
    level: "B1",
    metadata: { /* additional fields */ }
  },
  // more items...
];
```

**Replace with your content:**

```javascript
const ITEMS = [
  {
    term: "aufstehen",
    translation: "to get up, to stand up",
    example: "Ich stehe jeden Tag um 7 Uhr auf.",
    level: "A1",
    metadata: {
      prefix: "auf",
      stem: "stehen",
      perfekt: "ist aufgestanden"
    }
  },
  {
    term: "anrufen",
    translation: "to call (on the phone)",
    example: "Ich rufe dich morgen an.",
    level: "A1",
    metadata: {
      prefix: "an",
      stem: "rufen",
      perfekt: "hat angerufen"
    }
  },
  {
    term: "fernsehen",
    translation: "to watch TV",
    example: "Wir sehen am Abend fern.",
    level: "A2",
    metadata: {
      prefix: "fern",
      stem: "sehen",
      perfekt: "hat ferngesehen"
    }
  },
  {
    term: "einkaufen",
    translation: "to shop, to go shopping",
    example: "Sie kauft im Supermarkt ein.",
    level: "A1",
    metadata: {
      prefix: "ein",
      stem: "kaufen",
      perfekt: "hat eingekauft"
    }
  },
  // Add 30-100 items for best experience
];
```

### Step 4: Customize Table Columns (Optional)

If your data has custom fields (like `prefix`, `perfekt`), you can customize the Browse table.

Find this section in the JavaScript:

```javascript
function renderBrowseView() {
  // Customize column headers and data here
}
```

See the template's inline comments for detailed customization instructions.

### Step 5: Customize Flashcard Display (Optional)

The flashcard view shows `term` on the front and `translation` + `example` on the back by default.

To customize, find:

```javascript
function renderFlashcard(index) {
  // Modify what appears on front/back of card
}
```

### Step 6: Test Your App

1. **Save and open in browser**
2. **Test all three tabs:**
   - **Browse:** Can you sort and filter?
   - **Flashcards:** Do cards flip correctly? Does keyboard navigation work (← →)?
   - **Quiz:** Does the quiz work? Is scoring accurate?
3. **Test CEFR filters** (A1, A2, B1, etc.)
4. **Test on mobile**

### Step 7: Add More Data

- Aim for at least 30 items (50-100 is ideal)
- Ensure CEFR levels are accurate
- Include helpful example sentences
- Add relevant metadata fields

---

## Testing Your App

### Browser Testing

**Recommended browsers:**
- ✅ Chrome/Edge (Chromium-based)
- ✅ Firefox
- ✅ Safari

**Test checklist:**
- [ ] App loads without errors (check browser console: F12)
- [ ] All exercises function correctly
- [ ] Feedback messages appear
- [ ] Scoring calculates accurately
- [ ] Navigation works (buttons, keyboard shortcuts)
- [ ] Animations are smooth

### Mobile Testing

**Option 1: Real device**
- Transfer file to your phone
- Open in mobile browser

**Option 2: Browser DevTools**
- Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test at: 375px (mobile), 768px (tablet), 1024px (desktop)

**Mobile checklist:**
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (not too small)
- [ ] Layout doesn't break
- [ ] Exercises work with touch

### Content Testing

- [ ] All German text displays correctly (ä, ö, ü, ß)
- [ ] Example sentences are accurate
- [ ] Explanations are clear and helpful
- [ ] Grammar rules are correct
- [ ] No typos or errors

---

## Common Customizations

### Changing Fonts

Find the Google Fonts import in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**To change fonts:**
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Copy the new `<link>` tag
4. Update CSS variables:

```css
--font-serif: 'YourSerifFont', Georgia, serif;
--font-sans: 'YourSansFont', -apple-system, sans-serif;
```

### Changing Theme Colors

Find `:root` in the `<style>` section:

```css
:root {
  --cream: #faf6f0;        /* Change main background */
  --ink: #2c2420;          /* Change main text color */
  --correct: #4a7c59;      /* Change correct answer color */
  /* etc. */
}
```

**Color tips:**
- Use a [color palette generator](https://coolors.co/)
- Ensure sufficient contrast (use [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/))
- Test in both light and dark environments

### Adding Keyboard Shortcuts

Already included in templates:
- **Lesson-based:** `←` previous lesson, `→` next lesson
- **Multi-view:** `←` previous flashcard, `→` next flashcard, `Space` flip card

**To add custom shortcuts:**

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'r') {
    // Reset quiz
    resetQuiz();
  }
  if (e.key === 'h') {
    // Show hint
    showHint();
  }
});
```

### Adding Progress Persistence

To save progress between sessions:

```javascript
// Save progress to localStorage
function saveProgress() {
  const progress = {
    currentLesson: state.currentIndex,
    scores: state.scores,
    completedLessons: state.completedLessons
  };
  localStorage.setItem('myAppProgress', JSON.stringify(progress));
}

// Load progress on page load
function loadProgress() {
  const saved = localStorage.getItem('myAppProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    state.currentIndex = progress.currentLesson;
    state.scores = progress.scores;
    state.completedLessons = progress.completedLessons;
  }
}

// Call loadProgress() when app initializes
loadProgress();

// Call saveProgress() after completing each lesson
```

---

## Troubleshooting

### App doesn't load / blank page

**Check:**
1. Open browser console (F12) to see errors
2. Ensure file encoding is UTF-8
3. Check for JavaScript syntax errors (missing commas, brackets)

**Common issues:**
- Smart quotes in JavaScript strings (use straight quotes)
- Missing comma in data array
- Unclosed HTML tags in `content` field

### Exercises don't work

**Check:**
1. Browser console for errors
2. Exercise data schema matches type:
   - `choice`: needs `answer` and optional `options`
   - `fill`: needs `answer`
   - `truefalse`: needs `answer` (true/false)
   - `match`: needs `pairs` array
   - `order`: needs `correctOrder` array

### German characters display incorrectly

**Fix:**
```html
<meta charset="UTF-8">
```

**Ensure in `<head>` section. Save file as UTF-8 encoding in your editor.**

### Answers not accepting correct input

**For fill-in exercises, normalize answers:**

```javascript
// In the exercise handler, trim and lowercase user input
const userAnswer = input.value.trim().toLowerCase();
const correctAnswer = exercise.answer.toLowerCase();

if (userAnswer === correctAnswer) {
  // Correct!
}
```

### Layout breaks on mobile

**Check:**
1. Responsive CSS is present (look for `@media` queries)
2. Test at exact breakpoint (e.g., 768px)
3. Ensure no fixed widths that are too large

**Quick fix for text overflow:**
```css
.exercise-sentence {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
```

### Progress dots don't match lesson count

**Check:**
```javascript
// Ensure this function generates the right number of dots
function renderProgress() {
  const container = document.querySelector('.progress-dots');
  container.innerHTML = '';
  
  LESSONS.forEach((_, index) => {  // Should loop through all lessons
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    // ...
  });
}
```

---

## Next Steps

### After Creating Your First App

1. **Share it for feedback**
   - Send to study partners
   - Ask for usability feedback
   - Refine based on input

2. **Create more apps**
   - Tackle another B1 topic
   - Get faster with practice
   - Build a complete study suite

3. **Organize your apps**
   - Keep them in the `examples/` folder
   - Use consistent naming
   - Consider creating an index page linking to all apps

4. **Contribute improvements**
   - Found a better design pattern?
   - Created a new exercise type?
   - Consider sharing back to the framework

### Learning Resources

**Framework documentation:**
- [Framework Overview](./framework-overview.md) - Architecture and decisions
- [Design System](./design-system.md) - Visual design specifications
- [Data Schemas](./data-schemas.md) - Data structure standards
- [Exercise Types](./exercise-types.md) - Complete exercise library

**German B1 resources:**
- Hueber B1 Workbook and Coursebook (primary)
- [ÖSD B1 Exam Information](https://www.osd.at/)
- [Goethe Institut B1](https://www.goethe.de/)

**Web development:**
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JavaScript reference
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [Coolors](https://coolors.co/) - Color palette generator

---

## Quick Reference Card

### Template Choice
- **Grammar, rules, contrasts** → Lesson-Based Template
- **Vocabulary, verbs, reference** → Multi-View Template

### Essential Customization Points
1. `<title>` - App title
2. `<h1>` and `.subtitle` - Header text
3. `LESSONS` or `ITEMS` - Your content data
4. `:root` CSS variables - Theme colors (optional)

### Lesson Data Schema
```javascript
{
  number: "Lektion 1",
  title: "Lesson title",
  content: `<div class="explain">...</div>`,
  exercises: [{ sentence, answer, explain, ... }]
}
```

### Testing Checklist
- ✅ Loads without errors
- ✅ Exercises work
- ✅ Feedback appears
- ✅ Mobile responsive
- ✅ German characters display

### Need Help?
- Check [Troubleshooting](#troubleshooting) section
- Review [Exercise Types](./exercise-types.md) for schemas
- Examine example apps in `examples/` folder
- Read inline comments in template files

---

**Ready to start? Pick a template and create your first app!** 🚀
