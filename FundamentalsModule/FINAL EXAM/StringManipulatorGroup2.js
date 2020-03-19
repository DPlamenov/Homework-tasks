function solve(input) {
    let string = input.shift();
    for (let element of input) {
        if (element === 'Done') {
            break;
        }

        let [command, ...arguments] = element.split(' ');
        if (command === 'Change') {
            let [char, replacement] = arguments;
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (command === 'Includes') {
            let substring = arguments[0];
            if (string.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'End') {
            let substring = arguments[0];
            if (string.endsWith(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        } else if(command === 'FindIndex'){
            let char = arguments[0];
            let indexOf = string.indexOf(char);
            console.log(indexOf);
        } else if(command === 'Cut'){
            let [startIndex, length] = arguments.map(Number);
            string = string.substr(startIndex, length);
            console.log(string);
        }
    }
}

solve([
        '//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done'
    ]
);