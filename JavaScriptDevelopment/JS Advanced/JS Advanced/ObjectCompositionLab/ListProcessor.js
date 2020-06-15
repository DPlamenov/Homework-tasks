function solve(input) {
    let list = [];

    input.forEach(command => {
        let typeCommand = command.split(' ')[0];
        if (typeCommand === 'add') {
            list.push(command.split(' ')[1]);
        } else if (typeCommand === 'remove') {
            list = list.filter(e => e !== command.split(' ')[1]);
        } else {
           console.log(list.join(','));
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);