function solve(input) {
    let array = [];
    let counter = 1;
    input.forEach(function (element) {
        if (element === 'add') {
            array.push(counter);
        } else {
            array.pop();
        }
        counter++;
    });
    if (array.length > 0) {
        for(let element of array){
            console.log(element);
        }
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