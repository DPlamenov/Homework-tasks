const tableBody = document.querySelector('table tbody');
const createBookForm = document.querySelector('form');
const createBookButton = createBookForm.querySelector('button');
const editBookButton = createBookForm.querySelector('button:nth-of-type(2)');

let editBookHandler = null;
let deleteBookHandler = null;
let createBookHandler = null;

let editBookId = null;

export function emptyBooksContainer() {
    tableBody.innerHTML = '';
}

export function renderBook(book) {
    const bookTr = document.createElement('tr');
    bookTr.setAttribute('data-id', book.id);

    const bookNameTd = document.createElement('td');
    bookNameTd.textContent = book.title;

    const bookAuthorTd = document.createElement('td');
    bookAuthorTd.textContent = book.author;

    const bookIsbnTd = document.createElement('td');
    bookIsbnTd.textContent = book.isbn;

    const bookTagsTd = document.createElement('td');
    console.log(book);
    bookTagsTd.textContent = book.tags.join(', ');

    const bookButtonsTd = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        deleteBookHandler(book.id);
    });

    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        createBookButton.style.display = 'none';
        editBookButton.style.display = 'block';

        const inputElements = Array.from(createBookForm.querySelectorAll('input'));
        inputElements.forEach(e => {
            e.value = book[e.id];
            if (e.id === 'tags') {
                e.value = book[e.id].join(', ');
            }
        });
        editBookId = book.id;
    });

    bookButtonsTd.appendChild(editButton);
    bookButtonsTd.appendChild(deleteButton);

    bookTr.appendChild(bookNameTd);
    bookTr.appendChild(bookAuthorTd);
    bookTr.appendChild(bookIsbnTd);
    bookTr.appendChild(bookTagsTd);
    bookTr.appendChild(bookButtonsTd);

    tableBody.appendChild(bookTr);
}


createBookButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputElements = Array.from(createBookForm.querySelectorAll('input'));

    const data = inputElements.reduce((acc, current) => {
        if (current.id === 'tags') {
            acc[current.id] = current.value.split(', ');
        } else {
            acc[current.id] = current.value;
        }

        return acc;
    }, {});

    createBookHandler(data);

    emptyForm();
});


editBookButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputElements = Array.from(createBookForm.querySelectorAll('input'));

    const data = inputElements.reduce((acc, current) => {
        if (current.id === 'tags') {
            console.log(current.value);
            acc[current.id] = current.value.split(', ');
        } else {
            acc[current.id] = current.value;
        }
        return acc;
    }, {});

    data.id = editBookId;

    editBookHandler(data);

    emptyForm();
    editBookButton.style.display = 'none';
    createBookButton.style.display = 'block';
    editBookId = null;
});

export function init() {
    return {
        setEditBookHandler(handler) {
            editBookHandler = handler;
        },
        setDeleteBookHandler(handler) {
            deleteBookHandler = handler;
        },
        setCreateBookHandler(handler) {
            createBookHandler = handler;
        }
    };
}


function emptyForm() {
    Array.from(createBookForm.querySelectorAll('input'))
        .forEach(input => input.value = '');
}