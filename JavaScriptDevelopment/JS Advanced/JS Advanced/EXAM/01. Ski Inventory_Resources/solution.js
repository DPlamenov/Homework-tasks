function solve() {
    let buttonAdd = document.querySelector('#add-new button');
    let filterBtn = document.querySelector('.filter button');
    let buyAll = document.querySelector('#myProducts button');
    buttonAdd.addEventListener('click', add);
    filterBtn.addEventListener('click', filter);
    buyAll.addEventListener('click', buy);
    let products = [];

    function add(e) {
        e.preventDefault();
        let container = document.querySelector('#products ul');
        let product = Array.from(document.querySelectorAll('#add-new input'))
            .map(e => e.value);
        let [name, quantity, price] = product;
        let litItemProduct = document.createElement('li');
        let spanElement = document.createElement('span');
        spanElement.innerText = name;
        litItemProduct.appendChild(spanElement);
        let strongElement = document.createElement('strong');
        strongElement.innerText = `Available: ${quantity}`;
        litItemProduct.appendChild(strongElement);
        let divElement = document.createElement('div');
        let divStrong = document.createElement('strong');
        divStrong.innerText = Number(price)
            .toFixed(2);
        divElement.appendChild(divStrong);
        let button = document.createElement('button');
        button.innerText = 'Add to Client\'s List';
        divElement.appendChild(button);
        button.addEventListener('click', clientList);
        litItemProduct.appendChild(divElement);
        container.appendChild(litItemProduct);
        products.push(litItemProduct);
    }

    function filter() {
        let valueFilter = document.querySelector('input#filter');
        let container = document.querySelector('#products ul');

        Array.from(container.querySelectorAll('li'))
            .forEach(function (e) {
                e.style.display = 'none';
            });

        Array.from(products)
            .filter(e => e.querySelector('span')
                .innerText
                .toLowerCase()
                .includes(valueFilter.value.toLowerCase()))
            .map(e => e.style.display = 'block');

    }

    function clientList(e) {
        let myProducts = document.querySelector('#myProducts ul');

        let totalPrice = Array.from(document.querySelectorAll('h1'))[1];
        let target = e.target;
        let parent = target.parentNode.parentNode;

        let available = parent.querySelector('strong');

        let quantity = Number(available.textContent.split(': ')[1]);
        let price = Number(parent.querySelector('div > strong').textContent);

        let totalPriceBefore = Number(totalPrice.textContent.split(': ')[1]);
        totalPrice.textContent = `Total Price: ${(totalPriceBefore + price).toFixed(2)}`;


        let productName = document.createElement('li');
        productName.innerText = parent.querySelector('span').innerText;
        let strong = document.createElement('strong');
        strong.innerText = price.toFixed(2);
        productName.appendChild(strong);
        myProducts.appendChild(productName);

        if (quantity === 1) {
            parent.remove();
            products.find(e => e === parent)
                .remove();
        } else {
            available.innerText = `Available: ${quantity - 1}`;
        }

    }

    function buy() {
        let myProducts = document.querySelector('#myProducts ul');
        Array.from(myProducts.querySelectorAll('li'))
            .map(e => e.remove());
        let totalPrice = Array.from(document.querySelectorAll('h1'))[1];
        totalPrice.innerText = 'Total Price: 0.00';
    }
}
