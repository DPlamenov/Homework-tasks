function solve(array) {
    const calories = array.reduce((acc, current, i, array) => {
        if (i % 2 === 0) {
            acc[current] = null;
        } else {
            acc[array[i - 1]] = Number(current);
        }
        return acc;
    }, {});

    console.log(calories);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);