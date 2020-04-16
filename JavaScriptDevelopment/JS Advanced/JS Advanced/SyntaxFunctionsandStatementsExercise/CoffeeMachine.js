function solve(input) {
    let income = 0;
    input.forEach(function (element) {
        let data = element.split(', ');

        let coinsInserted = Number(data.shift());
        let type = data.shift(); //coffee or tea
        let milk = data.includes('milk');
        let sugar = Number(data.pop());
        let caffeine = false;
        if (type === 'coffee') {
            caffeine = data.shift() === 'caffeine';
        }

        let price = getPrice(type, milk, sugar, caffeine);
        if (coinsInserted >= price) {
            console.log(`You ordered ${type}. Price: $${price.toFixed(2)} Change: $${(coinsInserted - price).toFixed(2)}`);
            income += price;
        } else {
            console.log(`Not enough money for ${type}. Need $${(price - coinsInserted).toFixed(2)} more`)
        }
    });
    console.log(`Income report: $${income.toFixed(2)}`);

    function getPrice(type, milk, sugar, caffeine) {
        let price;
        if (type === 'coffee') {
            if (caffeine) {
                price = 0.8;
            } else {
                price = 0.9;
            }
        } else {
            price = 0.8;
        }

        if (milk) {
            price += Number((price * 0.1).toFixed(1));
        }
        if (sugar) {
            sugar = 1;
        }
        price += Number(sugar * 0.10);
        return price;
    }
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);