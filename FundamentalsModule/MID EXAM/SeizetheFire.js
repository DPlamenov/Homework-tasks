function solve(input) {
    let cells = input[0].split('#');
    let water = Number(input[1]);
    let effort = 0;
    let _cells = [];
    for (let element of cells) {
        let [typeOfFire, fire] = element.split(' = ');
        fire = Number(fire);
        if (water >= fire) {
            if (typeOfFire === "High" && fire >= 81 && fire <= 125) {
                effort += (0.25 * fire);
                water -= fire;
                _cells.push(element);
            } else if (typeOfFire === "Medium" && fire >= 51 && fire <= 80) {
                effort += (0.25 * fire);
                water -= fire;
                _cells.push(element);
            } else if (typeOfFire === "Low" && fire >= 1 && fire <= 50) {
                effort += (0.25 * fire);
                water -= fire;
                _cells.push(element);
            }


        }
    }
    console.log('Cells:');
    _cells.forEach(function (element) {
        console.log(' - ' + element.split(' = ')[1]);
    });
    console.log(`Effort: ${effort.toFixed(2)}`);
    let total = _cells.map((e) => e.split(' = ')[1]).map(Number).reduce(((a, b) => a + b), 0);
    console.log(`Total Fire: ${total}`);


}

solve([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
]);