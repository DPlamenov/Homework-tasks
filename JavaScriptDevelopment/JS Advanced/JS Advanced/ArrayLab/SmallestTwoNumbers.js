function solve(input) {
    let result = input.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(result);
}


solve([4, 50, 10, 50, 50, 144]);