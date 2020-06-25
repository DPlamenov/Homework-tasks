function sum(arr) {
    let sum = 0;
    for (num of arr) {
        sum += Number(num);
    }
    return sum;
}

const { assert } = require('chai');

describe('test', function () {
    describe('positive numbers only', function () {
        it('1', function () {
            assert.equal(sum([1, 5]), 6);
        });

        it('2', function () {
            assert.equal(sum([1, 10, 5, 5, 1, 6, 9, 1, 5]), 43);
        });

        it('3', function () {
            assert.equal(sum([1, 1, 1, 10, 100]), 113);
        });
    });

    describe('negative numbers only', function () {
        it('1', function () {
            assert.equal(sum([-1, -5]), -6);
        });

        it('2', function () {
            assert.equal(sum([-1, -10, -5, -5, -1, -6, -9, -1, -5]), -43);
        });

        it('3', function () {
            assert.equal(sum([-1, -1, -1, -10, -100]), -113);
        });
    });

    it('zero', function () {
        assert.equal(sum([0, 0]), 0);
    });

    it('empty array', function () {
        assert.equal(sum([]), 0);
    });

    describe('call with NaN stuff', function () {
        it('call with NaN', function () {
            assert.deepEqual(sum([NaN, 5, '*']), NaN);
            assert.deepEqual(sum([5, 1, 9, 19, NaN]), NaN);
            assert.deepEqual(sum([NaN]), NaN);
        });

        it('call with string that contains only numbers', function () {
            assert.deepEqual(sum(['4', '6']), 10);
            assert.deepEqual(sum(['10', '23']), 33);
            assert.deepEqual(sum(['33', '8']), 41);
        });

        it('call with string data', function () {
            assert.deepEqual(sum(['4', 'sd']), NaN);
            assert.deepEqual(sum(['a']), NaN);
            assert.deepEqual(sum(['a', 'b']), NaN);
            assert.deepEqual(sum(['a', 'b', 5]), NaN);
        });
    });
});