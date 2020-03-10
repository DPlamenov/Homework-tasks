function solve(input) {
    let string = input.shift().trim();
    let output = [];

    input = input.map(e => e.trim());
    for (let i = 0; i <= input.indexOf('For Azeroth'); i++) {
        let element = input[i];
        if (element.includes('GladiatorStance')) {
            string = string.toUpperCase();
            output.push(string);
        } else if (element.includes('DefensiveStance')) {
            string = string.toLowerCase();
            output.push(string);
        } else if (element.includes('Dispel')) {
            let index = Number(element.split(' ')[1]);
            let letter = element.split(' ')[2];
            if (index >= 0 && index < string.length) {
                string = modifyString(string, index, letter);
                output.push("Success!");
            } else {
                output.push("Dispel too weak.");
            }
        } else if (element.includes('Target Change')) {
            let substring = element.split(' ')[2];
            let secondSubstring = element.split(' ')[3];
            while (string.indexOf(substring) !== -1) {
                string = string.replace(substring, secondSubstring);
            }
            output.push(string);
        } else if (element.includes('Target Remove')) {
            let substring = element.split(' ')[2];
            string = string.replace(substring, '');
            output.push(string);

        } else if (element === 'For Azeroth') {
            output.forEach((element) => {
                console.log(element);
            });
            break;
        } else {
            output.push("Command doesn't exist!");
        }
    }

    function modifyString(string, index, newChar) {
        let result = '';
        let array = string.split('');

        array[index] = newChar;

        result = array.join('');
        return result;
    }
}

solve([
        'TEST',
        'Dispel 3 A',
        'Dispel 3 5',
        'For Azeroth',
        'For Azeroth'

    ]
);