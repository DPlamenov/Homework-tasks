class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let [productName, productPrice] = product;

        if (productPrice > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(productName);
        this.budget -= productPrice;
        return `You have successfully bought ${productName}!`;
    }

    recipes(recipe) {
        let products = recipe.productsList;
        let includesAll = true;
        products.forEach((e) => {
            if (!this.products.includes(e)) {
                includesAll = false;
            }
        });
        if (includesAll) {
            let o = {
                recipeName: recipe.recipeName,
                productsList: recipe.productsList
            };
            this.dishes.push(o);

            return `${o.recipeName} has been successfully cooked!`;
        }
        throw new Error(`We do not have this product`);
    }

    inviteGuests(name, dish) {
        let findDish = this.dishes.find(e => e.recipeName === dish);
        if (!findDish) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = [];

        Object.entries(this.guests).forEach (e => {
            let [guest, recipe] = e;
            let r = this.dishes.find(e => e.recipeName === recipe).productsList.join(', ');

            output.push(`${guest} will eat ${recipe}, which consists of ${r}`);
        });
        return output.join('\n');
    }
}