function solve(input) {
    let health = 100;
    let coins = 0;
    let isDead = false;
    let maxRoom = 1;
    for (let element of input[0].split('|')) {
        let [item, number] = element.split(' ');
        number = Number(number);
        if (item === "potion") {
            let toHealth = 100 - health;
            if (number + health <= 100) {
                toHealth = number;
            }
            console.log(`You healed for ${toHealth} hp.`);
            health += toHealth;
            console.log(`Current health: ${health} hp.`);
        } else if (item === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${item}.`);
            }
        }
        if (isDead) {
            break;
        }
        maxRoom++;
    }
    if (isDead) {
        console.log(`Best room: ${maxRoom}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);