function f(numbers) {
    let sumOfEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
        if (numbers[i] % 2 === 0) {
            sumOfEven += numbers[i];
        }
    }
    console.log(sumOfEven);
}