function solve(input) {
    let heroes = [];

    input.forEach(function (element) {
        let [name, level, items] = element.split(' / ');
        items = items !== undefined ? items.split(', ') : [];
        let hero = {
            name, level: Number(level), items
        };
        heroes.push(hero);
    });

    return JSON.stringify(heroes);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));