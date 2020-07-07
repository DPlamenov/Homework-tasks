function attachEvents() {
    console.log('TODO...');
    const loadButton = document.querySelector('aside > button');
    const addButton = document.querySelector('#addForm button');
    const allCatchesDiv = document.querySelector('#catches');

    loadButton.addEventListener('click', function () {
        getAllCatches()
            .then(renderCatches);
    });


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

    function renderCatches(catches) {
        Object.entries(catches)
            .forEach(function ([key, data]) {
                console.log(key);
                console.log(data);
            });
    }
}

attachEvents();

