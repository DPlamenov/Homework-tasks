function solve(text, word) {
    let times = 0;
    let words = text.split(' ');
    for (let element of words) {
        if (element === word) {
            times++;
        }
    }
    console.log(times);
}

solve("This is a word and it also is a sentence",
    "is"
);