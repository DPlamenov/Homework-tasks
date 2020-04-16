function f(input) {
    let result = input
        .filter((e, i) => i % 2 !== 0)
        .map(x => 2 * x)
        .reverse()
        .join(' ');
    console.log(result);
}