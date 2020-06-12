function solve() {
    const Figure = (function () {
        function Figure(unit = 'cm') {
            this.unit = unit;
        }

        Figure.prototype.converter = {
            'cm': 1,
            'mm': 10,
            'm': 0.01
        };

        Figure.prototype.toString = function () {
            return `Figures units: ${this.unit} Area: ${this.area} - `;
        };

        Object.defineProperty(Figure.prototype, 'area', {
            get() {
                return NaN;
            }
        });

        Figure.prototype.changeUnits = function (to) {
            this.unit = to;
        };

        return Figure;
    })();

    const Circle = (function (parent) {
        function Circle(radius, unit) {
            parent.call(this, unit);
            this.radius = radius;
        }

        Circle.prototype = Object.create(parent.prototype);

        Object.defineProperty(Circle.prototype, 'area', {
            get() {
                return Math.PI * Math.pow(this.radius * this.converter[this.unit], 2);
            }
        });

        Circle.prototype.toString = function () {
            return parent.prototype.toString.call(this) + `radius: ${this.radius * this.converter[this.unit]}`;
        };

        return Circle;
    })(Figure);


    const Rectangle = (function (parent) {
        function Rectangle(width, height, unit) {
            parent.call(this, unit);
            this.width = width;
            this.height = height;
        }

        Rectangle.prototype = Object.create(parent.prototype);

        Object.defineProperty(Rectangle.prototype, 'area', {
            get() {
                return this.width * this.height * this.converter[this.unit] * this.converter[this.unit];
            }
        });

        Rectangle.prototype.toString = function () {
            return parent.prototype.toString.call(this) + `width: ${this.width * this.converter[this.unit]}, height: ${this.height * this.converter[this.unit]}`;
        };

        return Rectangle;
    })(Figure);

    return {
        Figure,
        Rectangle,
        Circle
    };
}

let p = solve();

let c = new p.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new p.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
