//Mid Exam
function solve(input) {
    let tanks = input.shift().split(', ');
    let numbersOfCommand = Number(input.shift());
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
        } else if (command.includes("Remove At")) {
            let index = command.split(', ')[1];
            if (index >= 0 && index < tanks.length) {
                tanks.splice(index, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Index out of range");
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
            let index = Number(command.split(', ')[1]);
            let tankName = command.split(', ')[2];
            if (index >= 0 && index < tanks.length) {
                if (tanks.includes(tankName)) {
                    console.log("Tank is already bought");
                } else {
                    tanks.splice(index, 0, tankName);
                    console.log("Tank successfully bought");
                }
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(tanks.join(', '));
}

solve(["T-34-85 Rudy, SU-100Y, STG",
    "3",
    "Add, King Tiger(C)",
    "Insert, 2, IS-2M",
    "Remove, T-34-85 Rudy"]);