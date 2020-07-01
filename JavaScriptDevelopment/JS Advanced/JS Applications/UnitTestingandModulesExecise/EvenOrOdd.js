function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

const { expect } = require('chai');
describe('isOddOrEven', function () {
    it('should return undefined with number parameter', function () {
        expect(isOddOrEven(13))
            .to
            .equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined with object parameter', function () {
        expect(isOddOrEven({ a: 5 }))
            .to
            .equal(undefined, 'Function did not return the correct result!');
    });

    it('should return correct result with an even length', function () {
        expect(isOddOrEven('lamp'))
            .to
            .equal('even', 'Function did not return the correct result!');
    });

    it('should return correct result with an odd length', function () {
        expect(isOddOrEven('tower'))
            .to
            .equal('odd', 'Function did not return the correct result!');
    });

    it('should return correct result with multiple consecutive checks', function () {
        expect(isOddOrEven('copy'))
            .to
            .equal('even', 'Function did not return the correct result!');
        expect(isOddOrEven('quit'))
            .to
            .equal('even', 'Function did not return the correct result!');

        expect(isOddOrEven('picture'))
            .to
            .equal('odd', 'Function did not return the correct result!');
        expect(isOddOrEven('requirement'))
            .to
            .equal('odd', 'Function did not return the correct result!');
    });

});