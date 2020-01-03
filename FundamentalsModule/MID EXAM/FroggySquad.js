function solve(input) {
    let frogs = input.shift().split(' ');
    let command = input.slice();

    command.forEach(function (el) {
        if (el.includes('Join')) {
            frogs.push(el.split(' ')[1]);
        } else if (el.includes('Jump')) {
            let name = el.split(' ')[1];
            let index = el.split(' ')[2];
            index = Number(index);
            if (index >= 0 && index < frogs.length) {
                frogs.splice(index, 0, name);
            }
        } else if (el.includes('Dive')) {
            let index = Number(el.split(' ')[1]);
            if (index >= 0 && index < frogs.length) {
                frogs.splice(index, 1);
            }
        } else if (el.includes('First')) {
            let count = el.split(' ')[1];
            count = Number(count);
            let array = frogs.slice(0, count);
            console.log(array.join(' '));
        } else if (el.includes('Last')) {
            let count = el.split(' ')[1];
            count = Number(count);
            let array = frogs.slice(0 - count);
            console.log(array.join(' '));
        } else if (el.includes('Print Normal')) {
            console.log(`Frogs: ${frogs.join(' ')}`);
        } else if (el.includes('Print Reversed')) {
            console.log(`Frogs: ${frogs.reverse().join(' ')}`);
        }
    });

}

solve([
    'Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed'
]);

solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
]);