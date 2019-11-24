function f(product, count) {
    function orders(product, count) {
        let result = 0;
        if (product === "coffee") {
            result = 1.50 * count;
        } else if (product === "water") {
            result = 1.00 * count;
        } else if (product === "coke") {
            result = 1.40 * count;
        } else if (product === "snacks") {
            result = 2.00 * count;
        }
        return result.toFixed(2);
    }

    let result = orders(product, count);
    console.log(result);
}