import * as api from './apiConnection.js';

const addPlayerButton = document.querySelector('#addPlayer');
const playerNameInput = document.querySelector('#addName');
const playerContainer = document.querySelector('#players');
const saveButton = document.querySelector('#save');
const reloadButton = document.querySelector('#reload');
const canvas = document.getElementById('canvas');

let currentPlayer = null;

(function attachEvents() {
    addPlayerButton.addEventListener('click', function () {
        const { value: name } = playerNameInput;

        api.createPlayer({
            name,
            money: 500,
            bullets: 6
        })
            .then(getAllPlayers)
            .then(renderAllPlayers)
            .then(_ => {
                playerNameInput.value = '';
            });
    });

    getAllPlayers()
        .then(renderAllPlayers);
})();

function getAllPlayers() {
    return api.getAllPlayers()
        .then(allPlayers => {
            return Object.entries(allPlayers)
                .map(e => ({
                    ...e[1],
                    uniqueId: e[0]
                }));
        });
}

function renderAllPlayers(players) {
    playerContainer.innerHTML = '';
    players.forEach(player => renderPlayer(player));
}

function renderPlayer(player) {
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    const playerNameP = document.createElement('p');
    const playerMoneyP = document.createElement('p');
    const playerBulletsP = document.createElement('p');

    playerNameP.textContent = `Name: ${player.name}`;
    playerMoneyP.textContent = `Money: ${player.money}`;
    playerBulletsP.textContent = `Bullets: ${player.bullets}`;

    const playButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    playButton.classList.add('play');
    deleteButton.classList.add('delete');

    playButton.textContent = 'Play';
    deleteButton.textContent = 'Delete';

    playButton.addEventListener('click', function () {
        playGame(player);
        currentPlayer = player;
    });

    deleteButton.addEventListener('click', function () {
        api.deletePlayer(player.uniqueId)
            .then(_ => {
                newPlayer.remove();
            });
    });

    newPlayer.appendChild(playerNameP);
    newPlayer.appendChild(playerMoneyP);
    newPlayer.appendChild(playerBulletsP);
    newPlayer.appendChild(playButton);
    newPlayer.appendChild(deleteButton);


    playerContainer.appendChild(newPlayer);
}

saveButton.addEventListener('click', function () {
    clearTimeout(canvas.intervalId);
    saveButton.style.display = 'none';
    reloadButton.style.display = 'none';
    canvas.style.display = 'none';

    api.updatePlayer(currentPlayer.uniqueId, currentPlayer)
        .then(getAllPlayers)
        .then(renderAllPlayers);

    currentPlayer = null;
});

reloadButton.addEventListener('click', function () {
    currentPlayer.bullets = 6;
    currentPlayer.money -= 60;
});

function playGame(player) {
    clearTimeout(canvas.intervalId);
    loadCanvas(player);
    canvas.style.display = 'block';
    saveButton.style.display = 'block';
    reloadButton.style.display = 'block';
}