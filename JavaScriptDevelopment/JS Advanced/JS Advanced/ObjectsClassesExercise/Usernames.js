function solve(input) {
    let set = new Set();


    for(let username of input){
        set.add(username);
    }

    Array.from(set.values()).sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(username => {
        console.log(username);
    });
}


solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);