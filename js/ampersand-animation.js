document.addEventListener('DOMContentLoaded', () => {
    const ampersandRow = document.getElementById('ampersand-row');
    const fonts = [
        'Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Trebuchet MS', 'Impact', 'Comic Sans MS'
    ];
    const fontStyles = fonts.map(font => `font-family: '${font}', sans-serif;`);
    const ampersands = ampersandRow.textContent.split('');

    function getRandomFontStyle() {
        const randomFontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];
        return randomFontStyle;
    }

    function changeFonts() {
        const updatedAmpersands = ampersands
            .map(() => getRandomFontStyle())
            .map((fontStyle, index) => `<span style="${fontStyle}">${ampersands[index]}</span>`);
        ampersandRow.innerHTML = updatedAmpersands.join('');
        ampersandRow.style.transition = 'font-family 0.5s ease-out';
    }

    setInterval(changeFonts, 1000);

    // Randomize font styles of ampersands on page load
    const ampersandSpans = ampersandRow.querySelectorAll('span');
    ampersandSpans.forEach(span => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        span.style.fontFamily = `'${randomFont}', sans-serif`;
    });
});
