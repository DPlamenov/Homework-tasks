function solve() {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = Number(price);
        }
    }

    let addProductButtons = Array.from(document.getElementsByClassName('add-product'));
    let checkoutButton = document.querySelector('.checkout');
    addProductButtons.forEach(e => e.addEventListener('click', addProduct));
    checkoutButton.addEventListener('click', checkout);
    let allButtons = Array.from(document.querySelectorAll('button'));
    let storeCart = [];
    let textAreaElement = document.querySelector('textarea');

    function addProduct(e) {
        e.preventDefault();
        let target = e.target;
        let product = target.parentNode.parentNode;

        let productName = product.querySelector('.product-title').innerText;
        let productPrice = product.querySelector('.product-line-price').innerText;

        storeCart.push(new Product(productName, productPrice));
        textAreaElement.value += `Added ${productName} for ${productPrice} to the cart.\n`;
    }

    function checkout() {
        let sum = 0;
        let storeCartObj = storeCart.reduce((acc, current) => {
            if (!acc.hasOwnProperty(current.name)) {
                acc[current.name] = {price: current.price, counter: 0};
            }
            acc[current.name].counter++;
            sum += current.price;
            return acc;
        }, {});

        textAreaElement.value += `You bought ${Object.keys(storeCartObj).join(', ')} for ${sum.toFixed(2)}.`;
        allButtons.forEach(e => e.disabled = true);
    }
}