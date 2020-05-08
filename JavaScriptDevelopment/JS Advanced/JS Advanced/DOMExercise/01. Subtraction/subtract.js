function subtract() {
    let elements = {
        fNumberElement: document.querySelector('#firstNumber'),
        sNumberElement: document.querySelector('#secondNumber'),
        resultBoxElement: document.querySelector('#result')
    };

    elements.resultBoxElement.textContent = (Number(elements.fNumberElement.value) - Number(elements.sNumberElement.value)).toString();
}