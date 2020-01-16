let pattern = /\s+/gi;
let string = 'This is   example   of some   string   ';

let output = string.split(pattern);
console.log(string);
console.log(output);

let a = null;
let array = [20, 30, 50, a, null];

array.forEach(function (element) {
    console.log(element);
})

let testA = true;
let testB = 1;

if (testA != testB) {
    console.log('diff');
} else {
    console.log('same');
}