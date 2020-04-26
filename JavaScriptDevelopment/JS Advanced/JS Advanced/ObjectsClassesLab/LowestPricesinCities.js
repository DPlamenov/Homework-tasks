function solve(input) {
    const map = new Map();

    for (let element of input) {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);
        if (!map.has(productName)) {
            map.set(productName, new Map());
        }

        map.get(productName).set(townName, productPrice);

    }
    Array.from(map.entries()).forEach((el) => {
        // console.log(el);
        let lowest = [...el[1]].reduce((a, b) => {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        });
        console.log(`${el[0]} -> ${lowest[1]} (${lowest[0]})`);
    });
}