function solve(input) {
    let words = new Map();
    input.forEach(function (element) {
        if (words.has(element)) {
            let current = words.get(element);
            words.set(element, ++current);
        } else {
            words.set(element, 1);
        }
    });
    let result = Array.from(words).sort(function (a,b) {
        return b[1] - a[1];
    });
    result.forEach(function (element) {
        console.log(`${element[0]} -> ${element[1]} times`);
    });
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);