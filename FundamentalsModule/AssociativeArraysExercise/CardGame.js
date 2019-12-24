function solve(input) {
    let object = {};
    input.forEach(function (element) {
        let name = element.split(': ')[0];
        let cards = element.split(': ')[1].split(', ');
        if (object.hasOwnProperty(name)) {
            cards.forEach(function (element) {
                object[name].add(element);
            });
        } else {
            object[name] = new Set();
            cards.forEach(function (element) {
                object[name].add(element);
            });
        }
    });
    let array = Object.entries(object);
    array.forEach(function (element) {
        let sum = 0;
        element[1].forEach(function (element) {
            let lastChar = element[element.length - 1];
            element = element.replace(lastChar, '');
            if (!Number(element)) {
                switch (element) {
                    case 'J':
                        element = 11;
                        break;
                    case 'Q':
                        element = 12;
                        break;
                    case 'K':
                        element = 13;
                        break;
                    case 'A':
                        element = 14;
                        break;
                }
            }
            switch (lastChar) {
                case 'S':
                    lastChar = 4;
                    break;
                case 'H':
                    lastChar = 3;
                    break;
                case 'D':
                    lastChar = 2;
                    break;
                case 'C':
                    lastChar = 1;
                    break;
            }
            sum += lastChar * element;

        });
           console.log( `${element[0]}: ${sum}`);
    })

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);