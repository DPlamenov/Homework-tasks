const backendlessUserUrl = 'https://api.backendless.com/A8C90F3F-AC4F-1E36-FFD5-580AFA50C600/A621851B-B774-418F-B02F-1D9299E8D56D/data/teams';

export function getAll() {
    return fetch(`${backendlessUserUrl}`)
        .then(response => response.json());
}

export function create(data, userToken) {
    return fetch(`${backendlessUserUrl}`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
}