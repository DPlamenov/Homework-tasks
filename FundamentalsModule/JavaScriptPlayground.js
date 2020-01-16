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

if (a === 5) {

} else {
    console.log(2);
}