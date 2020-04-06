function solve(...input) {
    let totalSum = input.map(e => e.length)
        .reduce((a, b) => a + b, 0);

    let averageSum = Math.floor(totalSum / 3);

    console.log(totalSum);
    console.log(averageSum);
}

solve('chocolate', 'ice cream', 'cake');