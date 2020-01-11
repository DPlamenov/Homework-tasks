function solve(input) {
    let shops = input.shift().split(' ');
    let commands = input.slice();

    for (let element of commands) {
        if (element.includes('Include')) {
            let shop = element.split(' ')[1];
            shops.push(shop);
        } else if (element.includes('Visit')) {
            let firstOrLast = element.split(' ')[1];
            let numberOfShops = Number(element.split(' ')[2]);
            if (shops.length >= numberOfShops) {
                if (firstOrLast === "first") {
                    shops.splice(0, numberOfShops);
                } else {
                    let startIndex = shops.length - numberOfShops;
                    shops.splice(startIndex, numberOfShops);
                }
            }
        } else if (element.includes('Prefer')) {
            let shop1 = Number(element.split(' ')[1]);
            let shop2 = Number(element.split(' ')[2]);

            if (shop1 >= 0 && shop1 < shops.length && shop2 >= 0 && shop2 < shops.length) {
                let shop1Name = shops[shop1];
                let shop2Name = shops[shop2];
                shops.splice(shop1, 1, shop2Name);
                shops.splice(shop2, 1, shop1Name);
            }
        } else if (element.includes('Place')) {
            let shop = element.split(' ')[1];
            let shopIndex = Number(element.split(' ')[2]);
            if(shopIndex + 1 >= 0 && shopIndex + 1 < shops.length){
                shops.splice(shopIndex + 1, 0, shop);
            }

        }
    }
    console.log(`Shops left:`);
    console.log(shops.join(' '));
}

solve([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
]);