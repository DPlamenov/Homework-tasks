class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(...employee) {
        let isValid = employee.find(e => e == undefined || e === '') === undefined;
        if (!isValid || employee[1] < 0) {
            throw new Error('Invalid input!');
        }
        this.departments.push(employee);

        return `New employee is hired. Name: ${employee[0]}. Position: ${employee[2]}`;
    }

    bestDepartment() {
        let d = this.departments;
        let averageProfit = [];
        let departments = d.reduce((a, b) => {
            if (!a.hasOwnProperty(b[3])) {
                a[b[3]] = [];
            }
            a[b[3]].push(b);
            return a;
        }, {});
        Object.entries(departments).forEach(function (element) {
            let department = element[0];
            let currentAvg = element[1].map(e => e[1]).reduce((a, b) => {
                return a + b;
            }, 0) / element[1].length;

            averageProfit.push({department, avg: currentAvg});
        });

        let bestDepartment = averageProfit.find(e => e.avg
            === Math.max(...averageProfit.map(e => e.avg)));

        let allInThatDepartment = d.filter(e => e[3] === bestDepartment.department);

        let output = [];
        output.push(`Best Department is: ${bestDepartment.department}`);
        output.push(`Average salary: ${bestDepartment.avg.toFixed(2)}`);
        allInThatDepartment.sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
        allInThatDepartment.forEach(function (employee) {
            let o = `${employee[0]} ${employee[1]} ${employee[2]}`;
            output.push(o);
        });
        return output.join('\n');

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
