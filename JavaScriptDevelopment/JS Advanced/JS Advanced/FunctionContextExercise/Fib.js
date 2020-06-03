function getFibonator() {
    let a = 1;
    let b = 0;
    let temp = 0;
    return function () {
        temp = a;
        a = a + b;
        b = temp;
        return b;
    }
}
