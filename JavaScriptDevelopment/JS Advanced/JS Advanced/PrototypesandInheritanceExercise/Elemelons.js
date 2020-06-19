function solution() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return [
                `Sort: ${this.melonSort}`,
                `Element Index: ${this.elementIndex}`
            ];
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return ['Element: Water'].concat(super.toString())
                .join('\n');
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return ['Element: Fire'].concat(super.toString())
                .join('\n');
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return ['Element: Earth'].concat(super.toString())
                .join('\n');
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return ['Element: Air'].concat(super.toString())
                .join('\n');
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = [`Water`, `Fire`, `Earth`, `Air`]
        }

        morph() {
            let a = this.element.shift();
            this.element.push(a);
            return this;
        }
        toString() {
            return ['Element: ' + this.element[0]].concat(super.toString().split('\n').slice(1))
                .join('\n');
        }
    }
    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let classes = solution();

let test = new classes.Melolemonmelon(150, "Melo");

test.morph();
test.morph();
console.log(test.toString())