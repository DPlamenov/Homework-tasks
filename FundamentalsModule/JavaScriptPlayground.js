'use strict';
function couter() {
    var x = 1;
    return function () {
        return x++
    };
}