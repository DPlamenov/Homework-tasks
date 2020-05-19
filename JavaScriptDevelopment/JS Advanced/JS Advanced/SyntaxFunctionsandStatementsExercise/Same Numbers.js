function solve(numbers) {
    let array = numbers
        .toString()
        .split('')
        .map(Number);
    let result = array.every(e => e === Number(array[0]))
        ? 'true'
        : 'false';

    let sum = array.reduce((a, b) => a + b, 0);

    console.log(result);
    console.log(sum);
}