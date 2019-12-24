function solve(input) {
    let map = new Map();
    input.shift().split(', ').forEach(function (element) {
        map.set(element, []);
    });
    input.forEach(function (element) {
        let [neighborhood, inhabitant] = element.split(' - ');
        if (map.has(neighborhood)) {
            let currentArray = map.get(neighborhood);
            let newArray = currentArray.concat([inhabitant]);
            map.set(neighborhood, newArray);
        }
    });
    let result = Array.from(map).sort(function (a, b) {
        return b[1].length - a[1].length;
    });
    result.forEach(function (element) {
        console.log(`${element[0]}: ${element[1].length}`);
        element[1].forEach(function (element) {
            console.log(`--${element}`);
        })
    })
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);