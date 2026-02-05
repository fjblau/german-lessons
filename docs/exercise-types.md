# Exercise Type Library

This document provides complete specifications for all standard exercise types used in German learning apps. Each type includes HTML structure, CSS styling patterns, JavaScript logic, data schema, and examples.

---

## Table of Contents

1. [Multiple Choice (Auswahl)](#1-multiple-choice-auswahl)
2. [Fill-in-the-Blank (Lückentext)](#2-fill-in-the-blank-lückentext)
3. [True/False (Richtig/Falsch)](#3-truefalse-richtigfalsch)
4. [Matching (Zuordnung)](#4-matching-zuordnung)
5. [Ordering (Reihenfolge)](#5-ordering-reihenfolge)
6. [Implementation Utilities](#implementation-utilities)

---

## 1. Multiple Choice (Auswahl)

**German Instructions**: "Kreuzen Sie an" / "Wählen Sie die richtige Antwort" / "Was passt?"

**Use Cases**: 
- Grammar choices (als vs. wenn, haben vs. sein)
- Verb form selection
- Preposition selection
- Article selection (der/die/das)

### Data Schema

```javascript
{
  type: "choice",  // optional, can be omitted (default)
  sentence: "___ ich gestern aufwachte, regnete es.",
  answer: "als",
  options: ["als", "wenn"],  // optional, defaults to ["als", "wenn"]
  explain: "'Gestern' (yesterday) signals a specific single event.",
  instruction: "Kreuzen Sie an"  // optional
}
```

### HTML Structure

```html
<div class="exercise">
  <div class="exercise-instruction">Kreuzen Sie an</div>
  <div class="exercise-sentence">
    ___ ich gestern aufwachte, regnete es.
  </div>
  <div class="exercise-options">
    <button class="option-btn" data-value="als">als</button>
    <button class="option-btn" data-value="wenn">wenn</button>
  </div>
  <div class="exercise-feedback"></div>
</div>
```

### CSS Styling

```css
.exercise {
  background: var(--cream-dark);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.exercise-instruction {
  font-size: 0.85rem;
  color: var(--ink-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.exercise-sentence {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1rem;
}

.exercise-options {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.option-btn {
  background: var(--cream);
  border: 2px solid var(--ink-whisper);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.option-btn:hover:not(:disabled) {
  border-color: var(--ink-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.option-btn.selected {
  background: var(--ink);
  color: var(--cream);
  border-color: var(--ink);
}

.option-btn.correct {
  background: var(--correct);
  color: white;
  border-color: var(--correct);
}

.option-btn.incorrect {
  background: var(--incorrect);
  color: white;
  border-color: var(--incorrect);
}

.option-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.exercise-feedback {
  display: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 1rem;
}

.exercise-feedback.show {
  display: block;
}

.exercise-feedback.correct {
  background: var(--correct-bg);
  color: var(--correct);
  border-left: 4px solid var(--correct);
}

.exercise-feedback.incorrect {
  background: var(--incorrect-bg);
  color: var(--incorrect);
  border-left: 4px solid var(--incorrect);
}
```

### JavaScript Logic

```javascript
function handleChoiceExercise(exerciseIndex, selectedValue) {
  const ex = currentLesson.exercises[exerciseIndex];
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const buttons = exerciseEl.querySelectorAll('.option-btn');
  const feedbackEl = exerciseEl.querySelector('.exercise-feedback');
  
  const isCorrect = selectedValue === ex.answer;
  
  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);
  
  // Mark selected button
  buttons.forEach(btn => {
    if (btn.dataset.value === selectedValue) {
      btn.classList.add('selected');
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    // Show correct answer if user was wrong
    if (!isCorrect && btn.dataset.value === ex.answer) {
      btn.classList.add('correct');
    }
  });
  
  // Show feedback
  feedbackEl.textContent = isCorrect 
    ? `✓ Richtig! ${ex.explain}`
    : `✗ Leider falsch. Richtige Antwort: ${ex.answer}. ${ex.explain}`;
  feedbackEl.classList.add('show', isCorrect ? 'correct' : 'incorrect');
  
  // Track score
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}
```

### Complete Example

```javascript
// In lesson data
{
  number: "Lektion 1",
  title: "Als vs. Wenn",
  content: `<div class="explain"><h3>Basic Rule</h3></div>`,
  exercises: [
    {
      type: "choice",
      sentence: "___ ich gestern aufwachte, regnete es.",
      answer: "als",
      options: ["als", "wenn"],
      explain: "'Gestern' (yesterday) signals a specific single event."
    },
    {
      type: "choice",
      sentence: "Er ___ im Park spazieren.",
      answer: "geht",
      options: ["geht", "gehen", "gehst"],
      explain: "Third person singular uses 'geht'."
    }
  ]
}
```

---

## 2. Fill-in-the-Blank (Lückentext)

**German Instructions**: "Ergänzen Sie" / "Schreiben Sie die richtige Form"

**Use Cases**:
- Verb conjugation practice
- Preposition completion
- Free-form answers with validation

### Data Schema

```javascript
{
  type: "fill",
  sentence: "Als ich in Wien _____, besuchte ich das Museum.",
  answer: "war",  // single answer
  // OR
  answer: ["ist", "hat"],  // multiple acceptable answers
  explain: "The verb 'war' goes to the end of the als-clause.",
  instruction: "Ergänzen Sie"  // optional
}
```

### HTML Structure

```html
<div class="exercise">
  <div class="exercise-instruction">Ergänzen Sie</div>
  <div class="exercise-sentence">
    <span class="sentence-part">Als ich in Wien</span>
    <input type="text" class="fill-input" placeholder="___" />
    <span class="sentence-part">, besuchte ich das Museum.</span>
  </div>
  <button class="check-btn">Prüfen</button>
  <div class="exercise-feedback"></div>
</div>
```

### CSS Styling

```css
.exercise-sentence {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1rem;
}

.sentence-part {
  display: inline;
}

.fill-input {
  background: white;
  border: 2px solid var(--ink-whisper);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--ink);
  min-width: 120px;
  transition: border-color 0.2s ease;
}

.fill-input:focus {
  outline: none;
  border-color: var(--ink-light);
}

.fill-input:disabled {
  background: var(--cream-dark);
  cursor: not-allowed;
}

.fill-input.correct {
  border-color: var(--correct);
  background: var(--correct-bg);
}

.fill-input.incorrect {
  border-color: var(--incorrect);
  background: var(--incorrect-bg);
}

.check-btn {
  background: var(--ink);
  color: var(--cream);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.check-btn:hover:not(:disabled) {
  background: var(--ink-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.check-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### JavaScript Logic

```javascript
function handleFillExercise(exerciseIndex) {
  const ex = currentLesson.exercises[exerciseIndex];
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const inputEl = exerciseEl.querySelector('.fill-input');
  const buttonEl = exerciseEl.querySelector('.check-btn');
  const feedbackEl = exerciseEl.querySelector('.exercise-feedback');
  
  const userAnswer = inputEl.value.trim().toLowerCase();
  
  // Handle multiple acceptable answers
  const correctAnswers = Array.isArray(ex.answer) 
    ? ex.answer.map(a => a.toLowerCase())
    : [ex.answer.toLowerCase()];
  
  const isCorrect = correctAnswers.includes(userAnswer);
  
  // Disable input and button
  inputEl.disabled = true;
  buttonEl.disabled = true;
  
  // Mark input
  inputEl.classList.add(isCorrect ? 'correct' : 'incorrect');
  
  // Show feedback
  if (isCorrect) {
    feedbackEl.textContent = `✓ Richtig! ${ex.explain}`;
    feedbackEl.classList.add('show', 'correct');
  } else {
    const correctAnswer = Array.isArray(ex.answer) 
      ? ex.answer.join(' / ') 
      : ex.answer;
    feedbackEl.textContent = `✗ Leider falsch. Richtige Antwort: ${correctAnswer}. ${ex.explain}`;
    feedbackEl.classList.add('show', 'incorrect');
  }
  
  // Track score
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}
```

### Complete Example

```javascript
{
  number: "Lektion 2",
  title: "Verb Conjugation",
  content: `<div class="explain"><h3>Past Tense</h3></div>`,
  exercises: [
    {
      type: "fill",
      sentence: "Als ich in Wien _____, besuchte ich das Museum.",
      answer: "war",
      explain: "The verb 'war' (was) completes the past tense."
    },
    {
      type: "fill",
      sentence: "Sie _____ mit dem Auto gefahren.",
      answer: ["ist", "hat"],
      explain: "Both 'ist gefahren' and 'hat gefahren' are acceptable."
    }
  ]
}
```

---

## 3. True/False (Richtig/Falsch)

**German Instructions**: "Richtig oder falsch?" / "Stimmt das?"

**Use Cases**:
- Statement verification
- Grammar rule understanding
- Quick comprehension checks

### Data Schema

```javascript
{
  type: "truefalse",
  sentence: "Man benutzt 'als' für wiederholte Ereignisse in der Vergangenheit.",
  answer: "falsch",  // "richtig" | "falsch" | "true" | "false"
  explain: "'Als' is for one-time past events, not repeated ones.",
  instruction: "Richtig oder falsch?"  // optional
}
```

### HTML Structure

```html
<div class="exercise">
  <div class="exercise-instruction">Richtig oder falsch?</div>
  <div class="exercise-sentence">
    Man benutzt 'als' für wiederholte Ereignisse in der Vergangenheit.
  </div>
  <div class="exercise-options tf-options">
    <button class="option-btn tf-btn" data-value="richtig">
      <span class="tf-icon">✓</span>
      <span class="tf-label">Richtig</span>
    </button>
    <button class="option-btn tf-btn" data-value="falsch">
      <span class="tf-icon">✗</span>
      <span class="tf-label">Falsch</span>
    </button>
  </div>
  <div class="exercise-feedback"></div>
</div>
```

### CSS Styling

```css
.tf-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.tf-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  min-height: 60px;
}

.tf-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.tf-label {
  font-size: 1rem;
  font-weight: 600;
}

/* Specific colors for true/false */
.tf-btn[data-value="richtig"]:hover:not(:disabled) {
  background: var(--correct-bg);
  border-color: var(--correct);
}

.tf-btn[data-value="falsch"]:hover:not(:disabled) {
  background: var(--incorrect-bg);
  border-color: var(--incorrect);
}
```

### JavaScript Logic

```javascript
function handleTrueFalseExercise(exerciseIndex, selectedValue) {
  const ex = currentLesson.exercises[exerciseIndex];
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const buttons = exerciseEl.querySelectorAll('.tf-btn');
  const feedbackEl = exerciseEl.querySelector('.exercise-feedback');
  
  // Normalize answer (handle both German and English)
  const normalizedAnswer = ex.answer.toLowerCase();
  const normalizedSelected = selectedValue.toLowerCase();
  
  const answerMap = {
    'richtig': 'richtig',
    'falsch': 'falsch',
    'true': 'richtig',
    'false': 'falsch'
  };
  
  const correctAnswer = answerMap[normalizedAnswer] || normalizedAnswer;
  const userAnswer = answerMap[normalizedSelected] || normalizedSelected;
  
  const isCorrect = userAnswer === correctAnswer;
  
  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);
  
  // Mark buttons
  buttons.forEach(btn => {
    if (btn.dataset.value === selectedValue) {
      btn.classList.add('selected');
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    if (!isCorrect && answerMap[btn.dataset.value] === correctAnswer) {
      btn.classList.add('correct');
    }
  });
  
  // Show feedback
  feedbackEl.textContent = isCorrect 
    ? `✓ Richtig! ${ex.explain}`
    : `✗ Leider falsch. ${ex.explain}`;
  feedbackEl.classList.add('show', isCorrect ? 'correct' : 'incorrect');
  
  // Track score
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}
```

### Complete Example

```javascript
{
  number: "Lektion 3",
  title: "Understanding Als and Wenn",
  content: `<div class="explain"><h3>Test Your Understanding</h3></div>`,
  exercises: [
    {
      type: "truefalse",
      sentence: "Man benutzt 'als' für wiederholte Ereignisse in der Vergangenheit.",
      answer: "falsch",
      explain: "'Als' is for one-time past events. 'Wenn' is for repeated events."
    },
    {
      type: "truefalse",
      sentence: "'Wenn' kann man auch für zukünftige Ereignisse benutzen.",
      answer: "richtig",
      explain: "Correct! 'Wenn' works for future events: 'Wenn ich Zeit habe, komme ich.'"
    }
  ]
}
```

---

## 4. Matching (Zuordnung)

**German Instructions**: "Ordnen Sie zu" / "Verbinden Sie" / "Was passt zusammen?"

**Use Cases**:
- Matching terms to definitions
- Connecting signal words to grammar rules
- Pairing German phrases with English translations

### Data Schema

```javascript
{
  type: "match",
  sentence: "als",  // Left-side item (prompt)
  answer: "einmalige Ereignisse",  // Correct match
  options: [  // All available choices (including answer)
    "einmalige Ereignisse",
    "wiederholte Ereignisse",
    "Bedingungen"
  ],
  explain: "'Als' is used for one-time events.",
  instruction: "Ordnen Sie zu"  // optional
}
```

### HTML Structure

```html
<div class="exercise matching-exercise">
  <div class="exercise-instruction">Ordnen Sie zu</div>
  <div class="matching-container">
    <div class="match-left">
      <div class="match-item">als</div>
    </div>
    <div class="match-right">
      <button class="match-option" data-value="einmalige Ereignisse">
        einmalige Ereignisse
      </button>
      <button class="match-option" data-value="wiederholte Ereignisse">
        wiederholte Ereignisse
      </button>
      <button class="match-option" data-value="Bedingungen">
        Bedingungen
      </button>
    </div>
  </div>
  <div class="exercise-feedback"></div>
</div>
```

### CSS Styling

```css
.matching-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .matching-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.match-left {
  background: var(--cream);
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid var(--ink-whisper);
}

.match-item {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
  text-align: center;
  padding: 0.5rem;
}

.match-right {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.match-option {
  background: var(--cream);
  border: 2px solid var(--ink-whisper);
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-weight: 500;
}

.match-option:hover:not(:disabled) {
  border-color: var(--ink-light);
  transform: translateX(4px);
  box-shadow: var(--shadow);
}

.match-option.selected {
  background: var(--ink);
  color: var(--cream);
  border-color: var(--ink);
}

.match-option.correct {
  background: var(--correct);
  color: white;
  border-color: var(--correct);
}

.match-option.incorrect {
  background: var(--incorrect);
  color: white;
  border-color: var(--incorrect);
}

.match-option:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
```

### JavaScript Logic

```javascript
function handleMatchExercise(exerciseIndex, selectedValue) {
  const ex = currentLesson.exercises[exerciseIndex];
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const buttons = exerciseEl.querySelectorAll('.match-option');
  const feedbackEl = exerciseEl.querySelector('.exercise-feedback');
  
  const isCorrect = selectedValue === ex.answer;
  
  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);
  
  // Mark selected button
  buttons.forEach(btn => {
    if (btn.dataset.value === selectedValue) {
      btn.classList.add('selected');
      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    // Show correct answer if user was wrong
    if (!isCorrect && btn.dataset.value === ex.answer) {
      btn.classList.add('correct');
    }
  });
  
  // Show feedback
  feedbackEl.textContent = isCorrect 
    ? `✓ Richtig! ${ex.explain}`
    : `✗ Leider falsch. Richtige Zuordnung: ${ex.sentence} → ${ex.answer}. ${ex.explain}`;
  feedbackEl.classList.add('show', isCorrect ? 'correct' : 'incorrect');
  
  // Track score
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}
```

### Complete Example

```javascript
{
  number: "Lektion 4",
  title: "Signal Words Matching",
  content: `<div class="explain"><h3>Connect Each Word to Its Usage</h3></div>`,
  exercises: [
    {
      type: "match",
      sentence: "als",
      answer: "einmalige Ereignisse",
      options: [
        "einmalige Ereignisse",
        "wiederholte Ereignisse",
        "Bedingungen"
      ],
      explain: "'Als' is used for one-time events."
    },
    {
      type: "match",
      sentence: "gestern",
      answer: "Signalwort für ALS",
      options: [
        "Signalwort für ALS",
        "Signalwort für WENN",
        "Kann beides sein"
      ],
      explain: "'Gestern' indicates a specific time, so we use 'als'."
    }
  ]
}
```

---

## 5. Ordering (Reihenfolge)

**German Instructions**: "Bringen Sie in die richtige Reihenfolge" / "Ordnen Sie die Wörter"

**Use Cases**:
- Word order practice (Hauptsatz, Nebensatz)
- Sentence building
- Chronological ordering

### Data Schema

```javascript
{
  type: "order",
  sentence: ["war", "Als", "ich", "Kind"],  // Scrambled items
  answer: ["Als", "ich", "Kind", "war"],    // Correct order
  explain: "In the als-clause, the verb goes to the end.",
  instruction: "Bringen Sie in die richtige Reihenfolge"  // optional
}
```

### HTML Structure

```html
<div class="exercise ordering-exercise">
  <div class="exercise-instruction">Bringen Sie in die richtige Reihenfolge</div>
  <div class="order-hint">Klicken Sie die Wörter in der richtigen Reihenfolge an:</div>
  <div class="order-words">
    <button class="word-btn" data-word="war" data-index="0">war</button>
    <button class="word-btn" data-word="Als" data-index="1">Als</button>
    <button class="word-btn" data-word="ich" data-index="2">ich</button>
    <button class="word-btn" data-word="Kind" data-index="3">Kind</button>
  </div>
  <div class="order-result">
    <div class="result-label">Ihre Antwort:</div>
    <div class="result-sentence"></div>
  </div>
  <button class="check-btn" disabled>Prüfen</button>
  <button class="reset-btn">Zurücksetzen</button>
  <div class="exercise-feedback"></div>
</div>
```

### CSS Styling

```css
.order-hint {
  font-size: 0.9rem;
  color: var(--ink-light);
  margin-bottom: 1rem;
}

.order-words {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.word-btn {
  background: var(--cream);
  border: 2px solid var(--ink-whisper);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.word-btn:hover:not(:disabled):not(.selected) {
  border-color: var(--ink-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.word-btn.selected {
  background: var(--ink);
  color: var(--cream);
  border-color: var(--ink);
  opacity: 0.5;
  cursor: default;
}

.word-btn:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.order-result {
  background: var(--cream);
  border: 2px dashed var(--ink-whisper);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  min-height: 60px;
}

.result-label {
  font-size: 0.85rem;
  color: var(--ink-light);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.result-sentence {
  font-size: 1.1rem;
  color: var(--ink);
  min-height: 1.5rem;
  line-height: 1.5;
}

.result-sentence.correct-answer {
  background: var(--correct-bg);
  border: 2px solid var(--correct);
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.result-sentence.incorrect-answer {
  background: var(--incorrect-bg);
  border: 2px solid var(--incorrect);
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.reset-btn {
  background: transparent;
  color: var(--ink-light);
  border: 2px solid var(--ink-whisper);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 0.75rem;
}

.reset-btn:hover {
  border-color: var(--ink-light);
  color: var(--ink);
}
```

### JavaScript Logic

```javascript
// State for ordering exercise
let orderingState = {};

function initOrderExercise(exerciseIndex) {
  orderingState[exerciseIndex] = {
    selectedWords: [],
    isChecked: false
  };
  
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const wordBtns = exerciseEl.querySelectorAll('.word-btn');
  const resultEl = exerciseEl.querySelector('.result-sentence');
  const checkBtn = exerciseEl.querySelector('.check-btn');
  const resetBtn = exerciseEl.querySelector('.reset-btn');
  
  // Add click handlers to word buttons
  wordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (orderingState[exerciseIndex].isChecked) return;
      
      const word = btn.dataset.word;
      orderingState[exerciseIndex].selectedWords.push(word);
      btn.classList.add('selected');
      btn.disabled = true;
      
      // Update result display
      resultEl.textContent = orderingState[exerciseIndex].selectedWords.join(' ');
      
      // Enable check button when all words selected
      if (orderingState[exerciseIndex].selectedWords.length === wordBtns.length) {
        checkBtn.disabled = false;
      }
    });
  });
  
  // Reset button handler
  resetBtn.addEventListener('click', () => {
    if (orderingState[exerciseIndex].isChecked) return;
    
    orderingState[exerciseIndex].selectedWords = [];
    wordBtns.forEach(btn => {
      btn.classList.remove('selected');
      btn.disabled = false;
    });
    resultEl.textContent = '';
    checkBtn.disabled = true;
  });
  
  // Check button handler
  checkBtn.addEventListener('click', () => {
    handleOrderExercise(exerciseIndex);
  });
}

function handleOrderExercise(exerciseIndex) {
  const ex = currentLesson.exercises[exerciseIndex];
  const exerciseEl = document.querySelectorAll('.exercise')[exerciseIndex];
  const resultEl = exerciseEl.querySelector('.result-sentence');
  const feedbackEl = exerciseEl.querySelector('.exercise-feedback');
  const checkBtn = exerciseEl.querySelector('.check-btn');
  const resetBtn = exerciseEl.querySelector('.reset-btn');
  const wordBtns = exerciseEl.querySelectorAll('.word-btn');
  
  const userOrder = orderingState[exerciseIndex].selectedWords;
  const correctOrder = ex.answer;
  
  const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correctOrder);
  
  // Mark as checked
  orderingState[exerciseIndex].isChecked = true;
  
  // Disable buttons
  checkBtn.disabled = true;
  resetBtn.disabled = true;
  wordBtns.forEach(btn => btn.disabled = true);
  
  // Style result
  resultEl.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
  
  // Show feedback
  if (isCorrect) {
    feedbackEl.textContent = `✓ Richtig! ${ex.explain}`;
    feedbackEl.classList.add('show', 'correct');
  } else {
    feedbackEl.innerHTML = `✗ Leider falsch. Richtige Reihenfolge: <strong>${correctOrder.join(' ')}</strong>. ${ex.explain}`;
    feedbackEl.classList.add('show', 'incorrect');
  }
  
  // Track score
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}
```

### Complete Example

```javascript
{
  number: "Lektion 5",
  title: "Word Order in Als-Clauses",
  content: `<div class="explain"><h3>Build Correct Sentences</h3></div>`,
  exercises: [
    {
      type: "order",
      sentence: ["war", "Als", "ich", "Kind"],
      answer: ["Als", "ich", "Kind", "war"],
      explain: "In the als-clause, the verb 'war' goes to the end."
    },
    {
      type: "order",
      sentence: ["hat", "Sie", "angerufen", "mich", "gestern"],
      answer: ["Sie", "hat", "mich", "gestern", "angerufen"],
      explain: "In Hauptsatz: Subject, conjugated verb, objects, then past participle at the end."
    }
  ]
}
```

---

## Implementation Utilities

### Normalization Functions

```javascript
/**
 * Normalize user input for comparison
 */
function normalizeAnswer(input) {
  return input.trim().toLowerCase();
}

/**
 * Check if answer matches (handles multiple acceptable answers)
 */
function isAnswerCorrect(userAnswer, correctAnswer) {
  const normalized = normalizeAnswer(userAnswer);
  
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.some(ans => normalizeAnswer(ans) === normalized);
  }
  
  return normalizeAnswer(correctAnswer) === normalized;
}

/**
 * Shuffle array for randomizing options
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```

### Rendering Functions

```javascript
/**
 * Render a single exercise based on its type
 */
function renderExercise(exercise, exerciseIndex) {
  const type = exercise.type || 'choice';
  
  switch (type) {
    case 'choice':
      return renderChoiceExercise(exercise, exerciseIndex);
    case 'fill':
      return renderFillExercise(exercise, exerciseIndex);
    case 'truefalse':
      return renderTrueFalseExercise(exercise, exerciseIndex);
    case 'match':
      return renderMatchExercise(exercise, exerciseIndex);
    case 'order':
      return renderOrderExercise(exercise, exerciseIndex);
    default:
      console.error(`Unknown exercise type: ${type}`);
      return '';
  }
}

/**
 * Render multiple choice exercise
 */
function renderChoiceExercise(ex, idx) {
  const options = ex.options || ['als', 'wenn'];
  const instruction = ex.instruction || 'Kreuzen Sie an';
  
  return `
    <div class="exercise" data-exercise-index="${idx}">
      <div class="exercise-instruction">${instruction}</div>
      <div class="exercise-sentence">${ex.sentence}</div>
      <div class="exercise-options">
        ${options.map(opt => `
          <button class="option-btn" data-value="${opt}" 
                  onclick="handleChoiceExercise(${idx}, '${opt}')">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="exercise-feedback"></div>
    </div>
  `;
}

/**
 * Render fill-in-the-blank exercise
 */
function renderFillExercise(ex, idx) {
  const instruction = ex.instruction || 'Ergänzen Sie';
  const parts = ex.sentence.split('___');
  
  return `
    <div class="exercise" data-exercise-index="${idx}">
      <div class="exercise-instruction">${instruction}</div>
      <div class="exercise-sentence">
        ${parts.map((part, i) => `
          <span class="sentence-part">${part}</span>
          ${i < parts.length - 1 ? '<input type="text" class="fill-input" placeholder="___" />' : ''}
        `).join('')}
      </div>
      <button class="check-btn" onclick="handleFillExercise(${idx})">Prüfen</button>
      <div class="exercise-feedback"></div>
    </div>
  `;
}

/**
 * Render true/false exercise
 */
function renderTrueFalseExercise(ex, idx) {
  const instruction = ex.instruction || 'Richtig oder falsch?';
  
  return `
    <div class="exercise" data-exercise-index="${idx}">
      <div class="exercise-instruction">${instruction}</div>
      <div class="exercise-sentence">${ex.sentence}</div>
      <div class="exercise-options tf-options">
        <button class="option-btn tf-btn" data-value="richtig" 
                onclick="handleTrueFalseExercise(${idx}, 'richtig')">
          <span class="tf-icon">✓</span>
          <span class="tf-label">Richtig</span>
        </button>
        <button class="option-btn tf-btn" data-value="falsch" 
                onclick="handleTrueFalseExercise(${idx}, 'falsch')">
          <span class="tf-icon">✗</span>
          <span class="tf-label">Falsch</span>
        </button>
      </div>
      <div class="exercise-feedback"></div>
    </div>
  `;
}

/**
 * Render matching exercise
 */
function renderMatchExercise(ex, idx) {
  const instruction = ex.instruction || 'Ordnen Sie zu';
  
  return `
    <div class="exercise matching-exercise" data-exercise-index="${idx}">
      <div class="exercise-instruction">${instruction}</div>
      <div class="matching-container">
        <div class="match-left">
          <div class="match-item">${ex.sentence}</div>
        </div>
        <div class="match-right">
          ${ex.options.map(opt => `
            <button class="match-option" data-value="${opt}" 
                    onclick="handleMatchExercise(${idx}, '${opt}')">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="exercise-feedback"></div>
    </div>
  `;
}

/**
 * Render ordering exercise
 */
function renderOrderExercise(ex, idx) {
  const instruction = ex.instruction || 'Bringen Sie in die richtige Reihenfolge';
  const scrambled = shuffleArray(ex.sentence);
  
  return `
    <div class="exercise ordering-exercise" data-exercise-index="${idx}">
      <div class="exercise-instruction">${instruction}</div>
      <div class="order-hint">Klicken Sie die Wörter in der richtigen Reihenfolge an:</div>
      <div class="order-words">
        ${scrambled.map((word, i) => `
          <button class="word-btn" data-word="${word}" data-index="${i}">
            ${word}
          </button>
        `).join('')}
      </div>
      <div class="order-result">
        <div class="result-label">Ihre Antwort:</div>
        <div class="result-sentence"></div>
      </div>
      <button class="check-btn" disabled>Prüfen</button>
      <button class="reset-btn">Zurücksetzen</button>
      <div class="exercise-feedback"></div>
    </div>
  `;
}
```

### Keyboard Navigation

```javascript
/**
 * Add keyboard shortcuts for exercises
 */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Number keys for multiple choice (1-4)
    if (e.key >= '1' && e.key <= '4') {
      const currentExercises = document.querySelectorAll('.exercise');
      currentExercises.forEach(ex => {
        const buttons = ex.querySelectorAll('.option-btn:not(:disabled)');
        const index = parseInt(e.key) - 1;
        if (buttons[index]) {
          buttons[index].click();
        }
      });
    }
    
    // R for Richtig, F for Falsch in true/false
    if (e.key.toLowerCase() === 'r') {
      const tfButtons = document.querySelectorAll('.tf-btn[data-value="richtig"]:not(:disabled)');
      if (tfButtons.length > 0) tfButtons[0].click();
    }
    if (e.key.toLowerCase() === 'f') {
      const tfButtons = document.querySelectorAll('.tf-btn[data-value="falsch"]:not(:disabled)');
      if (tfButtons.length > 0) tfButtons[0].click();
    }
    
    // Enter to submit fill-in-the-blank
    if (e.key === 'Enter') {
      const checkBtns = document.querySelectorAll('.check-btn:not(:disabled)');
      if (checkBtns.length > 0) checkBtns[0].click();
    }
  });
}
```

---

## Best Practices

### Accessibility

- **Keyboard Navigation**: All exercises must be fully keyboard-accessible
- **ARIA Labels**: Use appropriate ARIA labels for screen readers
- **Focus States**: Clear focus indicators for all interactive elements
- **Color Contrast**: Ensure sufficient contrast ratios (WCAG AA minimum)

```html
<!-- Example with ARIA labels -->
<button class="option-btn" 
        data-value="als" 
        aria-label="Option: als"
        onclick="handleChoiceExercise(0, 'als')">
  als
</button>
```

### Performance

- **Avoid Re-rendering**: Don't rebuild entire exercise sets on each interaction
- **Event Delegation**: Use event delegation for large numbers of buttons
- **Debounce Input**: For fill-in-blank, consider debouncing validation

### Pedagogy

- **Immediate Feedback**: Always provide instant feedback
- **Explanatory Messages**: Don't just say "wrong" - explain why
- **Bilingual Support**: German instructions with English explanations when helpful
- **Progressive Difficulty**: Start simple, increase complexity gradually
- **Mix Exercise Types**: Use variety within lessons to maintain engagement

### UX Considerations

- **Mobile-First**: Ensure exercises work well on small screens
- **Touch-Friendly**: Buttons should be large enough for touch (min 44x44px)
- **Visual Feedback**: Use animations/transitions for state changes
- **Clear State**: Always show whether exercise is unanswered, answered, or checked
- **Undo Options**: Consider allowing reset before final submission (ordering exercise example)

---

## Quick Reference

| Exercise Type | German Instruction | Best For | Data Structure |
|--------------|-------------------|----------|----------------|
| **choice** | Kreuzen Sie an | Grammar choices, verb forms | `options` array |
| **fill** | Ergänzen Sie | Open answers, conjugation | Single/multiple `answer` |
| **truefalse** | Richtig oder falsch? | Comprehension checks | Binary `answer` |
| **match** | Ordnen Sie zu | Connecting concepts | `sentence` + `options` |
| **order** | Bringen Sie in die richtige Reihenfolge | Word order, sentence building | `sentence[]` + `answer[]` |

---

## Version History

- **v1.0** (2026-02-05): Initial release with 5 core exercise types
