function solve(input) {
    let massage = input.shift();
    let command = input.shift();
    while (command !== "Finish" && massage !== undefined) {
        if (command.includes("Replace")) {
            let firstChar = command.split(' ')[1];
            let secondChar = command.split(' ')[2];
            while (massage.includes(firstChar)) {
                massage = massage.replace(firstChar, secondChar);
            }
            console.log(massage);
        } else if (command.includes("Cut")) {
            let startIndex = Number(command.split(' ')[1]);
            let endIndex = Number(command.split(' ')[2]);
            if (startIndex >= 0 && endIndex < massage.length) {
                let arrayMassage = massage.split('').slice(Number(startIndex), Number(endIndex) + 1);
                let toRemove = arrayMassage.join('');
                massage = massage.replace(toRemove, '');
                console.log(massage);
            } else {
                console.log("Invalid indexes!");
            }
        } else if (command.includes("Make")) {
            let command2 = command.split(' ')[1];
            massage = massage.toLowerCase();
            if (command2 === "Upper") {
                massage = massage.toUpperCase();
            }
            console.log(massage);
        } else if (command.includes("Check")) {
            let isContains = massage.includes(command.split(' ')[1]);
            if (isContains) {
                console.log(`Message contains ${command.split(' ')[1]}`);
            } else {
                console.log(`Message doesn't contain ${command.split(' ')[1]}`);
            }
        } else if (command.includes("Sum")) {
            let startIndex = command.split(' ')[1];
            let endIndex = command.split(' ')[2];
            if (startIndex >= 0 && endIndex < massage.length) {
                let portion = massage.split('').slice(Number(startIndex), Number(endIndex) + 1);
                let ascii = portion.map(el => el.charCodeAt(0));
                let result = ascii.reduce(((a, b) => a + b), 0);
                console.log(result);
            } else {
                console.log("Invalid indexes!");
            }
        }
        command = input.shift();
    }
}