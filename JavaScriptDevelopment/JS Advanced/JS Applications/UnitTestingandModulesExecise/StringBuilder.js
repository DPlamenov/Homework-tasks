class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

const { expect } = require('chai');

describe('StringBuilder', function () {
    describe('constructor', function () {
        it('call with string argument', function () {
            const instance = new StringBuilder('abcdef');
            expect(instance._stringArray)
                .to
                .have
                .members([...'abcdef']);
        });

        it('call with non-string argument', function () {
            const instance = () => {
                new StringBuilder({});
            };
            expect(instance)
                .to
                .throw('Argument must be string');
        });

        it('call without arguments', function () {
            const instance = new StringBuilder();
            expect(instance._stringArray)
                .to
                .eql([]);
        });
    });

    describe('append', function () {
        it('correct argument', function () {
            const instance = new StringBuilder();
            instance.append('abc');

            expect(instance._stringArray)
                .to
                .eql(['a', 'b', 'c']);
        });

        it('non-string argument', function () {
            const instance = new StringBuilder();

            expect(() => instance.append(1))
                .to
                .throw('Argument must be string');
        });
    });

    describe('prepend', function () {
        it('correct argument', function () {
            const instance = new StringBuilder('a');
            instance.prepend('abc');

            expect(instance._stringArray)
                .to
                .eql(['a', 'b', 'c', 'a']);
        });

        it('non-string argument', function () {
            const instance = new StringBuilder();

            expect(() => instance.prepend(2))
                .to
                .throw('Argument must be string');
        });
    });

    describe('insertAt', function () {
        it('correct argument', function () {
            const instance = new StringBuilder('a');
            instance.insertAt('abc', 1);
            expect(instance._stringArray)
                .to
                .eql(['a', 'a', 'b', 'c']);
        });

        it('non-string argument', function () {
            const instance = new StringBuilder();

            expect(() => instance.insertAt(1, 2))
                .to
                .throw('Argument must be string');
        });
    });

    describe('remove', function () {
        it('should return correct result with startIndex + length < array length', function () {
            const instance = new StringBuilder('abcdef');
            instance.remove(1, 2);

            expect(instance._stringArray)
                .to
                .eql(['a', 'd', 'e', 'f']);
        });
    });

    describe('toString', function () {
        it('should return all elements joined by empty string', function () {
            const instance = new StringBuilder('abcdef');
            expect(instance.toString())
                .to
                .eql('abcdef');
        });
    });

    describe('verifyParam', function () {
        it('should verifyParam method to be on static', function () {
            expect(() => StringBuilder._vrfyParam(true))
                .to
                .throw('Argument must be string');
        });
    });
});