function solve(input) {
    let start = input[0];
    let end = input[1];
    let string = input[2];

    let chars = getCharsByRange(start, end);
    let realChars = getCharsFromRange(string, chars);
    let asciiSum = countAsciiSum(realChars);
    let output = prepareOutput(asciiSum);

    console.log(output);

    function getCharsByRange(start, end) {
        let startCode = start.charCodeAt(0);
        let endCode = end.charCodeAt(0);
        let result = [];
        for (let i = Math.min(startCode, endCode) + 1; i < Math.max(startCode, endCode); i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    }

    function getCharsFromRange(string, chars) {
        return string.split('').filter(e => chars.includes(e));
    }

    function countAsciiSum(chars) {
        return chars.reduce((acc, currentValue) => {
            acc += currentValue.charCodeAt(0);
            return acc;
        }, 0);
    }

    function prepareOutput(output) {
        return output.toString();
    }
}

solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]
);