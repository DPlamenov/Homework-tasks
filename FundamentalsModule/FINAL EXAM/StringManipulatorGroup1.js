function solve(input) {
    let string = input.shift();

    input.forEach(function (element) {
        let [command, ...arguments] = element.split(' ');
        if (command === 'Translate') {
            let char = arguments[0];
            let replacement = arguments[1];

            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (command === 'Includes') {
            let _string = arguments[0];
            if (string.includes(_string)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Start') {
            let _string = arguments[0];
            if (string.startsWith(_string)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Lowercase') {
            string = string.toLowerCase();
            console.log(string);
        } else if (command === 'FindIndex') {
            let char = arguments[0];
            console.log(string.lastIndexOf(char));
        } else if (command === 'Remove') {
            let startIndex = Number(arguments[0]);
            let count = Number(arguments[1]);

            let removed = string.substring(startIndex, startIndex + count);
            string = string.replace(removed, '');
            console.log(string);
        }
    });
}

solve([
        '//Thi5 I5 MY 5trING!//',
        'Translate 5 s',
        'Includes string',
        'Start //This',
        'Lowercase',
        'FindIndex i',
        'Remove 0 10',
        'End'
    ]
);