function solve(input) {
    let countOfRotation = Number(input.pop());
    countOfRotation %= input.length;
    for (let i = 0; i < countOfRotation; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}


