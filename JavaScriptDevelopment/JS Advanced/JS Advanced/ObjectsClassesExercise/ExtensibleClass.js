let Extensible = (function () {
    let id = 0;

    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let i in template) {
                if (typeof template[i] === 'function') {
                    Extensible.prototype[i] = template[i];
                    // this[i] = template[i];
                } else {
                    this[i] = template[i];
                }
            }
        }
    }

    return Extensible;
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj1.extend({
    walk() {
        return 'walking...';
    },
    zi: '5'
});
console.log(obj2.walk());