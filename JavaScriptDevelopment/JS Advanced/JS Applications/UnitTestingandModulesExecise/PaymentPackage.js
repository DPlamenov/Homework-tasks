class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const { expect } = require('chai');
describe('PaymentPackage', function () {
    describe('constructor', function () {
        it('should return new valid object with correct data', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(instance)
                .to
                .eql({
                    _name: 'payment',
                    _value: 1000,
                    _VAT: 20,
                    _active: true
                });
        });
    });

    describe('get name', function () {
        it('should return name property', function () {
            let instance = new PaymentPackage('payment', 1000);
            expect(instance.name)
                .to
                .equal('payment');
        });
    });

    describe('get name', function () {
        it('should throw error with non-string argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => {
                instance.name = 1;
            })
                .to
                .throw('Name must be a non-empty string');
        });

        it('should throw error with non-string argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => {
                instance.name = {};
            })
                .to
                .throw('Name must be a non-empty string');
        });

        it('should throw error with empty string argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => instance.name = '')
                .to
                .throw('Name must be a non-empty string');
        });

        it('should set value to this._name with correct argument', function () {
            let instance = new PaymentPackage('payment', 1000);
            instance.name = 'new';
            expect(instance.name)
                .to
                .equal('new');
        });
    });

    describe('get value', function () {
        it('should return value property', function () {
            let instance = new PaymentPackage('payment', 1000);
            expect(instance.value)
                .to
                .equal(1000);
        });
    });


    describe('set value', function () {
        it('should throw error with non-number argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => {
                instance.value = 'abc';
            })
                .to
                .throw('Value must be a non-negative number');
        });

        it('should throw error with negative number argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => instance.value = -2)
                .to
                .throw('Value must be a non-negative number');
        });

        it('should set new value with correct argument', function () {
            let instance = new PaymentPackage('payment', 1000);
            instance.value = 400;
            expect(instance.value)
                .to
                .equal(400);
        });

        it('should set new value with correct argument', function () {
            let instance = new PaymentPackage('payment', 1000);
            instance.value = 0;
            expect(instance.value)
                .to
                .equal(0);
        });
    });

    describe('get VAT', function () {
        it('should return active property', function () {
            let instance = new PaymentPackage('payment', 1000);
            expect(instance.VAT)
                .to
                .equal(20);
        });
    });

    describe('set VAT', function () {
        it('should throw error when use non-number argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => instance.VAT = '4')
                .to
                .throw('VAT must be a non-negative number');
        });

        it('should throw error when use negative number argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => instance.VAT = -11)
                .to
                .throw('VAT must be a non-negative number');
        });
    });

    describe('get active', function () {
        it('should return active property', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(instance.active)
                .to
                .be
                .true;
        });
    });

    describe('set active', function () {
        it('should throw error with non boolean value', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(() => instance.active = 's')
                .to
                .throw('Active status must be a boolean');
        });

        it('should set new value when pass it boolean argument', function () {
            let instance = new PaymentPackage('payment', 1000);

            instance.active = false;
            expect(instance.active)
                .to
                .be
                .false;
        });
    });

    describe('toString', function () {
        it('should return a correct data when active is false', function () {
            let instance = new PaymentPackage('payment', 1000);
            instance.active = false;

            expect(instance.toString())
                .to
                .equal('Package: payment (inactive)\n' +
                    '- Value (excl. VAT): 1000\n' +
                    '- Value (VAT 20%): 1200');
        });

        it('should return a correct data when active is true', function () {
            let instance = new PaymentPackage('payment', 1000);

            expect(instance.toString())
                .to
                .equal('Package: payment\n' +
                    '- Value (excl. VAT): 1000\n' +
                    '- Value (VAT 20%): 1200');
        });
    });
});