function solve(word, text) {
    word = word.toLowerCase();
    text = text.split(' ').map(x => x.toLowerCase());

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve('javascript', 'JavaScript is lang');