function solve(input) {
    let map = new Map();
    input.split(' ').forEach(function (value) {
        value = value.toLowerCase();
        if (map.has(value)) {
            let oldValue = map.get(value);
            map.set(value, oldValue + 1);
        } else {
            map.set(value, 1);
        }
    });
    let output = Array.from(map);
    let result = [];
    output.forEach(function (value) {
        if (value[1] % 2 !== 0 && value[1] !== -1) {
            result.push(value[0]);
        }
    });
    let r = result.filter(function (element, index,array) {
        return array.indexOf(element) === index;
    });
    console.log(r.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');