function f(input) {
    let health = 100;
    let coins = 0;
    let room = 1;

    let inputArr = String(input).split('|');
    let isDead = false;
    for (let i = 0; i < inputArr.length; i++) {
        let firstPart = inputArr[i].split(' ')[0];
        let secondPart = inputArr[i].split(' ')[1];
        if (firstPart === "potion") {
            if (health + Number(secondPart) > 100) {
                secondPart = 100 - health;
            }
            health += Number(secondPart);
            console.log(`You healed for ${secondPart} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (firstPart === "chest") {
            secondPart = Number(secondPart);
            coins += secondPart;
            console.log(`You found ${secondPart} coins.`);
        } else {
            let monster = firstPart;
            let damage = Number(secondPart);

            health -= damage;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                isDead = true;
                break;
            }
        }
        room++;
    }
    if(isDead){
        console.log(`Best room: ${room}`);
    }else{
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }

}

 f("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
 console.log("");
 f("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");