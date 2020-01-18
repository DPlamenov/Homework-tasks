let regexp = /[\d]+\.[\d]{2}/gi;
let string = "Buy it only for 50.00 BGN";
console.log(regexp.exec(string));

let user = [];
user['username'] = 'test';
user['password'] = 'testpass';
console.log(user.length);


user.push('20');user.push(4);
console.log(user);

function f(num, array) {

    console.log(array.slice(0, num).reverse().join(' '));
}
f(3, [10, 20, 30, 50]);