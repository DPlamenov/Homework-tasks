function solve(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if(!object.hasOwnProperty(town)){
            object[town] = 0;
        }

        object[town] += income;
    }

    console.log(JSON.stringify(object));
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);