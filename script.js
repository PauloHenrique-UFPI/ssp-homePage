const themes = document.querySelectorAll('.faq-theme');
const questionsContainers = document.querySelectorAll('.faq-questions');

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        const selectedTheme = theme.getAttribute('data-theme');

        themes.forEach(t => t.classList.remove('active'));
        questionsContainers.forEach(container => {
            container.style.display = 'none';
        });

        theme.classList.add('active');
        document.getElementById(selectedTheme).style.display = 'block';
    });
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.classList.remove('active');
        } else {
            answer.style.display = 'block';
            question.classList.add('active');
        }
    });
});
