function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', convert);

    let optionBinary = document.createElement('option');
    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.textContent = 'Hexadecimal';
    optionHexadecimal.value = 'hexadecimal';

    let selectTo = document.querySelector('#selectMenuTo');
    selectTo.appendChild(optionBinary);
    selectTo.appendChild(optionHexadecimal);

    function convert(e) {
        e.preventDefault();
        let selectElement = document.querySelector('#selectMenuTo')
            .value;
        let from = document.querySelector('#input').value;
        let output = document.querySelector('#result');

        let result;
        if (selectElement === 'binary') {
            result = Number(from).toString(2);
        } else if (selectElement === 'hexadecimal') {
            result = Number(from).toString(16).toUpperCase();
        }

        output.value = result;
    }
}