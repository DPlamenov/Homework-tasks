(async () => {
    const allCats = document.querySelector('#allCats');

    const templateCatsText = await fetch('cats.hbs')
        .then(response => response.text());
    Handlebars.registerPartial('cat', document.querySelector('#cat-template').innerHTML);
    const templateCats = Handlebars.compile(templateCatsText);

    renderCatTemplate();

    allCats.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            const hiddenDiv = button.parentNode.querySelector('div');
            toggleElement(hiddenDiv);
        }
    });

    function toggleElement(el) {
        if (el.style.display !== 'none') {
            el.style.display = 'none';
        } else {
            el.style.display = 'block';
        }
    }

    function renderCatTemplate() {
        allCats.innerHTML = templateCats({ cats });
    }
})();
