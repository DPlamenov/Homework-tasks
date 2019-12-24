function solve(input) {
    let indexOfPartyWord = input.indexOf('PARTY');
    let firstPartInput = input.slice(0, indexOfPartyWord);
    let secondPartInput = input.slice(indexOfPartyWord + 1);
    let unComing = firstPartInput.slice();
    let reservation = firstPartInput.slice();
    secondPartInput.forEach(function (element) {
        if(reservation.includes(element)){
            let k = unComing.indexOf(element);
            unComing.splice(k, 1);
        }
    });

    let vip = unComing.filter(el => Number(el.toString().charAt(0)));
    let regular = unComing.filter(el => !Number(el.toString().charAt(0)));
    console.log(vip.length + regular.length);
    vip.forEach(el => console.log(el));
    regular.forEach(el => console.log(el));
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);