function solve(input) {
    let output = [];
    input.forEach(function (value) {
        if(!output.includes(value)){
            output.push(value);
        }
    });
    console.log(output.join(' '));
}
