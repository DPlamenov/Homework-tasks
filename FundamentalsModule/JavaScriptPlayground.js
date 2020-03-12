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
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)

console.log('Mozilla'.substring(-5, -2));