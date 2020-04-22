function solve(input) {
    let countOfRotation = Number(input.pop());
    for (let i = 0; i < countOfRotation % 100; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}



solve([4, 2, 5, 5, 1, 5, 1, 5, 1324]);