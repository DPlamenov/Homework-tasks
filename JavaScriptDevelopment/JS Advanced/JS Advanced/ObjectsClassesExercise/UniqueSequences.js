function solve(input) {
    let arrays = new Map();
    input = input.map(e => JSON.parse(e));

    input.forEach(function (element) {
        let asString = element.sort((a, b) => b - a).join(', ');

        if (!arrays.has(asString)) {
            arrays.set(asString, element.length);
        }
    });


    Array.from(arrays.entries()).sort((a, b) => {
        return a[1] - b[1];
    }).forEach(function (element) {
        console.log(`[${element[0]}]`);
    });

}
