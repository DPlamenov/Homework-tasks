let result = require('./class_Dinner');
let {assert} = require('chai');
describe('General describe block', function () {
    let instance;
    beforeEach(() => {
         instance = new result(100);
    });
    it('test constructor', () => {
        assert.deepEqual(instance.dishes, []);
        assert.deepEqual(instance.products, []);
        assert.deepEqual(instance.guests, {});
        assert.equal(instance.budget, 100);
    });
    describe('test shopping', () => {
       it('1', () => {
            let r = instance.shopping(['a', 4]);


            assert.equal(r, `You have successfully bought a!`);
            assert.equal(instance.budget, 96);
            assert.deepEqual(instance.products, ['a']);
       });

        it('2', () => {
            let r = () => instance.shopping(['a', 400]);


            assert.throw(r, `Not enough money to buy this product`);
            assert.equal(instance.budget, 100);
        });
    });

    describe('test recipes', () => {
        it('1', () => {
             instance.shopping(['a', 19]);
             instance.shopping(['b', 15]);

             let r = instance.recipes({recipeName: 'ab', productsList: ['a', 'b']});
             assert.equal(r, `ab has been successfully cooked!`);

             assert.deepEqual(instance.dishes, [
                 {
                     recipeName: 'ab',
                     productsList: ['a', 'b']
                 }
             ])
        });
        it('2', () => {
            let r = () => instance.recipes({recipeName: 'ab', productsList: ['a', 'b']});
            assert.throw(r, 'We do not have this product');
            assert.deepEqual(instance.dishes, []);
        });
    });
    describe('test inviteGuests', () => {
        it('1', () => {
            let r = () => instance.inviteGuests('petko', 'a');

            assert.throw(r, 'We do not have this dish');
        });
        it('2', () => {
            instance.shopping(['a', 19]);
            instance.shopping(['b', 15]);
            instance.recipes({recipeName: 'ab', productsList: ['a', 'b']});
            instance.inviteGuests('petko', 'ab');
            let r = () => instance.inviteGuests('petko', 'ab');

            assert.throw(r, 'This guest has already been invited');
        });
        it('3', () => {
            instance.shopping(['a', 19]);
            instance.shopping(['b', 15]);
            instance.recipes({recipeName: 'ab', productsList: ['a', 'b']});
            let r = instance.inviteGuests('petko', 'ab');

            assert.equal(r, `You have successfully invited petko!`);
            assert.deepEqual(instance.guests, {
                'petko': 'ab'
            });
        });

    });

    describe('test showAttendance()', () => {
        it('1', () => {
            instance.shopping(['a', 19]);
            instance.shopping(['b', 15]);
            instance.recipes({recipeName: 'ab', productsList: ['a', 'b']});
            instance.inviteGuests('petko', 'ab');
            instance.inviteGuests('petko1', 'ab');

            let r = instance.showAttendance();

            assert.equal(r, 'petko will eat ab, which consists of a, b\npetko1 will eat ab, which consists of a, b');
        })
    });
});