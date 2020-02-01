function solve(input) {
    let words = input.split(' ');
    let result = [];
    words = words.filter(e => e !== '');
    words.forEach(function (element) {
        let firstChar = element.charAt(0);
        let lastChar = element.charAt(element.length - 1);
        let numbers = Number(element.substring(1, element.length - 1));

        let positionFirstChar = firstChar.charAt(0).toLowerCase().charCodeAt(0) - 96;
        if (firstChar.charAt(0).toUpperCase() === firstChar.charAt(0)) {
            numbers /= positionFirstChar;
        } else {
            numbers *= positionFirstChar;
        }

        let positionLastChar = lastChar.charAt(0).toLowerCase().charCodeAt(0) - 96;
        if (lastChar.charAt(0).toUpperCase() === lastChar.charAt(0)) {
            numbers -= positionLastChar;
        } else {
            numbers += positionLastChar;
        }

        result.push(numbers);
    });
    let sum = result.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum.toFixed(2));
}