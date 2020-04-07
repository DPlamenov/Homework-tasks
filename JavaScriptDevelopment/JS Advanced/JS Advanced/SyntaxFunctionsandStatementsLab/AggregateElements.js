function solve(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverseSum = input.map(e => 1 / e).reduce((a, b) => a + b, 0);
    let concat = input.join('');
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);