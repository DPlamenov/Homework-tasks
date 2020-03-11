function solve(input) {
    let listOfNames = input[0].split(', ');
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = Array.from(listOfNames.join(' * ').match(pattern));
    console.log(result.join(' '));
}

solve([
        'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
    ]
);