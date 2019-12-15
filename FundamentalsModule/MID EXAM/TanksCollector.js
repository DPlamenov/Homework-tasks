function solve(input) {
    let tanks = input.shift().split(', ');
    let numbersOfCommand = input.shift();
    for (let i = 1; i <= numbersOfCommand; i++) {
        let command = input.shift();
        if (command.includes("Add")) {
            let tankName = command.split(', ')[1];
            if (tanks.includes(tankName)) {
                console.log("Tank is already bought");
            } else {
                tanks.push(tankName);
                console.log("Tank successfully bought");
            }
        } else if (command.includes("Remove")) {
            let tankName = command.split(', ')[1];
            if (tanks.includes(tankName)) {
                let index = tanks.indexOf(tankName);
                tanks.splice(index, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Tank not found");
            }
        } else if (command.includes("Insert")) {
            let index = command.split(', ')[1];
            let tankName = command.split(', ')[2];
            if (input >= 0 && input < tanks.length) {
                if (tanks.includes(tankName)) {
                    console.log("Tank is already bought");
                } else {
                    tanks.splice(index, 0, tankName);
                    console.log("Tank successfully bought");
                }
            } else {
                console.log("Index out of range");
            }
        } else if (command.includes("Remove At")) {

        }
    }
    console.log(tanks.join(', '));
}