function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.speak = () => {
                return `${this.name}, age ${this.age} says Meow`;
            }
        }
    }

    input.forEach(function (v) {
        let name = v.split(' ')[0];
        let age = v.split(' ')[1];
        let cat = new Cat(name, age);
        console.log(cat.speak());
    });
}
solve(['Mellow 2', 'Tom 5']);