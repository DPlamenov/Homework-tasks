function solve(input) {
    let output = [];
    input.forEach(function (v) {
        let [heroName, heroLevel, items] = v.split(' / ');
        let obj = {
            Hero: heroName,
            level: Number(heroLevel),
            items
        };
        output.push(obj);
    });
    output.sort(function (a, b) {
        return a.level - b.level;
    });
    output.forEach(function (v) {
        v.items = v.items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
    });

    output.forEach(function (v) {
        console.log(`Hero: ${v.Hero}`);
        console.log(`level => ${v.level}`);
        console.log(`items => ${v.items}`);
    });
}

solve([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);