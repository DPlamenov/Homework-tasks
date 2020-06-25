function solve(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    if (array.some(e => isNaN(Number(e)))) {
        return NaN;
    }

    return array.slice(startIndex, endIndex + 1)
        .reduce((acc, current) => {
            acc += current;
            return acc;
        }, 0);
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));