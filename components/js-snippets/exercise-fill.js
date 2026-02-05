/**
 * Fill-in-the-Blank Exercise Handler
 * German: "Lückentext" / "Ergänzen Sie"
 * 
 * Usage:
 * - Call handleFillExercise(index) when check button is clicked
 * - Supports single or multiple acceptable answers
 * - Requires: currentLesson.exercises, userAnswers, score objects
 */

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
  
  // Track score (only count first attempt)
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}

/**
 * Render fill-in-the-blank exercise HTML
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
