function solve(armyInput, battlesInput) {
    let kingdoms = {};

    kingdoms = armyInput.reduce((a, b) => {
        let kingdomName = b.kingdom;

        if (!a.hasOwnProperty(kingdomName)) {
            a[kingdomName] = [];
        }
        let newObject = {};

        newObject.general = b.general;
        newObject.army = b.army;
        newObject.losses = 0;
        newObject.wins = 0;

        let oldValue = a[kingdomName].find(e => e.general === b.general);
        if (oldValue) {
            oldValue.army += b.army;
        } else {
            a[kingdomName].push(newObject);
        }
        return a;
    }, {});

    for (let battle of battlesInput) {
        let [AttackingKingdom, AttackingGeneral, DefendingKingdom, DefendingGeneral] = battle;
        if (AttackingKingdom === DefendingKingdom) {
            continue;
        }

        let armyAttacker = kingdoms[AttackingKingdom].find(e => e.general === AttackingGeneral);
        let armyDefender = kingdoms[DefendingKingdom].find(e => e.general === DefendingGeneral);

        if (armyAttacker.army > armyDefender.army) {
            armyAttacker.army = Math.floor(armyAttacker.army * 1.10);
            armyDefender.army = Math.floor(armyDefender.army * 0.90);
            armyAttacker.wins++;
            armyDefender.losses++;
        } else if (armyDefender.army > armyAttacker.army) {
            armyAttacker.army = Math.floor(armyAttacker.army * 0.90);
            armyDefender.army = Math.floor(armyDefender.army * 1.10);
            armyAttacker.losses++;
            armyDefender.wins++;
        }

    }

    kingdoms = Object.entries(kingdoms).sort((a, b) => {
        let winsA = a[1].map(e => e.wins).reduce((a, b) => a + b);
        let winsB = b[1].map(e => e.wins).reduce((a, b) => a + b);

        let lostA = a[1].map(e => e.losses).reduce((a, b) => a + b);
        let lostB = b[1].map(e => e.losses).reduce((a, b) => a + b);

        return winsB - winsA || lostA - lostB || a[0].localeCompare(b[0]);
    })[0];

    console.log(`Winner: ${kingdoms[0]}`);
    kingdoms[1].sort((a, b) => {
        return b.army - a.army;
    });
    kingdoms[1].forEach(function (element) {
        console.log(`/\\general: ${element.general}`);
        console.log(`---army: ${element.army}`);
        console.log(`---wins: ${element.wins}`);
        console.log(`---losses: ${element.losses}`);
    });
}
