const server = 'https://api.backendless.com/A8C90F3F-AC4F-1E36-FFD5-580AFA50C600/A621851B-B774-418F-B02F-1D9299E8D56D/users';

export function register(username, password) {
    return fetch(`${server}/register`, {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: { 'Content-type': 'application/json' }
    })
        .then(response => response.json());
}

export function login(username, password) {
    return fetch(`${server}/login`, {
        method: 'post',
        body: JSON.stringify({
            login: username,
            password
        }),
        headers: { 'Content-type': 'application/json' }
    })
        .then(response => response.json());
}

export function logout(token) {
    return fetch(`${server}/logout`, {
        headers: {
            'user-token': token
        }
    });
}

export function changeTeamId(userId, token, teamId) {
    return fetch(`${server}/${userId}`, {
        method: 'put',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({ teamId })
    })
        .then(response => response.json());
}