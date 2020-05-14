function addItem() {
    let inputElement = document.querySelector('#newText');
    let listElement = document.querySelector('#items');

    let liElement = document.createElement('li');

    let anchor = document.createElement('a');

    anchor.setAttribute('href', "#");

    liElement.innerText = inputElement.value;
    liElement.appendChild(anchor);

    listElement.appendChild(liElement);
    anchor.textContent = '[Delete]';
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        let parent = target.parentNode;

        listElement.removeChild(parent);
    });
}