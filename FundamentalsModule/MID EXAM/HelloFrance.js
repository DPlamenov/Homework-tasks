function solve(input) {
    let items = input.shift().split('|');
    let budget = input.map(Number)[0];

    let bought = [];
    let profit = 0;
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let name = items[i].split('->')[0];
        let price = Number(items[i].split('->')[1]);

        if ((name === 'Clothes' && price <= 50) || (name === 'Shoes' && price <= 35) || (name === 'Accessories' && price <= 20.50)) {
            if (price <= budget) {
                bought.push(price);
                budget -= price;
            }
        }
    }
    for (let i = 0; i < bought.length; i++) {
        let newPrice = Number(bought[i] * 1.4).toFixed(2);
        profit += newPrice - bought[i];
        bought[i] = newPrice;
        sum += Number(newPrice);
    }

    console.log(bought.join(' '));
    console.log('Profit: ' + profit.toFixed(2));
    if (budget + sum >= 150) {
        console.log('Hello, France!');
    }else{
        console.log('Time to go.');
    }
}