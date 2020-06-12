function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let resultFromParent = super.toString();
            return resultFromParent.slice(0, resultFromParent.length - 1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let resultFromParent = super.toString();
            return resultFromParent.slice(0, resultFromParent.length - 1) + `, course: ${this.course})`;
        }
    }

    let t = new Teacher('a', 'b', 'c');
    console.log(t.toString());

    return {
        Person,
        Teacher,
        Student
    };
}
