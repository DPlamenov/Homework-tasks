(function array() {
    let object = {
        last() {
            return this[this.length - 1];
        },
        skip(n) {
            return this.slice(n);
        },
        take(n) {
            return this.slice(0, n);
        },
        sum() {
            return this.reduce((a, c) => {
                return a + c;
            }, 0);

        },
        average() {
            return this.sum() / this.length
        }
    };

    Object.assign(Array.prototype, object);
})();

let array = [5, 1, 2, 5];

console.log(array.sum());
console.log(array.average());