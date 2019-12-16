class User {
    _a = 5;
    constructor() {
        console.log(this._a);
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }
}

let user = new User();
console.log(user.a = 10);


const user2 = {
    name: 'Peter',
    age: 20,

};
user2.sayHello = function () {
    return ('Hi');
};
for (let el of user2) {
    console.log(el);
}
console.log(Object.entries(user2));
console.log(user2);
console.log(JSON.stringify(user2));