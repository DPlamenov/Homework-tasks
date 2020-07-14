async function app() {
    const btnLoadTowns = document.querySelector('#btnLoadTowns');
    const ul = document.querySelector('#root ul');
    const townInput = document.querySelector('input');
    const divRoot = document.querySelector('#root');

    const townTemplate = await fetch('town.hbs')
        .then(response => response.text());
    const townListTemplate = await fetch('townList.hbs')
        .then(response => response.text());

    const town = Handlebars.compile(townTemplate);
    const townList = Handlebars.compile(townListTemplate);

    Handlebars.registerPartial('town', town);

    btnLoadTowns.addEventListener('click', function (e) {
        e.preventDefault();
        const towns = townInput.value.split(', ');
        divRoot.innerHTML = townList({ towns });
        townInput.value = '';
    });
}

app();