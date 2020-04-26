function solve(input) {
    let set = new Set();

    for (let line of input) {
        let words = line.toLowerCase().match(/\w+/g).filter(e => e !== '');
        for(let word of words){
            set.add(word);
        }
    }

    let result = Array.from(set.values()).join(', ');
    console.log(result);

}

solve([
    'lore']);