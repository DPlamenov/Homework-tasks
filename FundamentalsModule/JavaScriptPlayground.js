// let patter = new RegExp('[a-z]+', 'i');
// let string = 'Abc t';
// let result = string.match(patter);

let users = {
    'ivan': [2, 6, 2, 6, 5, 5],
    'pesho': [3, 4, 6, 2, 6],
    'gosho': [5, 5, 3],
    'stamat': [5, 4, 6, 4]
}

let result = Object.entries(users).sort((a, b) => {
    return a[1].length - b[1];
});

console.log(result);
String.prototype.indexOf = function (substring) {
    let index = -1;
    for(let i = 0; i < this.length; i++){
        if(this.substring(i, i + substring.length) === substring){
            return i;
        }
    }
}

console.log('pesho'.indexOf('sh'));