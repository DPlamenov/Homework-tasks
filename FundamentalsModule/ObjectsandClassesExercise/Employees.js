function solve(input) {
    class Employee {
        employeeName = undefined;
        personalSum = 0;

        constructor(employeeName) {
            this.employeeName = employeeName;
            this.personalSum = employeeName.length;
        }

        print() {
            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.personalSum}`);
        }
    }

    input.forEach(function (v) {
        let employee = new Employee(v);
        employee.print();
    });
}