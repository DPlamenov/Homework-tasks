function solve(input) {
    let sumsPerDay = [];
    while (!input.every(el => el === 30)) {
        let forDay = 0;
        input.forEach(function (value, index, array) {
            let toAdd = 1;
            if (value + toAdd > 30) {
                toAdd = 0;
            }
            if (toAdd === 1) {
                forDay += 195;
            }

            array[index] = value + toAdd;
        });
        sumsPerDay.push(forDay);
    }
    console.log(sumsPerDay.join(', '));
    console.log(sumsPerDay.reduce(((a, b) => a + b), 0) * 1900 + " pesos");
}

solve([21, 25, 28]);