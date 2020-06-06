const { assert } = require('chai');
const Library = require('./class_Library');

describe('general', () => {
    let instance;

    beforeEach(() => {
        instance = new Library('libName');
    });

    describe('constructor()', () => {
        it('test libraryName property', () => {
            let actual = instance.libraryName;
            let expected = 'libName';

            assert.equal(actual, expected);
        });

        it('test subscribers property must be empty array', () => {
            let actual = instance.subscribers;
            let expected = [];

            assert.deepEqual(actual, expected);
        });

        it('test subscriptionTypes property', () => {
            let actual = instance.subscriptionTypes;
            let expected = {
                normal: 7,
                special: 14,
                vip: Number.MAX_SAFE_INTEGER,
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe('subscribe()', () => {
        it('invalid type must be throw exception', () => {
            let actual = () => instance.subscribe('ivan', 'invalid');
            let excepted = 'The type invalid is invalid';

            assert.throw(actual, excepted);
        });

        it('new subscriber test return type', () => {
            let actual = instance.subscribe('ivan', 'special');
            let expected = {
                name: 'ivan',
                type: 'special',
                books: []
            };

            assert.deepEqual(actual, expected);
        });

        it('new subscriber test subscribers array', () => {
            instance.subscribe('ivan', 'special');

            let actual = instance.subscribers;
            let expected = [{
                name: 'ivan',
                type: 'special',
                books: []
            }];

            assert.deepEqual(actual, expected);
        });

        it('subscriber already exist test return type', () => {
            instance.subscribe('ivan', 'special');
            let actual = instance.subscribe('ivan', 'normal');
            let expected = {
                name: 'ivan',
                type: 'normal',
                books: []
            };

            assert.deepEqual(actual, expected);
        });
        it('subscriber already exist test subscribe array length', () => {
            instance.subscribe('ivan', 'special');
            instance.subscribe('ivan', 'normal');

            let actual = instance.subscribers.length;
            let expected = 1;

            assert.deepEqual(actual, expected);
        });

        it('subscriber already exist test search user', () => {
            instance.subscribe('ivan', 'special');
            instance.subscribe('petko', 'vip');
            let actual = instance.subscribe('ivan', 'normal');

            let expected = {
                name: 'ivan',
                type: 'normal',
                books: []
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe('unsubscribe()', () => {
        it('no that subscriber', () => {
            let actual = () => instance.unsubscribe('gosho');
            let expected = 'There is no such subscriber as gosho';

            assert.throw(actual, expected);
        });

        it('remove subscriber test return type', () => {
            instance.subscribe('ivan', 'special');
            instance.subscribe('petko', 'vip');

            let actual = instance.unsubscribe('ivan');
            let expected = [{
                name: 'petko',
                type: 'vip',
                books: []
            }];

            assert.deepEqual(actual, expected);
        });

        it('remove subscriber test subscribers array', () => {
            instance.subscribe('ivan', 'special');
            instance.subscribe('petko', 'vip');

            instance.unsubscribe('ivan');

            let actual = instance.subscribers;
            let expected = [{
                name: 'petko',
                type: 'vip',
                books: []
            }];

            assert.deepEqual(actual, expected);
        });
    });

    describe('receiveBook()', () => {
        it('user is not subscriber', () => {
            let actual = () => instance.receiveBook('petko', 'Unit testing', 'Unknown programmer');
            let expected = 'There is no such subscriber as petko';

            assert.throw(actual, expected);
        });

        it('receive book test return type', () => {
            instance.subscribe('ivan', 'special');
            let actual = instance.receiveBook('ivan', 'js', 'gosho');
            let expected = [{
                title: 'js',
                author: 'gosho'
            }];

            assert.deepEqual(actual.books, expected);
        });

        it('receive book test subscriber array', () => {
            instance.subscribe('ivan', 'special');
            instance.receiveBook('ivan', 'js', 'gosho');

            let expected = [{
                name: 'ivan',
                type: 'special',
                books: [{
                    title: 'js',
                    author: 'gosho'
                }]
            }];

            assert.deepEqual(instance.subscribers, expected);
        });

        it('test users limit must be ok', () => {
            instance.subscribe('ivan', 'normal'); //type normal -> limit 7

            for (let i = 1; i <= instance.subscriptionTypes.normal; i++) {
                instance.receiveBook('ivan', `book-js${i}`, `author${i}`);
            }

            let actual = instance.subscribers[0].books.length;
            let expected = 7;

            assert.equal(actual, expected);
        });

        it('test users limit must be throw ', () => {
            instance.subscribe('ivan', 'normal'); //type normal -> limit 7

            for (let i = 1; i <= instance.subscriptionTypes.normal; i++) {
                instance.receiveBook('ivan', `book-js${i}`, `author${i}`);
            }

            let actual = () => instance.receiveBook('ivan', 'newBook', 'unknown');
            let expected = `You have reached your subscription limit 7!`;

            assert.throw(actual, expected);
        });
    });

    describe('showInfo()', () => {
        it('no subscriber', () => {
            let actual = instance.showInfo();
            let expected = instance.libraryName + ' has no information about any subscribers';

            assert.equal(actual, expected);
        });

        it('test with 2 subscribers', () => {
            instance.subscribe('ivan', 'normal');
            instance.subscribe('petko', 'normal');

            instance.receiveBook('ivan', 'What is JS', 'douglas');
            instance.receiveBook('ivan', 'Software', 'peter');
            instance.receiveBook('petko', 'Document Object Model Advanced', 'stamat');

            let actual = instance.showInfo();
            let excepted = [`Subscriber: ivan, Type: normal`, 'Received books: What is JS by douglas, Software by peter',
                `Subscriber: petko, Type: normal`, 'Received books: Document Object Model Advanced by stamat'];

            assert.equal(actual, excepted.join('\n'));
        });
    });
});
















