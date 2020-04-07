function solve(...input) {
    input = input.map(Number);
    let sum = 0;

    for (let i = input[0]; i <= input[1]; i++) {
        sum += i;
    }

    console.log(sum);
}

solve(-8, 20);