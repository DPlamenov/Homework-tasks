function solve(input) {
    let messages = {};
    let capacity = Number(input.shift());

    input.forEach(element => {
        let [command, ...arguments] = element.split('=');
        if (command === 'Add') {
            let [username, sent, received] = arguments;
            if (!messages.hasOwnProperty(username)) {
                messages[username] = [sent, received].map(Number);
            }

        } else if (command === 'Message') {
            let [sender, receiver] = arguments;
            if (messages.hasOwnProperty(sender) && messages.hasOwnProperty(receiver)) {
                messages[sender][0] += 1;
                messages[receiver][1] += 1;
                if (messages[sender][0] + messages[sender][1] >= capacity) {
                    delete messages[sender];
                    console.log(`${sender} reached the capacity!`);
                }
                if (messages[receiver][0] + messages[receiver][1] >= capacity) {
                    delete messages[receiver];
                    console.log(`${receiver} reached the capacity!`);
                }
            }
        } else if (command === 'Empty') {
            let [username] = arguments;
            if (username === 'All') {
                messages = {};
            } else {
                delete messages[username];
            }

        }
    });

    console.log(`Users count: ${Object.values(messages).length}`);
    Object.entries(messages).sort((a, b) => {
        return b[1][1] - a[1][1] || a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        let name = element[0];
        let sum = element[1][0] + element[1][1];
        console.log(`${name} - ${sum}`);

    })
}

solve([
        '20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        'Add=Michael=3=9',
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        'Message=Michael=Amy',
        'Statistics'
    ]
);