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

        let subscriber = this.subscribers.find(e => name === e.name);
        if (!subscriber) {
            subscriber = {
                name, type, books: []
            };
            this.subscribers.push(subscriber);
            return subscriber;
        }

        subscriber.type = type;

        return subscriber;
    }

    unsubscribe(name) {
        let subscriber = this.subscribers.findIndex(e => name === e.name);
        if (subscriber === -1) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(subscriber, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriber = this.subscribers.find(e => subscriberName === e.name);
        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
        let type = subscriber.type;
        let typeValue = this.subscriptionTypes[type];

        if (typeValue === subscriber.books.length) {
            throw new Error(`You have reached your subscription limit ${typeValue}!`);
        }

        subscriber.books.push({ title: bookTitle, author: bookAuthor });

        return subscriber;
    }

    showInfo() {
        let output = [];
        this.subscribers.forEach(subscriber => {
            output.push(`Subscriber: ${subscriber.name}, Type: ${subscriber.type}`);
            let books = [];
            subscriber.books.forEach(book => {
                books.push(`${book.title} by ${book.author}`);
            });
            output.push('Received books: ' + books.join(', '));
        });

        return output.join('\n');
    }
}

module.exports = Library;
