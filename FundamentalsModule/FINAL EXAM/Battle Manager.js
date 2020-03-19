function solve(input) {
    let battles = {};
    input.forEach(function (element) {
        let [command, ...arguments] = element.split(':');
        if (command === 'Add') {
            let personName = arguments[0];
            let health = Number(arguments[1]);
            let energy = Number(arguments[2]);

            if (!battles.hasOwnProperty(personName)) {
                battles[personName] = {
                    health: 0,
                    energy
                };
            }
            battles[personName].health += health;

        } else if (command === 'Attack') {
            let attackerName = arguments[0];
            let defenderName = arguments[1];
            let damage = Number(arguments[2]);

            if (battles.hasOwnProperty(attackerName) && battles.hasOwnProperty(defenderName)) {
                battles[defenderName].health -= damage;
                if (battles[defenderName].health <= 0) {
                    delete battles[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                }
                battles[attackerName].energy -= 1;
                if (battles[attackerName].energy === 0) {
                    delete battles[attackerName];
                    console.log(`${attackerName} was disqualified!`);
                }
            }
        } else if (command === 'Delete') {
            let username = arguments[0];
            if (username !== 'All') {
                delete battles[username];
            } else {
                battles = {};
            }
        }
    });
    console.log(`People count: ${Object.keys(battles).length}`);
    Object.entries(battles).sort((a, b) => {
        return b[1].health - a[1].health || a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        console.log(`${element[0]} - ${element[1].health} - ${element[1].energy}`);
    });
}

solve([
        'Add:Bonnie:3000:5',
        'Add:Johny:4000:10',
        'Attack:Johny:Bonnie:400',
        'Add:Chicken:1000:1',
        'Add:Rabbit:3000:5',
        'Add:Buggy:1259:10',
        'Attack:Chicken:Rabbit:1000',
        'Results'
    ]

);