function solve(input) {
    let string = input[0];
    let command = input[1];

    let charsToSum = string.split('').filter(e => {
        return ((command === 'UPPERCASE' && e.toUpperCase() === e) || command === 'LOWERCASE' && e.toLowerCase() === e) && isLetter(e);
    });
    let sum = charsToSum.reduce((acc, current) => {
        acc += current.charCodeAt(0);
        return acc;
    }, 0);
    console.log(`The total sum is: ${sum}`);


    function isLetter(char) {
        char = char.toLowerCase().charCodeAt(0);
        return char >= 97 && char <= 122;
    }


}

solve([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]);