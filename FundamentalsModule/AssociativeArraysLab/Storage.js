function solve(input) {
    const storage = new Map();
    input.forEach(function (element) {
        let [itemName, quantity] = element.split(' ');
        if (storage.has(itemName)) {
            let oldQuantity = storage.get(itemName);
            storage.set(itemName, oldQuantity + Number(quantity));
        } else {
            storage.set(itemName, Number(quantity));
        }
    });
    storage.forEach((v, key) => console.log(`${key} -> ${v}`));
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);