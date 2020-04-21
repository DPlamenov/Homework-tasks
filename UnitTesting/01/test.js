let assert = require('chai').assert;
let Library = require('./Library');
describe('General describe block', function () {
    let instance = new Library('MyLib');
    describe('Test constructor()', function () {
        it('should return a object with 3 properties', function () {
            assert.equal(instance.libraryName, 'MyLib');
            assert.deepEqual(instance.subscribers, []);
            assert.deepEqual(instance.subscriptionTypes, {
                'normal': instance.libraryName.length,
                'special': instance.libraryName.length * 2,
                'vip': Number.MAX_SAFE_INTEGER
            });
        });
    });
});