function solve(input) {
    let object = {};

    let words = input[0].match(/\w+/g);

    for (let word of words) {
        if(!object.hasOwnProperty(word)){
            object[word] = 0;
        }
        object[word] += 1;
    }

    return JSON.stringify(object);
}

solve(['Far too slow, you\'re far too slow.']);