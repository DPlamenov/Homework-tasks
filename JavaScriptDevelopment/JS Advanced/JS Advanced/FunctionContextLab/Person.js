function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, 'fullName', {
            set: function (value) {
                if (value.split(' ').length !== 2) {
                    return;
                }
                let [firstName, lastName] = value.split(' ');
                this.firstName = firstName;
                this.lastName = lastName;
            },
            get: function () {
                return `${this.firstName} ${this.lastName}`;
            }
        }
    );
}
