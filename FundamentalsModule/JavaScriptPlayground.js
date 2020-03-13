String.prototype.indexOf = function (substring) {
    let index = -1;
    for (let i = 0; i < this.length; i++) {
        if (this.substring(i, i + substring.length) === substring) {
            return i;
        }
    }
}

console.log('pesho'.indexOf('sh'));

// Displays 'illa' the last 4 characters
let anyString = 'Mozilla'
let anyString4 = anyString.slice(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
anyString = 'Mozilla'
let anyString5 = anyString.slice(anyString.length - 5)
console.log(anyString5)

console.log('Mozilla'.substring(-5, -2));
console.log('Mozilla'.slice(-5, -2));

let string = 'How        are y            ou';
string = string.replace(/(\s|\t)+/g, ' ');
console.log(string);
