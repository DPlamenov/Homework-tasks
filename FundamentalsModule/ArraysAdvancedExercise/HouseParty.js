function solve(input) {
    let output = [];
    input.forEach(function (value) {
        let name = value.split(' ')[0];
        if (!value.includes('not')) { // Will going
            if (!output.includes(name)) {
                output.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else { // Not going
            if (output.includes(name)) {
                output.splice(output.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    });
    console.log(output.join('\n'));
}
