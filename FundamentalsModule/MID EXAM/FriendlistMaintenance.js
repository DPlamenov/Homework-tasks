function solve(input) {
    let username = input.slice(0, 1)[0].split(', ');
    let command = input.slice(1);
    let currentCommand = command.shift();
    while (currentCommand !== "Report") {
        if (currentCommand.includes("Blacklist")) {
            let name = currentCommand.split(' ')[1];
            if (username.includes(name)) {
                let index = username.indexOf(name);
                username[index] = 'Blacklisted';
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (currentCommand.includes("Error")) {
            let index = currentCommand.split(' ')[1];
            let currentUsername = username[index];
            if (currentUsername !== "Blacklisted" && currentUsername !== "Lost") {
                username[index] = 'Lost';
                console.log(`${currentUsername} was lost due to an error.`);
            }
        } else if (currentCommand.includes("Change")) {
            let index = currentCommand.split(' ')[1];
            let newName = currentCommand.split(' ')[2];
            if (index >= 0 && index < username.length) {
                console.log(`${username[index]} changed his username to ${newName}.`);
                username[index] = newName;
            }
        }
        currentCommand = command.shift();
    }
    let blacklist = username.filter((e) => e === "Blacklisted").length;
    let lost = username.filter((e) => e === "Lost").length;
    console.log("Blacklisted names: " + blacklist);
    console.log("Lost names: " + lost);
    console.log(username.join(' '));
}