let currentLessonIndex = 0;

function showLessons(lessonGroup) {
    const lessons = document.querySelectorAll('.lesson');
    lessons.forEach((lesson, index) => {
        lesson.style.display = 'none'; // Hide all lessons
        if (index >= (lessonGroup - 1) * 5 && index < lessonGroup * 5) {
            lesson.style.display = 'block'; // Show current group of lessons
        }
    });
    currentLessonIndex = (lessonGroup - 1) * 5; // Set current lesson index to the first lesson in the selected group
    updateNavigationButtons();
}

function changeLesson(direction) {
    const lessons = document.querySelectorAll('.lesson');
    if (direction === 1 && currentLessonIndex < lessons.length - 1) {
        currentLessonIndex++;
    } else if (direction === -1 && currentLessonIndex > 0) {
        currentLessonIndex--;
    }
    lessons.forEach((lesson, index) => {
        lesson.style.display = (index === currentLessonIndex) ? 'block' : 'none'; // Show the current lesson
    });
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const lessons = document.querySelectorAll('.lesson');
    document.getElementById('prevBtn').style.display = currentLessonIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = currentLessonIndex === lessons.length - 1 ? 'none' : 'inline-block';
}

// Show the first group of lessons by default
showLessons(1);
