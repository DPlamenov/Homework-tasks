let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const { expect } = require('chai');

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined with non-number parameter', function () {
            expect(mathEnforcer.addFive('5'))
                .to
                .equal(undefined);
        });

        it('should return correct result with positive number parameter', function () {
            expect(mathEnforcer.addFive(6))
                .to
                .equal(11);
        });

        it('should return correct result with negative number parameter', function () {
            expect(mathEnforcer.addFive(-3))
                .to
                .equal(2);
        });

        it('should return correct result with floating-point number parameter', function () {
            expect(mathEnforcer.addFive(3.14))
                .to
                .be
                .closeTo(8.14, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('should return undefined with non-number parameter', function () {
            expect(mathEnforcer.subtractTen('5'))
                .to
                .equal(undefined);
        });

        it('should return correct result with positive number parameter', function () {
            expect(mathEnforcer.subtractTen(6))
                .to
                .equal(-4);
        });

        it('should return correct result with negative number parameter', function () {
            expect(mathEnforcer.subtractTen(-30))
                .to
                .equal(-40);
        });

        it('should return correct result with floating-point number parameter', function () {
            expect(mathEnforcer.subtractTen(53.11))
                .to
                .be
                .closeTo(43.11, 0.01);
        });
    });

    describe('sum', function () {
        it('should return undefined with non-number first parameter', function () {
            expect(mathEnforcer.sum('a', 5))
                .to
                .equal(undefined);
        });

        it('should return undefined with non-number second parameter', function () {
            expect(mathEnforcer.sum(5, 'a'))
                .to
                .equal(undefined);
        });

        it('should return correct result with positive numbers', function () {
            expect(mathEnforcer.sum(1, 6))
                .to
                .equal(7);
        });

        it('should return correct result with positive and negative numbers', function () {
            expect(mathEnforcer.sum(11, -6))
                .to
                .equal(5);
        });

        it('should return correct result with negative numbers', function () {
            expect(mathEnforcer.sum(-1, -4))
                .to
                .equal(-5);
        });

        it('should return correct result with floating-point numbers', function () {
            expect(mathEnforcer.sum(1.5, 4.5))
                .to
                .be
                .closeTo(6, 0.01);
        });
    });
});