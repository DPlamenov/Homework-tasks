function solve(numbers, specialNumbers) {
    let counter = 0;
    while (numbers.indexOf(specialNumbers[0]) !== -1) {
        let index = numbers.indexOf(specialNumbers[0]);

        numbers.splice(numbers.indexOf(specialNumbers[0]), 1);
        numbers.splice(index, specialNumbers[1]);
        numbers.splice(index - specialNumbers
            [0], specialNumbers[1]);

        counter++;
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}