const remoteServer = 'https://test-b376e.firebaseio.com/players';

export function getAllPlayers() {
    return fetch(`${remoteServer}.json`)
        .then(response => response.json());
}

export function createPlayer(player) {
    return fetch(`${remoteServer}.json`, {
        method: 'post',
        body: JSON.stringify(player),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json());
}

export function updatePlayer(playerId, player) {
    return fetch(`${remoteServer}/${playerId}.json`, {
        method: 'put',
        body: JSON.stringify(player),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json());
}

export function deletePlayer(playerId) {
    return fetch(`${remoteServer}/${playerId}.json`, {
        method: 'delete'
    })
        .then(response => response.json());
}