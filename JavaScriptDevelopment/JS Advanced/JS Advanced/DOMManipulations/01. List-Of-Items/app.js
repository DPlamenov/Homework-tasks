function addItem() {
    let itemInputElement = document.querySelector('#newItemText');
    let listElement = document.querySelector('#items');

    let listItemElement = document.createElement('li');
    listItemElement.innerText = itemInputElement.value;

    listElement.appendChild(listItemElement);
    itemInputElement.value = '';
}