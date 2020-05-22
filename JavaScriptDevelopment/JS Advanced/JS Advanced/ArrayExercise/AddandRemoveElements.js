function solve(input) {
    let array = [];
    let counter = 1;

    input.forEach(e => {
        if (e === 'add') {
            array.push(counter);
        } else {
            array.pop();
        }
        counter++;
    });

    if (array.length > 0) {
        return array.join('\n');
    }
    return console.log('Empty');
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);