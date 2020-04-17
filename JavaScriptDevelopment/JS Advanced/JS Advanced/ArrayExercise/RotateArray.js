function solve(input) {
    let countOfRotation = Number(input.pop());

    for (let i = 0; i < countOfRotation; i++) {
        let currentLast = input.pop();
        input.unshift(currentLast);
    }

    console.log(input.join(' '));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']

);