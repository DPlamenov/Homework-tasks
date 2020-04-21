class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            'normal': libraryName.length,
            'special': libraryName.length * 2,
            'vip': Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes.hasOwnProperty(type)) {
            throw new Error(`The type ${type} is invalid`);
        }

        let obj = {
            name,
            type,
            books: []
        };

        let exist = false;

        for (let subscriber of this.subscribers) {
            if (subscriber.name === name) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.subscribers.filter(e => e.name === name).map(e => e.type = type);
            obj = this.subscribers.filter(e => e.name === name)[0];
        } else {
            this.subscribers.push(obj);
        }

        return obj;
    }

    unsubscribe(name) {
        let exist = this.subscribers.filter(e => e.name === name).length === 1;

        if (exist) {
            let indexOf = this.subscribers.findIndex(e => e.name === name);
            this.subscribers.splice(indexOf, 1);
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

        let subscriptionType = subscriber.type;
        let maxAllowedBooks = this.subscriptionTypes[subscriptionType];

        if (subscriber.books.length === maxAllowedBooks) {
            throw new Error(`You have reached your subscription limit ${maxAllowedBooks}!`);
        }

        let books = {
            title: bookTitle,
            author: bookAuthor
        };

        subscriber.books.push(books);
        return subscriber;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }
        return this.subscribers.map(function (e) {
            const books = e.books.map(e => `${e.title} by ${e.author}`);
            return `Subscriber: ${e.name}, Type: ${e.type}\nReceived books: ${books.join(', ')}`;
        }).join('\n') + '\n';
    }
}


