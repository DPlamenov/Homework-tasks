function solve() {
    let textToFormat = document.getElementById('input').innerText;
    let output = document.querySelector('#output');
    let sentences = textToFormat.split('.')
        .map(e => e.trim())
        .filter(e => e !== '')
        .map(e => e + '.');

    let countOfSentences = sentences.length;

    for (let i = 0; i < countOfSentences; i += 3) {
        let currentOutput = document.createElement('p');
        let currentSentences = sentences.slice(i, i + 3);

        currentOutput.innerText = currentSentences.join('. ');
        output.appendChild(currentOutput);
    }
}