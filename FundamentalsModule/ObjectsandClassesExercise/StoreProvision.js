function solve(stock, ordered) {
    let obj = {};
    for (let i = 0; i < stock.length; i += 2) {
        obj[stock[i]] = Number(stock[i + 1]);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        if (obj.hasOwnProperty(ordered[i])) {
            obj[ordered[i]] += Number(ordered[i + 1]);
        } else {
            obj[ordered[i]] = Number(ordered[i + 1]);
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);