function solve(input) {
    let journal = {};
    for (let element of input){
        let tokenList = element.split('->');
        if(tokenList[0] === 'Add'){
            let username = tokenList[1];
            if(journal.hasOwnProperty(username)){
                console.log(`${username} is already registered`);
            } else {
                journal[username] = [];
            }
        } else if(tokenList[0] === 'Send'){
            let username = tokenList[1];
            let email = tokenList[2];
            journal[username].push(email);
        } else if(tokenList[0] === 'Delete'){
            let username = tokenList[1];
            if(journal.hasOwnProperty(username)){
                delete journal[username];
            } else {
                console.log(`${username} not found!`);
            }
        }
    }
    console.log(`Users count: ${Object.keys(journal).length}`);
    Object.entries(journal).sort((a, b) => {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        console.log(element[0]);
        element[1].forEach(msg => {
            console.log(`- ${msg}`);
        });
    });
}

solve([
        'Add->George',
        'Add->A'
    ]

);