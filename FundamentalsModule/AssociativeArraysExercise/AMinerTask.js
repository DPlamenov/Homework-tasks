function solve(input) {
    let resources = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];
        quantity = Number(quantity);
        if (resources.has(resource)) {
            let current = resources.get(resource);
            resources.set(resource, current + quantity);
        } else {
            resources.set(resource, quantity);
        }
    }
    let keys = resources.keys();
    for(let key of keys){
        console.log(`${key} -> ${resources.get(key)}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);