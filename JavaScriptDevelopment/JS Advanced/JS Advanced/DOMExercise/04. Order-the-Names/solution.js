function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', addName);

    function addName() {
        let name = document.querySelector('input');
        let li = Array.from(document.querySelectorAll('li'))
            [name.value.toLowerCase().charCodeAt(0) - 97];

        let textContent = li.textContent.split(', ').filter(e => e !== '');
        textContent.push(name.value.slice(0, 1).toUpperCase().concat(name.value.slice(1).toLowerCase()));

        li.textContent = textContent.join(', ');
        name.value = '';
    }
}