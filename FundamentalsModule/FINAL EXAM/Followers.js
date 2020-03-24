function solve(input) {
    let journal = {};

    input.forEach(element => {
        let [command, ...arguments] = element.split(': ');
        if (command === 'New follower') {
            let username = arguments[0];
            if (!journal.hasOwnProperty(username)) {
                journal[username] = { likes: 0, comments: 0 };
            }
        } else if (command === 'Like') {
            let username = arguments[0];
            let count = Number(arguments[1]);
            if (!journal.hasOwnProperty(username)) {
                journal[username] = { likes: 0, comments: 0 };
            }
            journal[username].likes += count;
        } else if (command === 'Comment') {
            let username = arguments[0];
            if (!journal.hasOwnProperty(username)) {
                journal[username] = { likes: 0, comments: 0 };
            }
            journal[username].comments += 1;
        } else if (command === 'Blocked') {
            let username = arguments[0];
            if (journal.hasOwnProperty(username)) {
                delete journal[username];
            } else {
                console.log(`${username} doesn't exist.`);

            }
        }
    });

    console.log(`${Object.values(journal).length} followers`);
    Object.entries(journal).sort((a, b) => {
        return b[1].likes - a[1].likes || a[0].localeCompare(b[0]);
    }).forEach((el) => {
        let name = el[0];
        let likesAndComments = el[1].likes + el[1].comments;
        console.log(`${name}: ${likesAndComments}`);

    });

}

solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]
);