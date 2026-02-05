/**
 * True/False Exercise Handler
 * German: "Richtig/Falsch" / "Stimmt das?"
 * 
 * Usage:
 * - Call handleTrueFalseExercise(index, selectedValue) when button is clicked
 * - Handles both German (richtig/falsch) and English (true/false) answers
 * - Requires: currentLesson.exercises, userAnswers, score objects
 */

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
  
  // Track score (only count first attempt)
  if (!userAnswers[exerciseIndex]) {
    userAnswers[exerciseIndex] = isCorrect;
    if (isCorrect) score.correct++;
    else score.incorrect++;
  }
}

/**
 * Render true/false exercise HTML
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
