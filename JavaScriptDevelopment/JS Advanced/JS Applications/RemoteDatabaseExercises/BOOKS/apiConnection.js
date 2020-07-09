const remoteServer = 'https://test-b376e.firebaseio.com/books';

export function getAllBooks() {
    return fetch(`${remoteServer}.json`)
        .then(response => response.json());
}

export function createBook(book) {
    return fetch(`${remoteServer}.json`,
        {
            method: 'post',
            body: JSON.stringify(book),
            headers: { 'Content-type': 'application/json' }
        })
        .then(response => response.json());
}


export function deleteBook(book) {
    return fetch(`${remoteServer}/${book}.json`,
        {
            method: 'delete',
            body: JSON.stringify(book),
            headers: { 'Content-type': 'application/json' }
        })
        .then(response => response.json());
}

export function editBook(book) {
    console.log(book);
    return fetch(`${remoteServer}/${book.id}.json`,
        {
            method: 'post',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json',
                'X-HTTP-Method-Override': 'PATCH'
            }
        })
        .then(response => response.json());
}