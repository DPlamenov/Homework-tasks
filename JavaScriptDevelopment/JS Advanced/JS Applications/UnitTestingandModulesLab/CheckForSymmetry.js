function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false;
    } // Non-arrays are non-symmetric
    let reversed = arr.slice(0)
        .reverse(); // Clone and reverse
    return (JSON.stringify(arr) === JSON.stringify(reversed));
}

const { assert } = require('chai');

describe('general', function () {
    describe('call with non-array structure', function () {
        it('call with {}', function () {
            assert.equal(isSymmetric({}), false);
        });
        it('call with number', function () {
            assert.equal(isSymmetric(5), false);
        });
    });

    describe('call with array', function () {
        it('empty array', function () {
            assert.equal(isSymmetric([]), true);
        });
        describe('symmetric array', function () {
            it('1', function () {
                assert.equal(isSymmetric([1, 2, 2, 1]), true);
            });
            it('2', function () {
                assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
            });
            it('3', function () {
                assert.equal(isSymmetric([1]), true);
            });
            it('4', function () {
                assert.equal(isSymmetric(['a', 'b', 'a']), true);
            });
            it('4', function () {
                assert.equal(isSymmetric([1, new Date(), new Date(), 1]), true);
            });
        });

        describe('symmetric array', function () {
            it('1', function () {
                assert.equal(isSymmetric([1, 2, 2, 1, () => {
                }]), false);
            });
            it('2', function () {
                assert.equal(isSymmetric([1, 2, 5, 5, 1]), false);
            });
            it('3', function () {
                assert.equal(isSymmetric([1, 2]), false);
            });
            it('4', function () {
                assert.equal(isSymmetric(['a', 'b', 'c']), false);
            });
        });
    });
});