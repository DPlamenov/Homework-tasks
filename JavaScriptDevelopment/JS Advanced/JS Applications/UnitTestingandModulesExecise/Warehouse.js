class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {
            'Food': {},
            'Drink': {}
        };
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = '';

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts)
            .find(t => Object.keys(this.availableProducts[t])
                .includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

const { expect } = require('chai');


describe('Warehouse', function () {
    describe('constructor', function () {
        it('should return valid object', function () {
            let instance = new Warehouse(50);

            expect(instance)
                .to
                .deep
                .eq({
                    _capacity: 50,
                    availableProducts: {
                        'Food': {},
                        'Drink': {}
                    }
                });
        });

        it('should throw error with negative capacity', function () {
            expect(() => new Warehouse(-4))
                .to
                .throw('Invalid given warehouse space');
        });

        it('should throw error with zero capacity', function () {
            expect(() => new Warehouse(0))
                .to
                .throw('Invalid given warehouse space');
        });

        it('should throw error with non-number capacity', function () {
            expect(() => new Warehouse('a'))
                .to
                .throw('Invalid given warehouse space');
        });
    });

    describe('addProduct', function () {
        it('should return valid product object', function () {
            let instance = new Warehouse(5);
            let actual = instance.addProduct('Food', 'burger', 4);

            expect(actual)
                .to
                .eql({ burger: 4 });
        });

        it('should return valid product object when product is added twice', function () {
            let instance = new Warehouse(10);
            instance.addProduct('Food', 'burger', 1);
            let actual = instance.addProduct('Food', 'burger', 4);

            expect(actual)
                .to
                .eql({ burger: 5 });
        });

        it('should throw error if there is not place', function () {
            let instance = new Warehouse(4);
            instance.addProduct('Food', 'burger', 1);
            expect(() => instance.addProduct('Food', 'pizza', 4))
                .to
                .throw('');
        });
    });

    describe('OrderProducts', function () {
        it('should return correct result', function () {
            let instance = new Warehouse(40);
            instance.addProduct('Food', 'burger', 1);
            instance.addProduct('Food', 'burger', 2);
            instance.addProduct('Food', 'pizza', 5);
            instance.addProduct('Drink', 'coca-cola', 4);

            expect(instance.orderProducts('Food'))
                .to
                .eql({
                    pizza: 5,
                    burger: 3
                });
        });

        it('should return correct result', function () {
            let instance = new Warehouse(40);
            instance.addProduct('Food', 'burger', 1);
            instance.addProduct('Food', 'burger', 2);
            instance.addProduct('Food', 'pizza', 5);
            instance.addProduct('Drink', 'coca-cola', 4);
            instance.addProduct('Drink', 'water', 9);

            expect(instance.orderProducts('Drink'))
                .to
                .eql({
                    water: 9,
                    'coca-cola': 4
                });
        });
    });

    describe('OccupiedCapacity', function () {
        it('should return 6', function () {
            let instance = new Warehouse(40);
            instance.addProduct('Drink', 'water', 6);

            expect(instance.occupiedCapacity())
                .to
                .eq(6);
        });

        it('should return 11', function () {
            let instance = new Warehouse(40);
            instance.addProduct('Drink', 'water', 7);
            instance.addProduct('Drink', 'juice', 2);
            instance.addProduct('Food', 'spaghetti', 2);

            expect(instance.occupiedCapacity())
                .to
                .eq(11);
        });
    });

    describe('Revision', function () {
        it('should return: The warehouse is empty', function () {
            let instance = new Warehouse(11);
            let actual = instance.revision();
            let expected = 'The warehouse is empty';

            expect(actual)
                .to
                .eq(expected);
        });

        it('should return all products', function () {
            let instance = new Warehouse(11);

            instance.addProduct('Drink', 'water', 7);
            instance.addProduct('Drink', 'juice', 2);
            instance.addProduct('Food', 'spaghetti', 2);

            let actual = instance.revision();
            let expected = 'Product type - [Food]\n' +
                '- spaghetti 2\n' +
                'Product type - [Drink]\n' +
                '- water 7\n' +
                '- juice 2';

            expect(actual)
                .to
                .eq(expected);
        });

        it('should return all products', function () {
            let instance = new Warehouse(16);

            instance.addProduct('Drink', 'water', 6);
            instance.addProduct('Drink', 'juice', 4);
            instance.addProduct('Food', 'spaghetti', 3);
            instance.addProduct('Food', 'spaghetti', 1);

            let actual = instance.revision();
            let expected = 'Product type - [Food]\n' +
                '- spaghetti 4\n' +
                'Product type - [Drink]\n' +
                '- water 6\n' +
                '- juice 4';

            expect(actual)
                .to
                .eq(expected);
        });
    });

    describe('ScrapeAProduct', function () {
        it('should return "product" do not exist', function () {
            let instance = new Warehouse(16);
            let actual = () => instance.scrapeAProduct('juice', 2);
            let expected = 'juice do not exist';

            expect(actual)
                .to
                .throw(expected);
        });

        it('should reduce quantity of product', function () {
            let instance = new Warehouse(16);
            instance.addProduct('Drink', 'juice', 4);

            let actual = instance.scrapeAProduct('juice', 2);
            let expected = { juice: 2 };

            expect(actual)
                .to
                .eql(expected);
        });

        it('should reduce quantity of product', function () {
            let instance = new Warehouse(16);
            instance.addProduct('Drink', 'juice', 4);
            instance.scrapeAProduct('juice', 1);
            let actual = instance.scrapeAProduct('juice', 2);
            let expected = { juice: 1 };

            expect(actual)
                .to
                .eql(expected);
        });

        it('should reduce quantity of product', function () {
            let instance = new Warehouse(16);
            instance.addProduct('Drink', 'juice', 4);
            instance.addProduct('Drink', 'water', 5);
            instance.addProduct('Food', 'pizza', 3);
            instance.addProduct('Food', 'burger', 3);
            let actual = instance.scrapeAProduct('pizza', 1);
            let expected = {
                pizza: 2,
                burger: 3
            };

            expect(actual)
                .to
                .eql(expected);
        });

        it('should reset product', function () {
            let instance = new Warehouse(16);
            instance.addProduct('Drink', 'juice', 4);
            instance.addProduct('Drink', 'water', 5);
            instance.addProduct('Food', 'pizza', 3);
            let actual = instance.scrapeAProduct('water', 5);
            let expected = {
                water: 0,
                juice: 4
            };

            expect(actual)
                .to
                .eql(expected);
        });
    });
});