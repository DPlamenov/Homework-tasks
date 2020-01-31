function solve(string) {
    let lastChar = '';
    let array = [];
    for (let i = 0; i <= string.length; i++) {
        if (lastChar !== string[i]) {
            array.push(lastChar);
        }
        lastChar = string[i];
    }
    console.log(array.join(''));
}

solve('aaaaabbbbbcdddeeeedssaa');
