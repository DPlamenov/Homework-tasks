function solve(input) {
    let parts = input.slice().shift().split('|');
    let commands = input.slice(1);
    commands.forEach(function (element) {
        if (element.includes('Move Left')) {
            let index = Number(element.split(' ')[2]);
            if (checkIndexes(index, parts) && index !== 0) {
                let value = parts[index];
                parts.splice(index, 1);
                parts.splice(index - 1, 0, value);
            }
        } else if (element.includes('Move Right')) {
            let index = Number(element.split(' ')[2]);
            if (checkIndexes(index, parts)) {
                let value = parts[index];
                parts.splice(index, 1);
                parts.splice(index + 1, 0, value);
            }
        } else if (element.includes('Even')) {
            let r = [];
            parts.forEach(function (e, index) {
                if (index % 2 === 0) {
                    r.push(e);
                }
            });
            console.log(r.join(' '));
        } else if (element.includes('Odd')) {
            let r = [];
            parts.forEach(function (e, index) {
                if (index % 2 !== 0) {
                    r.push(e);
                }
            });
            console.log(r.join(' '));
        } else {
            console.log(`You crafted ${parts.join('')}!`);
        }
    });

    function checkIndexes(index, array) {
        return index >= 0 && index < array.length;

    }
}