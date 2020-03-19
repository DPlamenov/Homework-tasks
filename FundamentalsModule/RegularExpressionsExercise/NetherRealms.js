function solve(input) {
    let demons = input[0].split(/[, ]+/g);
    let result = {};
    demons.forEach(function (element) {
        let health = calculateHealth(element);
        let damage = calculateDamage(element);
        result[element] = [health, damage];
    });

    Object.entries(result).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    }).forEach(el => {
        console.log(`${el[0]} - ${(el[1][0])} health, ${(el[1][1]).toFixed(2)} damage`);
    });

    function calculateHealth(demonName) {
        let healthChars = demonName.split('')
            .filter(char => /[^0-9.\/+*-]/.test(char));
        return getAsciiSum(healthChars);
    }

    function getAsciiSum(chars) {
        return chars.reduce((acc, currentValue) => {
            acc += currentValue.charCodeAt(0);
            return acc;
        }, 0);
    }

    function calculateDamage(demonName) {
        let damage = 0;
        let pattern = /[+-]?\d+\.?\d*/g;
        let secondOperation = demonName.split('').filter(e => e === '*' || e === '/');
        let resultOfRegex = demonName.match(pattern);
        if(resultOfRegex !== null){
            let digits = resultOfRegex;
            if (digits != null) {
                for (const digit of digits) {
                    damage += Number(digit);
                }
            }
            secondOperation.forEach(operation => {
                if (operation === '*') {
                    damage *= 2
                } else if (operation === '/') {
                    damage /= 2;
                }
            });
        }
        return damage;
    }
}