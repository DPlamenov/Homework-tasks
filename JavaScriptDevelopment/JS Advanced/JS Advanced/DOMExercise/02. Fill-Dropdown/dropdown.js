function addItem() {
    let elements = {
        menu: document.querySelector('#menu'),
        text: document.querySelector('#newItemText'),
        value: document.querySelector('#newItemValue'),
    };

    let optionElement = document.createElement('option');
    optionElement.innerText = elements.text.value;
    optionElement.value = elements.value.value;

    elements.menu.appendChild(optionElement);
    elements.text.value = '';
    elements.value.value = '';
}