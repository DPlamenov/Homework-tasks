function solve(input) {
    let contacts = input.shift().split(' ');
    let commands = input.slice();
    commands.forEach(function (command) {
        if (command.includes('Add')) {
            let contact = command.split(' ')[1];
            let index = Number(command.split(' ')[2]);
            if (contacts.includes(contact)) {
                if (index >= 0 && index < contacts.length) {
                    contacts.splice(index, 0, contact);
                }
            } else {
                contacts.push(contact);
            }
        } else if (command.includes('Remove')) {
            let index = Number(command.split(' ')[1]);
            if (index >= 0 && index < contacts.length) {
                contacts.splice(index, 1);
            }
        } else if (command.includes('Export')) {
            let startIndex = Number(command.split(' ')[1]);
            let count = Number(command.split(' ')[2]);
            let result = contacts.slice(startIndex, startIndex + count);
            console.log(result.join(' '));
        } else if (command.includes('Print Normal')) {
            let output = contacts.join(' ');
            console.log(`Contacts: ${output}`);
        } else if (command.includes('Print Reversed')) {
            let output = contacts.reverse().join(' ');
            console.log(`Contacts: ${output}`);
        }
    });
}
