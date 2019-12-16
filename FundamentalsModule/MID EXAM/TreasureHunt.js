//Mid Exam
function solve(input) {
    let chest = input.shift().split('|');
    let element = input.shift();
    while (element !== "Yohoho!") {
        let command = element;
        if (command.includes('Loot')) {
            let toAdd = command.split(' ').slice(1).filter(el => !chest.includes(el));
            toAdd.forEach(function (value) {
                chest.unshift(value);
            });
        } else if (command.includes("Drop")) {
            let index = command.split(' ')[1];
            if (index >= 0 && index < chest.length) {
                let elementToAdd = chest.splice(index, 1);
                chest.push(elementToAdd[0]);
            }
        } else if (command.includes("Steal")) {
            let index = command.split(' ')[1];
            let elements;
            if (chest.length - index < 0) {
                elements = chest.slice();
                chest.splice(0, chest.length);
            } else {
                elements = chest.slice(chest.length - index);
                chest.splice(chest.length - index, index);
            }

            console.log(elements.join(', '));
        }
        element = input.shift();
    }
    if (chest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let averageGain = chest.map(el => el.length).reduce(((a, b) => a + b), 0) / chest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);