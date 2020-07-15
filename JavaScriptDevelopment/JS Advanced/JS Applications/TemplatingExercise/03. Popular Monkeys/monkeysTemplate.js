$(() => {
    const monkeyOutput = document.querySelector('div.root');
    const monkeyTemplate = document.querySelector('#monkey-template').innerHTML;
    const monkeysTemplate = document.querySelector('#monkeys').innerHTML;
    const monkeyRenderFunction = Handlebars.compile(monkeysTemplate);

    monkeyOutput.addEventListener('click', showInfo);

    Handlebars.registerPartial('monkey', monkeyTemplate);
    monkeyOutput.innerHTML = monkeyRenderFunction({ monkeys });
});

function showInfo(e) {
    const { target } = e;

    if (target.tagName === 'BUTTON') {
        const hiddenParagraph = target.parentNode.querySelector('p');
        hiddenParagraph.style.display = 'block';
    }
}

