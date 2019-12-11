let nums = [9, 2, 8, 6, 98, 1];
let f = function (a, b, next = (() => false)) {
    const toReturn = a * b + b;
    next();
    return toReturn;
};

let r = f(1, 2, function () {
    console.log('ready');
});

console.log(r);