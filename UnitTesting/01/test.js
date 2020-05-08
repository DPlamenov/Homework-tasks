let assert = require('chai').assert;
let BookStore = require('./BookStore');

describe('General describe block', function () {
    let instance;
    beforeEach(function () {
        instance = new BookStore('store');
    });
    describe('Test constructor()', function () {
        it('test whole object', function () {
            assert.equal(instance.name, 'store');
            assert.deepEqual(instance.books, []);
            assert.deepEqual(instance.workers, []);
        });
    });

    describe('Test stockBooks()', function () {
        it('test with one book', function () {
            let actual = instance.stockBooks(['title-author']);
            let expected = [{ title: 'title', author: 'author' }];

            assert.deepEqual(actual, expected);
        });

        it('test with two books', function () {
            let actual = instance.stockBooks(['title-author', 'title2-authorF']);
            let expected = [{ title: 'title', author: 'author' }, { title: 'title2', author: 'authorF' }];

            assert.deepEqual(actual, expected);
        });
    });

    describe('test hire()', function () {
        it('already employee', function () {
            instance.hire('dimitar', 'cto');

            let exception = () => instance.hire('dimitar', 'ceo');

            assert.throw(exception, 'This person is our employee');
        });

        it('non employee', function () {
            let msg = instance.hire('dimitar', 'cto');

            assert.equal(msg, 'dimitar started work at store as cto');
            // assert.equal(instance.workers.length, 1);
            assert.deepEqual(instance.workers, [{ name: 'dimitar', position: 'cto', booksSold: 0 }]);
        });
    });

    describe('test fire()', function () {
        it('already employee', function () {
            instance.hire('dimitar', 'cto');
            let msg = instance.fire('dimitar', 'ceo');

            assert.equal(msg, 'dimitar is fired');
            assert.equal(instance.workers.length, 0);
        });
    });

    it('non employee', function () {
        let exception = () => instance.fire('dimitar', 'cto');

        assert.throw(exception, 'dimitar doesn\'t work here');
    });

    describe('test sellBook()', function () {
        it('book out of stock', function () {
            let exception = () => instance.sellBook('you dont know js', 'stamat');

            assert.throw(exception, 'This book is out of stock');
        });

        it('worker out', function () {
            instance.stockBooks(['es6-dimitar']);

            let exception = () => instance.sellBook('es6', 'stamat');

            assert.throw(exception, 'stamat is not working here');
        });

        it('sell a book', function () {
            instance.hire('dimitar', 'cto');
            instance.stockBooks(['es6-dimitar']);
            instance.sellBook('es6', 'dimitar');

            let actual = instance.workers[0].booksSold;

            assert.equal(actual, 1);
        });
    });

    describe('test printWorkers()', function () {
        it('test it', function () {
            instance.hire('dimitar', 'cto');
            let actual = instance.printWorkers();
            assert.equal(actual, 'Name:dimitar Position:cto BooksSold:0');
        });
    });
});