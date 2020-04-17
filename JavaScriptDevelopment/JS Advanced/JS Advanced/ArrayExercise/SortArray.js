function solve(input) {
    let sorted = input.sort((a, b) => {
       return a.length - b.length || a.localeCompare(b);
    });

    for(let msg of sorted){
        console.log(msg);
    }
}
solve(['alpha',
    'beta',
    'gamma']
);