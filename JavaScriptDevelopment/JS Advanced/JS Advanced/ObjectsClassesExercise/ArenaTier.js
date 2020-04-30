function solve(input) {
    let gladiators = {};

    for (let element of input) {
        if (element === 'Ave Cesar') {
            break;
        }
        if (element.includes('vs')) {
            battle(element, gladiators);
        } else {
            technique(element, gladiators);
        }
    }

    function battle(element, gladiators) {
        let [gladiatorA, gladiatorB] = element.split(' vs ');

        let nameA = gladiatorA;
        let nameB = gladiatorB;

        gladiatorA = gladiators.hasOwnProperty(gladiatorA) ? gladiators[gladiatorA] : false;
        gladiatorB = gladiators.hasOwnProperty(gladiatorB) ? gladiators[gladiatorB] : false;

        if (gladiatorA && gladiatorB) {
            let techA = Object.keys(gladiatorA);
            let techB = Object.keys(gladiatorB);

            let common = false;

            for (let tech of techA) {
                if (techB.includes(tech)) {
                    common = true;
                }
            }
            if (common) {
                let totalA = Object.values(gladiatorA).map(Number).reduce((a, b) => a + b);
                let totalB = Object.values(gladiatorB).map(Number).reduce((a, b) => a + b);
                if (totalA > totalB) {
                    delete gladiators[nameB];
                } else if (totalB > totalA) {
                    delete gladiators[nameA];
                }
            }
        }
    }

    function technique(element, gladiators) {
        let [gladiator, technique, skill] = element.split(' -> ');
        if (!gladiators.hasOwnProperty(gladiator)) {
            gladiators[gladiator] = {};
        }

        if (!gladiators[gladiator].hasOwnProperty(technique) || gladiators[gladiator][technique] < skill) {
            gladiators[gladiator][technique] = skill;
        }
    }

    Object.entries(gladiators).sort((a, b) => {
        let totalSkillA = Object.values(a[1]).map(Number).reduce((a, b) => a + b);
        let totalSkillB = Object.values(b[1]).map(Number).reduce((a, b) => a + b);

        return totalSkillB - totalSkillA || a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        element[1] = Object.fromEntries(Object.entries(element[1]).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        }));
        let totalSkill = Object.values(element[1]).map(Number).reduce((a, b) => a + b, 0);
        console.log(`${element[0]}: ${totalSkill} skill`);
        Object.entries(element[1]).forEach(function (element) {
            console.log(`- ${element[0]} <!> ${element[1]}`);
        });
    });
}