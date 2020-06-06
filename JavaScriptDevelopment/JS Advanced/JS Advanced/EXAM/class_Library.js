class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes.hasOwnProperty(type)) {
            throw new Error(`The type ${type} is invalid`);
        }

        let subscriber = this.subscribers.find(e => e.name === name);

        if (subscriber) {
            subscriber.type = type;
        } else {
            subscriber = {
                name,
                type,
                books: []
            };

            this.subscribers.push(subscriber);
        }

        return subscriber;
    }

    unsubscribe(name) {
        let indexOf = this.subscribers
            .findIndex(e => e.name === name);
        if (indexOf >= 0) {
            this.subscribers = this.subscribers.slice(0, indexOf)
                .concat(this.subscribers.slice(indexOf + 1));
        } else {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriber = this.subscribers.find(e => e.name === subscriberName);
        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let type = subscriber.type;
        let typeLimit = this.subscriptionTypes[type];
        let booksOfSub = subscriber.books.length;

        if (typeLimit === booksOfSub) {
            throw new Error(`You have reached your subscription limit ${typeLimit}!`);
        }

        let book = {
            title: bookTitle,
            author: bookAuthor
        };
        subscriber.books.push(book);

        return subscriber;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let output = [];

        this.subscribers.forEach(function (sub) {
            output.push(`Subscriber: ${sub.name}, Type: ${sub.type}`);
            let bookOutput = [];
            sub.books.forEach(function (book) {
                bookOutput.push(`${book.title} by ${book.author}`);
            });
            output.push(`Received books: ${bookOutput.join(', ')}`);
        });

        return output.join('\n');
    }
}
