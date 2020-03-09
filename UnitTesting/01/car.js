function solve(input) {
    let string = input.shift();
    let output = [];
    input = input.filter(e => e !== '');
    for(let counter = 0; counter < input.length; counter++) {
        let element = input[counter];
        if (element.includes('GladiatorStance')) {
            string = upperCase(string);
            output.push(string);
        } else if (element.includes('DefensiveStance')) {
            string = upperCase(string);
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
            if (string.includes(substring)) {
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
        } else {
            output.push("Command doesn't exist!");
        }
        console.log(element);
        counter++;
    }

    function upperCase(string = '') {
        return string.toUpperCase();
    }

    function lowerCase(string = '') {
        return string.toUpperCase();
    }

    function modifyString(string, index, newChar) {
        let result = '';
        let array = string.split('');

        array.splice(index, newChar.length, newChar);
        result = array.join('');
        return result;
    }
}

solve([
        'fr1c710n',
        'GladiatorStance',
        'Dispel 2 I',
        'Dispel 4 T',
        'Dispel 6 O',
        'Dispel 5 I',
        'Dispel 10 I',
        'Target Change RICTION riction',
        'For Azeroth',
        ''
    ]
);