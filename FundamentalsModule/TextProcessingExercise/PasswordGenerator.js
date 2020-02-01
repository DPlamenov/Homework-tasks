function solve(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2].split('');
    let counterVowel = 0;
    let concatenate = (first + second).split('');
    for (let i = 0; i < concatenate.length; i++) {
        let code = concatenate[i].charCodeAt(0);
        if (code === 97 || code === 101 || code === 105 || code === 111 || code === 117) {
            concatenate[i] = third[counterVowel].toUpperCase();
            counterVowel++;
            if (counterVowel === third.length) {
                counterVowel = 0;
            }
        }
    }

    console.log('Your generated password is ' + concatenate.reverse().join(''));
}

solve([
        'easymoneyeazylife',
        'atleasttencharacters',
        'absolute'
    ]
);
