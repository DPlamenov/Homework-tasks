/**
 *
 * @param {Array} input
 */
function solve(input) {
    let map = new Map();
    input.forEach(function (element) {
        let [town, product, salesAndPriceForOne] = element.split(' -> ');
        let [amountOfSales, priceForOneUnit] = salesAndPriceForOne.split(' : ').map(Number);

        let currentTotalPrice = amountOfSales * priceForOneUnit;

        if (!map.has(town)) {
            map.set(town, {});
        }

        let townObject = map.get(town);
        if (!townObject.hasOwnProperty(product)) {
            townObject[product] = 0;
        }
        townObject[product] += currentTotalPrice;

        map.set(town, townObject);
    });

    Array.from(map.entries()).forEach((el) => {
        console.log(`Town - ${el[0]}`);
        let objectEntries = Object.entries(el[1]);
        for(let [product, totalIncome] of objectEntries){
            console.log(`$$$${product} : ${totalIncome}`);
        }
    })
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);