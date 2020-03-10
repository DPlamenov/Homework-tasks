function solve(input) {
    let map = new Map();
    input.forEach(function (element) {
        let [direction, carNumber] = element.split(', ');
        map.set(carNumber, 0);
        if (direction === 'IN') {
            map.set(carNumber, 1);
        } else {
            map.set(carNumber, 0);
        }
    });
    let result = Array.from(map).filter((el) => el[1] === 1);
    result = result.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        console.log(element[0]);
    });
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);