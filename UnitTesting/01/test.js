let assert = require('chai').assert;
let Convert = require('./Convert');
describe('General describe block', function () {
    describe('Test constructor', function () {
        it('should return valid object', function () {
            let convert = new Convert([
                ["python", "blue"]
                , ["python", "blue"]
                , ["c++", "red"]
                , ["java", "yellow"]
                , ["c++", "red"]
            ]);

            let expected = {
                python: {
                    count: 2,
                    color: "blue"
                },
                'c++': {
                    count: 2,
                    color: "red"
                },
                java: {
                    count: 1,
                    color: "yellow"
                }
            };

            let actual = convert.getObject();
            console.log(actual);
            assert.deepEqual(actual, expected);
        });
    });
});