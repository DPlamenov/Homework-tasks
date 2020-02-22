function solve(numbers, specialNumbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === specialNumbers[0]) {
            let startIndex = Math.max(i - specialNumbers[1], 0);
            let endIndex = startIndex + 2 * specialNumbers[1];

            for (let j = startIndex; j <= endIndex; j++) {
                delete numbers[j];
            }
        }
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum); //12
}

solve([
        1, 1, 2, 1, 1,
        1, 2, 1, 1, 1
    ], [ 2, 1 ]


);
//1 2 9