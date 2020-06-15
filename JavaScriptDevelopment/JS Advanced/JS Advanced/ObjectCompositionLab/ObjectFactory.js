function solve(input) {
    let newObj = {};
    input = JSON.parse(input);
    input.forEach(e => {
        Object.entries(e).forEach(kvp => {
            newObj[kvp[0]] = kvp[1];
        })
    });

    return newObj;
}

solve(`[{"prop1": 1},{"prop2":2},{"prop3":3}]`);