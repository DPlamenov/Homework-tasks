class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hex = this.value.toString(16);
        return `0x${hex.toUpperCase()}`;
    }

    plus(n) {
        let value = n instanceof Hex ? n.value : n;
        return new Hex(this.value + value);
    }

    minus(n) {
        let value = n instanceof Hex ? n.value : n;
        return new Hex(this.value - value);
    }

    static parse(hex) {
        return parseInt(hex, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(Hex.parse('5F'));

