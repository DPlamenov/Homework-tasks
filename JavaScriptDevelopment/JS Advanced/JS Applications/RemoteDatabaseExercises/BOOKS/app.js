import * as apiConnection from './apiConnection.js';
import * as render from './render.js';

render.init()
    .setDeleteBookHandler(deleteBookHandler);
render.init()
    .setEditBookHandler(editBookHandler);
render.init()
    .setCreateBookHandler(createBookHandler);

const load = (function load() {
    apiConnection.getAllBooks()
        .then(books => {
            render.emptyBooksContainer();
            Object.entries(books)
                .forEach(bookEntries => {
                    const book = bookEntries[1];
                    book.id = bookEntries[0];
                    render.renderBook(book);
                });
        });
    return load;
})();


function createBookHandler(book) {
    apiConnection.createBook(book)
        .then((newBook) => {
            const bookToCreate = Object.assign(book, { id: newBook.name });
            render.renderBook(bookToCreate);
        });
}

function deleteBookHandler(id) {
    apiConnection.deleteBook(id)
        .then(load);
}


function editBookHandler(book) {
    console.log(book);
    apiConnection.editBook(book)
        .then(load);
}