function f(input) {
    input = input.sort(function (a, b) {
        return a - b;
    });
    let smallest = input.slice(0, 2);
    console.log(smallest.join(' '));
}
