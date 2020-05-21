let result = require('../../../JavaScriptPlayground');
let {assert} = require('chai');

describe('General describe block', function () {
    it('test', () => {

        function area() {
            return this.x * this.y;
        };

        function vol() {
            return this.x * this.y * this.z;
        };
        let actual = result(area, vol,'[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]');
        let expected = [
            { area: 220, volume: 2200 },
            { area: 329, volume: 1645 },
            { area: 440, volume: 0 },
            { area: 10000, volume: 1000000 },
            { area: 4400, volume: 1100000 }
        ];
        assert.deepEqual(actual, expected, "The returned value is not correct")

    })
});