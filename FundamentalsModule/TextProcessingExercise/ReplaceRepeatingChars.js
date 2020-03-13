function solve(string) {
    console.log(string.split('').filter((el, index, array) => {
        return el !== array[index + 1];
    }).join(''));
}

solve('aaaaabbbbbcdddeeeedssaa');
