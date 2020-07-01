function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

const { expect } = require('chai');

describe('lookupChar', function () {
    it('should return undefined with a non-string first parameter', function () {
        expect(lookupChar(10, 1))
            .to
            .equal(undefined, 'The function did not return the correct result');
    });

    it('should return undefined with a non-number second parameter', function () {
        expect(lookupChar('london', 'a'))
            .to
            .equal(undefined, 'The function did not return the correct result');
    });

    it('should return undefined with a floating-point number as a second parameter', function () {
        expect(lookupChar('london', 3.14))
            .to
            .equal(undefined, 'The function did not return the correct result');
    });

    it('should return incorrect index with an incorrect index value', function () {
        expect(lookupChar('thisString', 15))
            .to
            .equal('Incorrect index', 'The function did not return the correct result');
    });

    it('should return incorrect index with a negative index value', function () {
        expect(lookupChar('thisString', -2))
            .to
            .equal('Incorrect index', 'The function did not return the correct result');
    });

    it('should return incorrect index with an index value equal to string length', function () {
        expect(lookupChar('thisString', 10))
            .to
            .equal('Incorrect index', 'The function did not return the correct result');
    });

    it('should return correct value with correct parameters', function () {
        expect(lookupChar('Paul', 1))
            .to
            .equal('a', 'The function did not return the correct result');
    });

    it('should return correct value with correct parameters', function () {
        expect(lookupChar('University', 4))
            .to
            .equal('e', 'The function did not return the correct result');
    });
});