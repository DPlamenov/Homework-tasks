function toggle() {
    let textElement = document.querySelector('#extra');
    let button = document.querySelector('.button');

    let isVisible = textElement.style.display === 'block';

    if (isVisible) {
        button.textContent = 'More';
        textElement.style.display = 'none';
    } else {
        button.textContent = 'Less';
        textElement.style.display = 'block';
    }
}