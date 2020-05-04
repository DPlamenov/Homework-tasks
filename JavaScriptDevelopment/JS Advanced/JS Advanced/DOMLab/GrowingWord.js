function growingWord() {
    let colors = ['blue', 'green', 'red'];
    let growingWord = document.querySelector('#exercise p');

    let lastSize = Number(growingWord.style.fontSize.toString().replace('px', '')) || 1;
    growingWord.style.fontSize = `${lastSize * 2}px`;
    let color = growingWord.style.color;
    let colorIndex = colors.indexOf(color);

    if (colorIndex === colors.length - 1) {
        colorIndex = -1;
    }
    growingWord.style.color = colors[colorIndex + 1];


    if (color === '') {
        growingWord.style.color = colors[0];
    }
}