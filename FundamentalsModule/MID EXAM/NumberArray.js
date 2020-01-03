function solve(input) {
    let numbers = input.shift().split(' ').map(Number);
    let commands = input.slice();
    commands.forEach(function (element) {
        if (element.includes('Switch')) {
            let index = Number(element.split(' ')[1]);
            if (index >= 0 && index < numbers.length) {
                let num = numbers[index];
                if (Math.sign(num) === 1) {
                    numbers[index] = -Math.abs(num);
                } else {
                    numbers[index] = Math.abs(num);
                }
            }
        } else if (element.includes('Change')) {
            let index = Number(element.split(' ')[1]);
            let value = Number(element.split(' ')[2]);
            if (index >= 0 && index < numbers.length) {
                numbers[index] = value;
            }
        } else if (element.includes('Sum Negative')) {
            let sum = numbers.filter(function (e) {
                return e < 0;
            }).reduce(function (a, b) {
                return a + b;
            }, 0);
            console.log(sum);
        } else if (element.includes('Sum Positive')) {
            let sum = numbers.filter(function (e) {
                return e > 0;
            }).reduce(function (a, b) {
                return a + b;
            }, 0);
            console.log(sum);
        } else if (element.includes('Sum All')) {
            let sumOfAll = numbers.reduce((a, b) => a + b, 0);
            console.log(sumOfAll);
        }
    });
    console.log(numbers.filter(e => e >= 0).join(' '));
}

solve(['1 2 3 4 5',
    'Switch 4',
    'Change 0 -3',
    'Sum Negative',
    'End']);
