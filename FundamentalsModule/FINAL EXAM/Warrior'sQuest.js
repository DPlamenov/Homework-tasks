function solve(input) {
    let string = input.shift();
    let output = [];
    let counter = 0;
    while (counter < input.length) {
        let element = input[counter];
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
            break;
        } else {
            output.push("Command doesn't exist!");
        }
        counter++;
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
        'DYN4MICNIC',
        'Target Remove NIC',
        'Dispel 3 A',
        'DefensiveStance',
        'Target Change d D',
        'target change D d',
        'For Azeroth',
    ]
);