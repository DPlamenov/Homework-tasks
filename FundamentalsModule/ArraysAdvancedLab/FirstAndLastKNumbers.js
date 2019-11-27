function solve(array) {
    let k = array.shift();
    let firstPart = array.slice(0, k);
    let secondPart = array.slice(array.length - k, array.length);
    console.log(firstPart.join(' '));
    console.log(secondPart.join(' '));
}