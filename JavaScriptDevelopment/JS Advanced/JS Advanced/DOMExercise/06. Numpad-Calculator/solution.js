function solve() {
    let buttonsContainer = document.querySelector('.keys');
    buttonsContainer.addEventListener('click', pressKey);
    let expressionOutput = document.querySelector('#expressionOutput');
    document.querySelector('.clear').addEventListener('click', function () {
        expressionOutput.textContent = '';
        resultOutput.textContent = '';
    });

    let resultOutput = document.querySelector('#resultOutput');

    let operations = ['/', 'x', '+', '-'];

    let operation = {
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    function pressKey(e) {
        e.preventDefault();
        let target = e.target;

        if (target.innerText === '=') {
            let command = expressionOutput.textContent.split(' ').filter(e => e !== '');
            if (command.length !== 3 || !operations.includes(command[1])) {
                resultOutput.innerHTML = `NaN`;
            } else {
                let _operation = command[1].replace('x', '*');
                let result = operation[_operation](Number(command[0]),  Number(command[2]));
                console.log(result);
                resultOutput.innerHTML = result;
            }
        } else {
            if (operations.includes(target.innerText)) {
                expressionOutput.textContent += ` ${target.innerText} `;
            } else {
                expressionOutput.textContent += `${target.innerText}`;
            }
        }
    }
}