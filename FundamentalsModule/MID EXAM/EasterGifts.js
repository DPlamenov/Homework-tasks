function solve(input) {
    let gifts = input.shift().split(' ');
    let commands = input.slice();
    for (let value of commands) {
        if (value.includes('OutOfStock')) {
            let gift = value.split(' ')[1];
            while (gifts.includes(gift)) {
                let indexOf = gifts.indexOf(gift);
                gifts.splice(indexOf, 1, 'None');
            }
        } else if (value.includes('Required')) {
            let gift = value.split(' ')[1];
            let index = Number(value.split(' ')[2]);
            if (index >= 0 && index < gifts.length) {
                gifts.splice(index, 1, gift);
            }
        } else if (value.includes('JustInCase')) {
            let gift = value.split(' ')[1];
            gifts.splice(gifts.length - 1, 1, gift);
        }
    }
    console.log(gifts.filter((e) => e !== 'None').join(' '));
}

solve([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);