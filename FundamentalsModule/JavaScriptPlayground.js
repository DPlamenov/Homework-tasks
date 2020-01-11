let pattern = /\b(?<name>\w+)@\1\b/g;
let str = 'Ivan@Ivan';
str = str.replace(/[A-z]+/g, 'Secret');
console.log(str);
