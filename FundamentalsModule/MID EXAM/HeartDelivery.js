function solve(input) {
    let neighborhoods = input.shift().split('@').map(Number);

    let startFrom = 0;
    let targetIndex = 0;
    for (let element of input) {
        if (element.includes('Jump')) {
            let length = Number(element.split(' ')[1]);
            targetIndex = startFrom + length;
            if (targetIndex >= neighborhoods.length) {
                targetIndex = 0;
                startFrom = 0;
            } else {
                startFrom += length;
            }
            if (neighborhoods[targetIndex] === 0) {
                console.log(`Place ${targetIndex} already had Valentine's day.`);
                continue;
            }
            neighborhoods[targetIndex] -= 2;
            if (neighborhoods[targetIndex] === 0) {
                console.log(`Place ${targetIndex} has Valentine's day.`);
            }

        }
    }
    console.log(`Cupid's last position was ${targetIndex}.`);
    let sumOfHouse = neighborhoods.reduce((acc, currentValue) => {
        return acc += currentValue;
    }, 0);
    if (sumOfHouse === 0) {
        console.log("Mission was successful.");
    } else {
        let houseCount = neighborhoods.filter(x => x !== 0).length;
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

solve([
        '2@4@2', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]
);