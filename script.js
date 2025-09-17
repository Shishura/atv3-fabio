
const jsConfetti = new JSConfetti();
document.addEventListener('DOMContentLoaded', () => {
    jsConfetti.addConfetti({
        emojis: ['🐺', '🐷'],
        emojiSize: 40,
        confettiNumber: 40,
    })
});

const emojiElements = document.querySelectorAll('.emoji');
emojiElements.forEach(el => {
    el.addEventListener('click', (event) => {
        const trimmedContent = el.textContent.trim();
        const isWolf = trimmedContent === '🐺';
        const isPig = trimmedContent === '🐷';

        let emojiToEmit = trimmedContent;
        const emojiSize = 80;
        const confettiNumber = 20;

        if (isWolf) emojiToEmit = '💥';
        else if (isPig) emojiToEmit = '🥓';

        jsConfetti.addConfettiAtPosition({
            emojis: [emojiToEmit],
            emojiSize: emojiSize,
            confettiNumber: confettiNumber,
            confettiDispatchPosition: {
                x: event.clientX,
                y: event.clientY
            }
        });

        if (isWolf || isPig) el.textContent = '🪦';
    });
});