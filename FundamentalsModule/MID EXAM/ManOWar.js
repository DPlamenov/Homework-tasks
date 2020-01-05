function f(arr) {
    let statusPirate = arr[0];
    let statusWarShip = arr[1];
    let maxHealth = arr[2];

    let newArray = arr;
    newArray.splice(0, 3);
    let counter = 0;
    let pirateArr = statusPirate.split('>');
    let warArr = statusWarShip.split('>');
    statusPirate = 0;
    statusWarShip = 0;
    for (let i = 0; i < pirateArr.length; i++) {
        statusPirate += Number(pirateArr[i]);
    }
    for (let i = 0; i < warArr.length; i++) {
        statusWarShip += Number(warArr[i]);
    }
    while (newArray[counter] !== "Retire") {
        if (newArray[counter].split(' ')[0] === "Fire") {
            let index = newArray[counter].split(' ')[1];
            let damage = newArray[counter].split(' ')[2];
            if (warArr[index - 1] !== undefined && warArr[index - 1] !== null) {
                statusWarShip -= damage;
                warArr[index - 1] -= damage;
                if (warArr[index - 1] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (newArray[counter].split(' ')[0] === "Defend") {
            let startIndex = newArray[counter].split(' ')[1];
            let endIndex = newArray[counter].split(' ')[2];
            let damage = newArray[counter].split(' ')[3];
            let valid = true;
            if (!(pirateArr[startIndex] !== undefined && pirateArr[startIndex] !== null) || !(pirateArr[endIndex] !== undefined && pirateArr[endIndex] !== null)) {
                valid = false;
            }
            if (valid) {
                for (let j = startIndex; j <= endIndex; j++) {
                    pirateArr[j] -= damage;
                    statusPirate -= damage;
                    if (pirateArr[j] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (newArray[counter].split(' ')[0] === "Repair") {
            let index = newArray[counter].split(' ')[1];
            let health = newArray[counter].split(' ')[2];

            if (pirateArr[index] !== undefined && pirateArr[index] !== null) {
                let givenHealth = health; // 33 current 8 max 70
                if (Number(pirateArr[index]) + Number(givenHealth) > Number(maxHealth)) {
                    givenHealth = maxHealth - pirateArr[index];
                }
                statusPirate += Number(givenHealth);
                pirateArr[index] += givenHealth;
            }
        } else if (newArray[counter].split(' ')[0] === "Status") {
            let count = 0;
            let minHealth = 0.2 * maxHealth;
            for (let i = 0; i < pirateArr.length; i++) {
                if (pirateArr[i] < minHealth) {
                    count++;
                }
            }
            let result = count + " sections need repair.";
            console.log(result);
        }
        counter++;
    }
    console.log("Pirate ship status: " + statusPirate);
    console.log("Warship status: " + statusWarShip);
}