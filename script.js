
const jsConfetti = new JSConfetti();
document.addEventListener('DOMContentLoaded', () => {
    jsConfetti.addConfetti({
        emojis: ['🐺', '🐷'],
        emojiSize: 80,
        confettiNumber: 40,
    })
});