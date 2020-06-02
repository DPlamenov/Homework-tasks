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

    function pressKey(e) {
        e.preventDefault();
        let target = e.target;

        if (target.innerText === '=') {
            let isValid = expressionOutput.textContent.split(' ').filter(e => e !== '');
            if (isValid.length !== 3 || !operations.includes(isValid[1])) {
                resultOutput.innerHTML = `NaN`;
            } else {
                resultOutput.innerHTML = eval(`${expressionOutput.textContent.replace('x', '*')}`);
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