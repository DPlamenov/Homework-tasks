function solve(input) {
    input = input.map(Number);
    let days = input[0];
    let countOfPlayers = input[1];
    let totalEnergy = input[2];
    let waterPerDayPerPerson = input[3];
    let foodPerDayPerPerson = input[4];
    let water = waterPerDayPerPerson * days * countOfPlayers;
    let food = foodPerDayPerPerson * days * countOfPlayers;
    let energyLoss = input.slice(5).map(Number);
    let noEnergy = false;
    for (let i = 1; i <= days; i++) {
        totalEnergy -= energyLoss[i - 1];
        if (totalEnergy <= 0) {
            noEnergy = true;
            break;
        }
        if (i % 2 === 0) {
            totalEnergy *= 1.05;
            water *= 0.7;
        }
        if (i % 3 === 0) {
            food -= (food / countOfPlayers);
            totalEnergy *= 1.1;
        }

    }
    if (noEnergy) {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
    }
}

solve([
        '12', '6', '4430',
        '9.8', '5.5', '620.3',
        '840.2', '960.1', '220',
        '340', '674', '365',
        '345.5', '212', '412.12',
        '258', '496', ''
    ]
);