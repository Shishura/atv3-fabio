
const jsConfetti = new JSConfetti();
document.addEventListener('DOMContentLoaded', () => {
    jsConfetti.addConfetti({
        emojis: ['🐺', '🐷'],
        emojiSize: 80,
        confettiNumber: 40,
    })
});

const emojiElements = document.querySelectorAll('.emoji');
emojiElements.forEach(el => {
    el.addEventListener('click', () => {
        jsConfetti.addConfetti({
            emojis: [el.textContent],
            emojiSize: 100,
            confettiNumber: 20,
        });
    });
});