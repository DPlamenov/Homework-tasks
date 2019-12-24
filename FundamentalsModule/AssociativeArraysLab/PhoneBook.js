function solve(input) {
    let result = {};
    input.forEach(function (v) {
        result[v.split(' ')[0]] = v.split(' ')[1];
    });
    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}