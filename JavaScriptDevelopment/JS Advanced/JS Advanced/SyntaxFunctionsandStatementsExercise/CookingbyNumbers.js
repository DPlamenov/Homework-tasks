function solve(input) {
    let number = Number(input.shift());

    const functions = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8,
    };

    input.forEach(function (element) {
        let result = functions[element](number);
        console.log(result);
        number = result;
    });

}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);