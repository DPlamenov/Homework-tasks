function solve(input) {
    let string = input.shift().trim();
    let output = [];

    input = input.map(e => e.trim());
    let command = input.shift();
    while(command !== 'For Azeroth'){
        let element = command;
        let tokens = element.split(' ');
        if (tokens[0] === 'GladiatorStance') {
            string = string.toUpperCase();
            output.push(string);
        } else if (tokens[0] === 'DefensiveStance') {
            string = string.toLowerCase();
            output.push(string);
        } else if (tokens[0] === 'Dispel') {
            let index = Number(element.split(' ')[1]);
            let letter = element.split(' ')[2];
            if (index >= 0 && index < string.length) {
                string = modifyString(string, index, letter);
                output.push("Success!");
            } else {
                output.push("Dispel too weak.");
            }
        } else if (`${tokens[0]} ${tokens[1]}` === 'Target Change') {
            let substring = element.split(' ')[2];
            let secondSubstring = element.split(' ')[3];
            if (string.includes(substring)) {
                string = string.replace(substring, secondSubstring);
            }
            output.push(string);
        } else if (`${tokens[0]} ${tokens[1]}` === 'Target Remove') {
            let substring = element.split(' ')[2];
            if(string.includes(substring)){
                string = string.replace(substring, '');
                output.push(string);
            }
        } else if (element === 'For Azeroth') {
            break;
        } else {
            output.push("Command doesn't exist!");
        }
        command = input.shift();
    }

    function modifyString(string, index, newChar) {
        let result = '';
        let array = string.split('');

        array[index] = newChar;

        result = array.join('');
        return result;
    }
    output.forEach((element) => {
        console.log(element);
    });
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