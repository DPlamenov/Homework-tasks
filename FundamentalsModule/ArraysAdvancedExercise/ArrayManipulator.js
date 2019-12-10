function solve(numbers, commands) {
    commands.forEach(function (element) {
        let command = element.split(' ')[0];
        switch (command) {
            case "add":
                let index = element.split(' ')[1];
                let toAdd = element.split(' ')[2];
                numbers.splice(index, 0, Number(toAdd));
                break;
            case "addMany":
                element = element.split(' ');
                element.shift();
                let indexAddMany = Number(element.shift());
                let nums = element.map(Number);
                nums.forEach((value, index) => {
                    return numbers.splice(indexAddMany + index, 0, value);
                });
                break;
            case "contains":
                let el = element.split(' ')[1];
                console.log(numbers.indexOf(Number(el)));
                break;
            case "remove":
                let indexRemove = element.split(' ')[1];
                numbers.splice(indexRemove, 1);
                break;
            case "shift":
                let times = element.split(' ')[1];
                for (let i = 1; i <= times; i++) {
                    numbers.push(numbers.shift())
                }
                break;
            case "sumPairs":
                let arr = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    if (isNaN(numbers[i + 1])) {
                        numbers[i + 1] = 0;
                    }
                    arr.push(numbers[i] + numbers[i + 1]);
                }
                numbers = arr;
                break;
            case "print":
                let result = numbers.join(', ');
                console.log(`[ ${result} ]`);
                break;
        }
    });
}

solve([1, 6, 10, 30, 66, 4], ['add 2 11', 'addMany 4 9 10', 'print']);
