/**
 * Ordering Exercise Handler
 * German: "Reihenfolge" / "Bringen Sie in die richtige Reihenfolge"
 * 
 * Usage:
 * - Call initOrderExercise(index) on page load to set up event handlers
 * - User clicks words in sequence to build answer
 * - Requires: currentLesson.exercises, userAnswers, score objects
 */

// State management for ordering exercises
let orderingState = {};

/**
 * Initialize ordering exercise with event handlers
 */
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

/**
 * Handle ordering exercise submission
 */
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
  
  // Track score (only count first attempt)
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}

/**
 * Shuffle array utility
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Render ordering exercise HTML
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
