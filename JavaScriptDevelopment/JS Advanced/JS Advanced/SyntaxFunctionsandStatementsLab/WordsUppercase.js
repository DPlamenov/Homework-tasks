function solve(input) {
    let words = input.match(/\w+/g)
        .map(e => e.toUpperCase())
        .join(', ');
    console.log(words);
}

solve('Hi, how are you?');