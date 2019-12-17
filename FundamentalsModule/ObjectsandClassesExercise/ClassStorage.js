class Storage {
    capacity = 0;
    storage = [];
    totalCost = 0.0;

    constructor(capacity) {
        this.capacity = capacity;
    }
    addProduct = function (product) {
        this.totalCost += product.price * product.quantity;
        this.capacity -= product.quantity;
        this.storage.push(product);
    };
    getProducts = function () {
        let storage = this.storage;
        let arr = [];
        storage.forEach(function (v) {
            arr.push(JSON.stringify(v));
        });
        return arr.join('\n');
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

let output = storage.getProducts();
console.log(output);