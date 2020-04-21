function solve(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'add') {
            array.push(i + 1);
        } else {
            array.pop();
        }
    }
    if (array.length > 0) {
        console.log(array.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);