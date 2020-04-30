function solve(input) {
    let obj = {};

    let products = input
        .map(e => e.split(':').map(e => e.trim()));
    products.sort((a, b) => {
        let productA = a[0].toLowerCase();
        let productB = b[0].toLowerCase();

        return productA.localeCompare(productB);
    });

    obj = products.reduce((a, b) => {
        let firstLetter = b[0].charAt(0);

        if (!a.hasOwnProperty(firstLetter)) {
            a[firstLetter] = [];
        }
        a[firstLetter].push(...b);

        return a;
    }, {});

    Object.entries(obj).forEach(el => {
        let [letter, products] = el;
        console.log(letter);
        for (let i = 0; i < products.length; i += 2) {
            console.log(`  ${products[i]}: ${products[i + 1]}`);
        }
    });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);