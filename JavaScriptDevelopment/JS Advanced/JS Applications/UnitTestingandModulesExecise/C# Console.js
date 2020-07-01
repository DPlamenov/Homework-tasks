class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            } else if (typeof (message) === 'string') {
                return message;
            }
        } else {
            if (typeof (message) !== 'string') {
                throw new TypeError('No string format given!');
            } else {
                let tokens = message.match(this.placeholder)
                    .sort(function (a, b) {
                        a = Number(a.substring(1, a.length - 1));
                        b = Number(b.substring(1, b.length - 1));
                        return a - b;
                    });
                // console.log(tokens);
                // console.log(arguments);
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError('Incorrect amount of parameters given!');
                } else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError('Incorrect placeholders given!');
                        } else {
                            message = message.replace(tokens[i], arguments[i + 1]);
                        }
                    }
                    return message;
                }
            }
        }
    }
}

const { expect } = require('chai');
describe('C# Console', function () {
    describe('writeLine with single string param', function () {
        it('should return input string', function () {
            let actual = Console.writeLine('test123');
            let expected = 'test123';

            expect(actual)
                .to
                .eq(expected);
        });
    });

    describe('writeLine with single object param', function () {
        it('should return the input object as JSON', function () {
            let actual = Console.writeLine({
                a: 5,
                b: 'x'
            });
            let expected = '{"a":5,"b":"x"}';

            expect(actual)
                .to
                .eq(expected);
        });
    });

    describe('writeLine with templateString', function () {
        it('should throw if first param is not string', function () {
            let actual = () => Console.writeLine(5, 'x');

            expect(actual)
                .to
                .throw(TypeError);
        });

        it('should throw if the number of parameters does not correspond to the number of placeholders', function () {
            let actual = () => Console.writeLine('{0}a{1}', 1);

            expect(actual)
                .to
                .throw(RangeError);
        });

        it('should throw if the placeholders have indexes not withing the parameters range', function () {
            let actual = () => Console.writeLine('{0}a{2}', 1, 2);
            expect(actual)
                .to
                .throw(RangeError);
        });

        it('should return the correct result', function () {
            let actual = Console.writeLine('Hello {0}{1}', 'SoftUni', '!');
            let expected = 'Hello SoftUni!';

            expect(actual)
                .to
                .eq(expected);
        });

        it('should return the correct result', function () {
            let actual = Console.writeLine('{0} {1}', 'JS', 'Applications');
            let expected = 'JS Applications';

            expect(actual)
                .to
                .eq(expected);
        });

        it('should return the correct result', function () {
            let actual = Console.writeLine('{0} course at {1} is part of {2} module{3}', 'JavaScript Applications', 'SoftUni', 'JavaScript advanced', '.');
            let expected = 'JavaScript Applications course at SoftUni is part of JavaScript advanced module.';

            expect(actual)
                .to
                .eq(expected);
        });

        it('should return the correct result with multiple params', function () {
            let actual = Console.writeLine('{0}{1}{2} - {3} * {4} {5} {6} {7} {8} {9} {10} {11}', ...((new Array(12)).fill('+')));
            let expected = '+++ - + * + + + + + + + +';

            expect(actual)
                .to
                .eq(expected);
        });
    });
});