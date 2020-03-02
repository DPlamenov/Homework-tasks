function solve(input) {
    let heroes = {};
    input.forEach(function (element) {
        if(element.includes('Enroll')){
            let heroName = element.split(' ')[1];
            if(heroes.hasOwnProperty(heroName)){
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = [];
            }
        } else if(element.includes('Learn')){
            let [heroName, spellName] = element.split(' ').slice(1);
            if(heroes.hasOwnProperty(heroName)){
                if(heroes[heroName].includes(spellName)){
                    console.log(`${heroName} has already learnt ${spellName}.`);
                } else {
                    heroes[heroName].push(spellName);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        } else if(element.includes('Unlearn')){
            let [heroName, spellName] = element.split(' ').slice(1);
            if(heroes.hasOwnProperty(heroName)){
                if(heroes[heroName].includes(spellName)){
                    let indexOf = heroes[heroName].indexOf(spellName);
                    heroes[heroName].splice(indexOf, 1);
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        }
    });
    let keys = Object.keys(heroes);
    keys.sort((a, b) => {
        if(heroes[b].length - heroes[a].length === 0){
            return a.localeCompare(b);
        }
        return heroes[b].length - heroes[a].length;
    });
    console.log('Heroes:');
    for(let key of keys){
        let spells = heroes[key].join(', ');
        console.log(`== ${key}: ${spells}`);
    }
}

solve([
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan ItShouldWork',
        'Unlearn Stefan NotFound',
        'End'
    ]

);