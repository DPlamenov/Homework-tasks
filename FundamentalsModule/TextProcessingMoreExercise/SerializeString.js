function solve(input) {
    let string = input[0];
    let journal = {};

    string.split('').forEach((element, index) => {
        if(!journal.hasOwnProperty(element)){
            journal[element] = [];
        }
        journal[element].push(index);
    });

    Object.entries(journal).forEach(element => {
        let line = `${element[0]}:${element[1].join('/')}`;
        console.log(line);
    });
}


solve([ 'abababa', '' ]);