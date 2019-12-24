function solve(input) {
    let journal = new Map();
    input.forEach(function (element) {
        element = element.split(' ');
        let name = element.shift();
        let grades = element.slice().map(Number);
        if (journal.has(name)) {
            let oldGrades = journal.get(name);
            journal.set(name, oldGrades.concat(grades));
        } else {
            journal.set(name, grades);
        }
    });
    let result = Array.from(journal).sort(function (a, b) {
        return avg(a[1]) - avg(b[1]);
    });
    result.forEach(function (value) {
        let name = value.shift();
        let grades = value.slice()[0];
        console.log(`${name}: ${grades.join(', ')}`);
    });

    function avg(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);