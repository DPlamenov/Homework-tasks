class Kitchen {
    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget) {
        this.budget = budget;

    }

    loadProducts(productsArray) {
        productsArray.forEach((product) => {
            let tokens = product.split(' ');
            let productPrice = tokens.pop();
            let productQuantity = tokens.pop();
            let productName = tokens.join(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);

            if (productPrice <= this.budget) {
                this.budget -= productPrice;
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, products, price) {
        let currentMeal = {price: Number(price)};
        currentMeal.products = products;
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = currentMeal;
        // console.log(this.menu[meal]);
        return (`Great idea! Now with the ${meal} we have ${Object.values(this.menu).length} meals in the menu, other ideas?`);
    }

    showTheMenu() {
        if (Object.values(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        let output = [];
        Object.entries(this.menu).forEach(function (element) {
            output.push(`${element[0]} - $ ${element[1].price}`);
        });

        return output.join('\n') + '\n';
    }

    makeTheOrder(meal) {
        let findMeal = Object.entries(this.menu).find(e => e[0] === meal);
        if (!findMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        findMeal[1].products = findMeal[1].products.reduce((acc, current) => {
            let tokens = current.split(' ');
            let quantity = tokens.pop();
            let product = tokens.join(' ');
            acc[product] = Number(quantity);
            return acc;
        }, {});

        let needProductsHave = true;
        let targetProducts = Object.entries(this.productsInStock);
        Object.entries(findMeal[1].products).forEach((element) => {
            let [product, minQuantity] = element;
            if (targetProducts.find(e => e[0] === product) === undefined || targetProducts.find(e => e[0] === product)[1] < minQuantity) {
                needProductsHave = false;
            }
        });
        if (!needProductsHave) {
            return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`);
        }
        this.budget += findMeal[1].price;

        Object.entries(findMeal[1].products).forEach((e) => {
            this.productsInStock[e[0]] -= e[1];
        });
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${findMeal[1].price}.`;
    }
}

let kitchen = new Kitchen(1000);
console.log(
    kitchen.loadProducts(
        ['Flour 2.5 1', 'Oil 4.2 1', 'Yeast 1.5 1', 'Salt 0.1 1', 'Sugar 0.1 1', 'Tomato sauce 0.5 1', 'Pepperoni 1 1', 'Cheese 1.5 1']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('P4izza'));