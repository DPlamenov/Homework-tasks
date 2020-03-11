function solve(input) {
    let string = input[0];
    let journal = {};

    string.split('').forEach((element, index) => {
        if(!journal.hasOwnProperty(element)){
            journal[element] = [];
        }
        journal[element].push(index);
    });

    Object.entries(journal).sort((a, b) => {
        return a[1].length - b[1].length;
    }).forEach(element => {
        let line = `${element[0]}:${element[1].join('/')}`;
        console.log(line);
    });
}


solve([ 'abababa', '' ]);