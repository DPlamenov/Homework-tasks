function solve(input) {
    let tasks = input.shift().split(' ').map(Number);
    let commands = input.slice();

    commands.forEach(function (element) {
        if (element === "Count Completed") {
            let count = tasks.filter(e => e === 0).length;
            console.log(count);
        } else if (element === "Count Incomplete") {
            let count = tasks.filter(function (e) {
                return e !== -1 && e !== 0;
            }).length;
            console.log(count);
        } else if (element === "Count Dropped") {
            let count = tasks.filter(e => e === -1).length;
            console.log(count);
        } else if (element.includes('Complete')) {
            let index = element.split(' ')[1];
            if (index >= 0 && index < tasks.length) {
                tasks[index] = 0;
            }
        } else if (element.includes('Drop')) {
            let index = element.split(' ')[1];
            if (index >= 0 && index < tasks.length) {
                tasks[index] = -1;
            }
        } else if (element.includes('Change')) {
            let index = element.split(' ')[1];
            let time = element.split(' ')[2];
            if (index >= 0 && index < tasks.length) {
                tasks[index] = Number(time);
            }
        }
    });

    let result = tasks.filter(function (el) {
       return el > 0;
    });
    console.log(result.join(' '));
}

solve([
    '1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
]);