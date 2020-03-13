function solve(string) {
    let array = string.match(/[A-Z][a-z]*/g);
    console.log(array.join(', '));
}

function solve1(string = '') {
    let output = [];
    let currentWord = '';
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        currentWord += char;
        if (string.charAt(Number(i) + 1).toString()
            === string.charAt(Number(i) + 1).toString().toUpperCase()) {
            output.push(currentWord);
            currentWord = '';
        }
    }
    console.log(output.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve1('SplitMeIfYouCanHaHaYouCantOrYouCan');