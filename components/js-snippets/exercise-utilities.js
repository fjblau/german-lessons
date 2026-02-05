/**
 * Exercise Utilities
 * Helper functions for rendering and managing exercises
 */

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

/**
 * Render a single exercise based on its type
 * Delegates to type-specific render functions
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
 * Initialize all exercises after rendering
 * Call this after setting innerHTML
 */
function initializeExercises() {
  const exercises = currentLesson.exercises;
  
  exercises.forEach((ex, idx) => {
    // Ordering exercises need special initialization
    if (ex.type === 'order') {
      initOrderExercise(idx);
    }
  });
}

/**
 * Get exercise statistics
 */
function getExerciseStats() {
  const total = currentLesson.exercises.length;
  const answered = Object.keys(userAnswers).length;
  const correct = Object.values(userAnswers).filter(v => v === true).length;
  const incorrect = Object.values(userAnswers).filter(v => v === false).length;
  
  return {
    total,
    answered,
    correct,
    incorrect,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0
  };
}

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

/**
 * Reset all exercises in current lesson
 */
function resetAllExercises() {
  userAnswers = {};
  score = { correct: 0, incorrect: 0 };
  
  // Re-render current lesson
  renderLesson(currentLessonIndex);
}

/**
 * Export results as object
 */
function exportResults() {
  return {
    lesson: currentLesson.number,
    title: currentLesson.title,
    timestamp: new Date().toISOString(),
    stats: getExerciseStats(),
    answers: userAnswers
  };
}
