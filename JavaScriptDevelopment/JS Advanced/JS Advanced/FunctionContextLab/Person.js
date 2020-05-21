function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = `${firstName} ${lastName}`;


    Object.defineProperty(Person.prototype, 'firstName', {
        get() {
            return this._firstName;
        },

        set(v) {
            this._firstName = v;
            this._fullName = `${v} ${this._lastName}`;
        }
    });

    Object.defineProperty(Person.prototype, 'lastName', {
        get() {
            return this._lastName;
        },
        set(v) {
            this._lastName = v;
            this._fullName = `${this._firstName} ${v}`;
        }
    });

    Object.defineProperty(Person.prototype, 'fullName', {
        get() {
            return this._fullName;
        },
        set(v) {
            let pattern = /[A-Z][a-z]+ [A-Z][a-z]+/;
            if (pattern.test(v)) {
                let [firstName, lastName] = v.split(' ');

                this._firstName = firstName;
                this._lastName = lastName;
            }
        }
    });
}