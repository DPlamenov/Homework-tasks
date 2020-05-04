describe('General describe block', function () {

    describe('Test constructor()', function () {
        it('constructor()', function () {
            let instance = new BookStore('name');
            assert.equal(instance.name, 'name');
            assert.deepEqual(instance.books, []);
            assert.deepEqual(instance.workers, []);
        });
    });

    describe('Test stockBooks()', function () {
        it('test add books', function () {
            let instance = new BookStore('name');
            let allBooks = instance.stockBooks(['php-ivan']);

            assert.deepEqual(instance.books, [{
                title: 'php',
                author: 'ivan'
            }]);

            assert.deepEqual(allBooks, [{
                title: 'php',
                author: 'ivan'
            }]);
        });
    });
    describe('Test hire()', function () {
        it('worker isn`t hire', function () {
            let instance = new BookStore('name');
            let result = instance.hire('dimitar', 'cto');

            assert.equal(result, 'dimitar started work at name as cto');
        });

        it('worker is already hire', function () {
            let instance = new BookStore('name');
            instance.hire('dimitar', 'ceo');
            let exception = () => instance.hire('dimitar', 'cto');

            assert.throw(exception, 'This person is our employee');
        });

        it('check worker object', function () {
            let instance = new BookStore('name');
            instance.hire('dimitar', 'ceo');

            let actual = instance.workers;
            let expected = [
                {
                    name: 'dimitar',
                    position: 'ceo',
                    booksSold: 0
                }
            ];

            assert.deepEqual(actual, expected);
        });
    });

    describe('Test fire()', function () {
        it('test fire 1', function () {
            let instance = new BookStore('name');
            instance.hire('ivanchoo', 'chistach');

            let msg = instance.fire('ivanchoo');

            assert.equal(msg, 'ivanchoo is fired');
            assert.equal(instance.workers.length, 0);
        });

        it('test fire 2', function () {
            let instance = new BookStore('name');
            // instance.hire('ivanchoo', 'chistach');
            let exception = () => instance.fire('ivanchoo');

            assert.throw(exception, 'ivanchoo doesn\'t work here');
        });
    });

    describe('Test sellBook()', function () {
        it('book is in the stock and worker is available', function () {
            let instance = new BookStore('name');
            instance.stockBooks(['php-ivan']);
            instance.hire('dimitar', 'ceo');

            instance.sellBook('php', 'dimitar');
            let worker = instance.workers.filter(e => e.name === 'dimitar')[0];

            assert.equal(worker.booksSold, 1);
        });

        it('book isn`t available', function () {
            let instance = new BookStore('name');
            instance.hire('dimitar', 'ceo');

            let exception = () => instance.sellBook('php', 'dimitar');
            assert.throw(exception, 'This book is out of stock');
        });

        it('worker isn`t available', function () {
            let instance = new BookStore('name');
            instance.stockBooks(['php-ivan']);
            let exception = () => instance.sellBook('php', 'dimitar');

            assert.throw(exception, 'dimitar is not working here');
        });
    });

    describe('printWorkers()', function () {
        it('test printWorkers()', function () {
            let instance = new BookStore('name');
            instance.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            instance.hire('George', 'seller');
            instance.hire('Ina', 'seller');
            instance.sellBook('Inferno', 'Ina');
            let actual = instance.printWorkers();

            let expected = 'Name:George Position:seller BooksSold:0\n' +
                'Name:Ina Position:seller BooksSold:1';

            assert.equal(actual, expected);
        })
    });
});