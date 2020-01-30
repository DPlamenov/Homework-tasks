function solve(input) {
    let books = input.shift().split('&');
    let commands = input.slice();
    commands.forEach(function (element) {
        if (element.includes('Add Book')) {
            if (!books.includes(element.split(' | ')[1])) {
                books.unshift(element.split(' | ')[1]);
            }
        } else if (element.includes('Take Book')) {
            if (books.includes(element.split(' | ')[1])) {
                let indexOf = books.indexOf(element.split(' | ')[1]);
                books.splice(indexOf, 1);
            }
        } else if (element.includes('Swap Books')) {
            let book1 = element.split(' | ')[1];
            let book2 = element.split(' | ')[2];

            let index1 = books.indexOf(book1);
            let index2 = books.indexOf(book2);
            if (index1 !== -1 && index2 !== -1) {
                books[index1] = book2;
                books[index2] = book1;
            }
        } else if (element.includes('Insert Book')) {
            books.push(element.split(' | ')[1]);
        } else if (element.includes('Check Book')) {
            let index = Number(element.split(' | ')[1]);
            if (index >= 0 && index < books.length) {
                console.log(books[index]);
            }
        }
    });
    console.log(books.join(', '));
}


solve([
        'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
        'Add Book | The Odyssey',
        'Take Book | Don Quixote',
        "Insert Book | Alice's Adventures in Wonderland",
        'Check Book | 3',
        'Done',
        '',
        '',
        ''
    ]
);