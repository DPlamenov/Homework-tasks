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
