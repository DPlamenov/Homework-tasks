function solve(input) {
    let output = [];
    input.forEach(function (v) {
        let obj = {};
        obj.name = v.split(' : ')[0];
        obj.price = Number(v.split(' : ')[1]);
        output.push(obj);
    });
    output = output.sort((a, b) => a.name.localeCompare(b.name));
    let lastChar = '-1';
    output.forEach(function (v) {
        let name = v.name;
        let firstChar = name.charAt(0);
        if(firstChar !== lastChar){
            console.log(firstChar);
            lastChar = firstChar;
        }
        console.log(`   ${name}: ${v.price}`);
    });
}

solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);