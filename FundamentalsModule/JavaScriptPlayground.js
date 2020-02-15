function solve(input) {
    let targets = input.shift().split('|').map(Number);
    let commands = input.slice();
    let points = 0;
    commands.forEach(function (element) {
        if (element.includes('Shoot Left')) {
            let startIndex = Number(element.split('@')[1]);
            let endIndex = Number(element.split('@')[2]);
            let target = startIndex - endIndex;
            if (startIndex >= 0 && startIndex < targets.length) {
                while (target < 0) {
                    target += targets.length;
                }
                if (targets[target] <= 5) {
                    points += targets[target];
                    targets[target] = 0;
                } else {
                    targets[target] -= 5;
                    points += 5;
                }
            }
        } else if (element.includes('Shoot Right')) {
            let startIndex = Number(element.split('@')[1]);
            let endIndex = Number(element.split('@')[2]);
            let target = startIndex + endIndex;
            if (startIndex >= 0 && startIndex < targets.length) {
                while (target > targets.length - 1) {
                    target -= targets.length;
                }
                if (targets[target] <= 5) {
                    points += targets[target];
                    targets[target] = 0;
                } else {
                    targets[target] -= 5;
                    points += 5;
                }
            }
        } else if (element.includes('Reverse')) {
            targets = targets.reverse();
        }
    });
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}

solve([
        '10|10|10|10|10',
        'Shoot Left@0@2',
        'Shoot Right@4@5',
        'Shoot Right@6@5',
        'Reverse',
        'Game over',
        ''
    ]

);