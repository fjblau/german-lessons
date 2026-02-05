/**
 * Multiple Choice Exercise Handler
 * German: "Auswahl" / "Kreuzen Sie an"
 * 
 * Usage:
 * - Call handleChoiceExercise(index, selectedValue) when option is clicked
 * - Requires: currentLesson.exercises, userAnswers, score objects
 */

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
  
  // Track score (only count first attempt)
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}

/**
 * Render multiple choice exercise HTML
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
