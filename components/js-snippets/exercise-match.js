/**
 * Matching Exercise Handler
 * German: "Zuordnung" / "Ordnen Sie zu"
 * 
 * Usage:
 * - Call handleMatchExercise(index, selectedValue) when option is clicked
 * - Matches left-side prompt to right-side options
 * - Requires: currentLesson.exercises, userAnswers, score objects
 */

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
  
  // Track score (only count first attempt)
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}

/**
 * Render matching exercise HTML
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
