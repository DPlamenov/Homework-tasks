const remoteServer = 'https://test-b376e.firebaseio.com/students.json';

export function getAllStudents() {
    return fetch(remoteServer)
        .then(response => response.json())
        .then(response => {

            return Object.entries(response)
                .map(el => Object.assign(el[1], { uniqueId: el[0] }));
        });
}

export function createStudent(student) {
    return fetch(remoteServer, {
        method: 'post',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json());
}