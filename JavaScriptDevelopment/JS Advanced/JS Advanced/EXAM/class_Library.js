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
        let validTypes = Object.keys(this.subscriptionTypes);

        if (!validTypes.includes(type)) {
            throw new Error(`The type ${type} is invalid`);
        }

        let subscriber = this.subscribers
            .find(e => e.name === name);

        if (subscriber) {
            subscriber.type = type;
            return subscriber;
        } else {
            this.subscribers.push({
                name,
                type,
                books: []
            });

            return this.subscribers[this.subscribers.length - 1];
        }
    }

    unsubscribe(name) {
        let subscriber = this.subscribers
            .find(e => e.name === name);

        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        let indexOf = this.subscribers
            .findIndex(e => e.name === name);

        this.subscribers.splice(indexOf, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let subscriber = this.subscribers
            .find(e => e.name === subscriberName);
        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let typeOfSubscriber = this.subscriptionTypes[subscriber.type];

        if (typeOfSubscriber > subscriber.books.length) {
            subscriber.books.push({title: bookTitle, author: bookAuthor});
        } else {
            throw new Error(`You have reached your subscription limit ${typeOfSubscriber}!`);
        }

        return subscriber;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }
        let output = '';
        this.subscribers.forEach(function (el) {
            let books = el.books.reduce((a, b) => {
                a.push(`${b.title} by ${b.author}`);
                return a;
            }, []).join(', ');
            output += `Subscriber: ${el.name}, Type: ${el.type}\nReceived books: ${books}\n`;
        })
        return output + '\n';
    }

}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
// lib.subscribe('John', 'vip');


lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
