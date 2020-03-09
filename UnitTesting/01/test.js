let assert = require('chai').assert;

describe('General describe block', function () {
    describe('Test constructor', function () {
        it('should return new object', function () {
            assert.deepEqual({}, {});
        });
    });
});