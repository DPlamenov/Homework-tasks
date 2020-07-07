function attachEvents() {
    const loadButton = document.querySelector('aside > button');
    const addButton = document.querySelector('#addForm button');
    const allCatchesDiv = document.querySelector('#catches');

    loadButton.addEventListener('click', loadAll);
    addButton.addEventListener('click', addCatch);

    const createCatchAllInputs = Array.from(document.querySelectorAll('#addForm input'));

    const createCatchInputElements = {
        angler: createCatchAllInputs[0],
        weight: createCatchAllInputs[1],
        species: createCatchAllInputs[2],
        location: createCatchAllInputs[3],
        bait: createCatchAllInputs[4],
        captureTime: createCatchAllInputs[5],
    };

    //START API connection methods
    function getAllCatches() {
        return fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(response => response.json());
    }

    function createNewCatches(data) {
        return fetch('https://fisher-game.firebaseio.com/catches.json', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    function updateCatches(id, newData) {
        return fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
    }

    function deleteCatches(id) {
        return fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
            method: 'delete',
        });
    }

    //END API connection methods

    function loadAll() {
        allCatchesDiv.innerHTML = '';
        return getAllCatches()
            .then(renderCatches);
    }

    function addCatch() {
        const data = Object.entries(createCatchInputElements)
            .reduce(function (acc, current) {
                acc[current[0]] = current[1].value;
                return acc;
            }, {});

        Object.values(createCatchInputElements)
            .map(e => e.value = '');

        createNewCatches(data)
            .then(loadAll);
    }

    function renderCatches(catches) {
        Object.entries(catches)
            .forEach(function ([key, data]) {
                renderCatch(key, data);
            });
    }

    function renderCatch(key, data) {
        function getHorizontalLine() {
            return document.createElement('hr');
        }

        const catchElement = document.createElement('div');
        catchElement.classList.add('catch');
        catchElement.setAttribute('data-id', key);

        const anglerLabel = document.createElement('label');
        const weightLabel = document.createElement('label');
        const speciesLabel = document.createElement('label');
        const locationLabel = document.createElement('label');
        const baitLabel = document.createElement('label');
        const captureTimeLabel = document.createElement('label');

        anglerLabel.textContent = 'Angler';
        weightLabel.textContent = 'Weight';
        speciesLabel.textContent = 'Species';
        locationLabel.textContent = 'Location';
        baitLabel.textContent = 'Bait';
        captureTimeLabel.textContent = 'Capture Time';

        const anglerInput = document.createElement('input');
        const weightInput = document.createElement('input');
        const speciesInput = document.createElement('input');
        const locationInput = document.createElement('input');
        const baitInput = document.createElement('input');
        const captureTimeInput = document.createElement('input');

        anglerInput.type = 'text';
        weightInput.type = 'number';
        speciesInput.type = 'text';
        locationInput.type = 'text';
        baitInput.type = 'text';
        captureTimeInput.type = 'number';

        anglerInput.classList.add('angler');
        weightInput.classList.add('weight');
        speciesInput.classList.add('species');
        locationInput.classList.add('location');
        baitInput.classList.add('bait');
        captureTimeInput.classList.add('captureTime');

        const allInputs = [anglerInput, weightInput, speciesInput, locationInput, baitInput, captureTimeInput];
        allInputs.forEach(e => {
            e.setAttribute('value', data[e.className]);
        });

        catchElement.appendChild(anglerLabel);
        catchElement.appendChild(anglerInput);
        catchElement.appendChild(getHorizontalLine());
        catchElement.appendChild(weightLabel);
        catchElement.appendChild(weightInput);
        catchElement.appendChild(getHorizontalLine());
        catchElement.appendChild(speciesLabel);
        catchElement.appendChild(speciesInput);
        catchElement.appendChild(getHorizontalLine());
        catchElement.appendChild(locationLabel);
        catchElement.appendChild(locationInput);
        catchElement.appendChild(getHorizontalLine());
        catchElement.appendChild(baitLabel);
        catchElement.appendChild(baitInput);
        catchElement.appendChild(getHorizontalLine());
        catchElement.appendChild(captureTimeLabel);
        catchElement.appendChild(captureTimeInput);
        catchElement.appendChild(getHorizontalLine());

        const updateButton = document.createElement('button');
        updateButton.classList.add('update');
        updateButton.textContent = 'Update';
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';

        updateButton.addEventListener('click', function () {
            const data = allInputs.reduce(function (acc, current) {
                acc[current.className] = current.value;
                return acc;
            }, {});

            updateCatches(key, data)
                .then(loadAll);
        });

        deleteButton.addEventListener('click', function () {
            deleteCatches(key)
                .then(loadAll);
        });

        catchElement.appendChild(updateButton);
        catchElement.appendChild(deleteButton);
        allCatchesDiv.appendChild(catchElement);
    }
}

attachEvents();