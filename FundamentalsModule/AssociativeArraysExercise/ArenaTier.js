function solve(input) {
    let gladiators = {};
    input.slice(0, input.length - 1).forEach(function (element) {
        if (element.includes(' vs ')) {
            let [gladiator1, gladiator2] = element.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                let common = false;
                let commonTech = '';
                let glad1Tech = Object.entries(gladiators[gladiator1]);
                let glad2Tech = Object.entries(gladiators[gladiator2]);
                glad1Tech = glad1Tech.map(value => value[0]);
                glad2Tech = glad2Tech.map(value => value[0]);
                glad1Tech.forEach(function (element) {
                    if (glad2Tech.includes(element)) {
                        if (!common) {
                            commonTech = element;
                            common = true;
                        }
                    }
                });
                if (common) {
                    let glad1Skill = Number((gladiators[gladiator1][commonTech]));
                    let glad2Skill = Number((gladiators[gladiator2][commonTech]));
                    if (glad1Skill > glad2Skill) {
                        delete gladiators[gladiator2];
                    }
                    if (glad2Skill > glad1Skill) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        } else if (element.includes(' -> ')) {
            let [gladiator, skill, power] = element.split(' -> ');
            power = Number(power);
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator][skill] = power;
            }

            if (!gladiators[gladiator].hasOwnProperty(skill)) {
                gladiators[gladiator][skill] = power;
            }
        }
    });
    let toArray = Object.entries(gladiators);
    toArray = toArray.sort(function (a, b) {
        let totalA = Object.values(a[1]).reduce(((a, b) => a + b), 0);
        let totalB = Object.values(b[1]).reduce(((a, b) => a + b), 0);
        return Number(totalB) - Number(totalA) || a[0].localeCompare(b[0]);
    });
    toArray.forEach(function (element) {
        let toSort = element[1];
        let sort = [];
        for (let v in toSort) {
            if(toSort.hasOwnProperty(v)){
                sort.push([v, toSort[v]]);
            }
        }
        sort = sort.sort(function (a, b) {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
        element[1] = sort;
    });
    toArray.forEach(function (element) {
        element[1] = Object.entries(element[1]);
        let skills = [];
        let skillsPoint = [];

        element[1].forEach(function (element) {
            if (element[1][0] !== 'totalSkill') {
                skills.push(element[1][0]);
                skillsPoint.push(element[1][1]);
            }
        });
        let totalSkill = skillsPoint.reduce(((a, b) => a + b), 0);
        console.log(`${element[0]}: ${totalSkill} skill`);
        skills.forEach(function (element, index) {
            console.log(`- ${element} <!> ${skillsPoint[index]}`);
        });
    })
}

solve([
    'AA -> AA -> 1',
    'AA -> AB -> 200',
    'BB -> AA -> 10',
    'BB vs AA',
    'Ave Cesar'
]);
console.log('-----------------');
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);