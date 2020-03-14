function solve(input) {
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let numberOfMessage = Number(input.shift());
    for (let i = 0; i < numberOfMessage; i++) {
        let currentMessage = input[i];
        let decryptionKey = getDecryptionKey(currentMessage);
        let decryptedMessage = decrypt(currentMessage, decryptionKey);
        let groups = isValidDecryptedMessage(decryptedMessage);
        if (groups !== null) {
            sortMessage(groups, attackedPlanets, destroyedPlanets);
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(function (element) {
        console.log(`-> ${element}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(function (element) {
        console.log(`-> ${element}`);
    });
    function getDecryptionKey(msg) {
        let letterToCount = ['s', 't', 'a', 'r'];
        let key = 0;
        for (let char of msg) {
            char = char.toLowerCase();
            if (letterToCount.includes(char)) {
                key += 1;
            }
        }
        return key;
    }

    function decrypt(message, key) {
        let result = [];
        for (let char of message) {
            let charKey = char.charCodeAt(0);
            result.push(String.fromCharCode(charKey - key));
        }
        return result.join('');
    }

    function isValidDecryptedMessage(message) {
        let pattern = /[^@!\-:>\s]*?@(?<planetName>[A-z]+)[^@!\-:>]*?:(?<planetPopulation>\d+)[^@!\-:>]*?!(?<attackType>[AD])![^@!\-:>]*?->[^@!\-:>]*?(?<soldierCount>\d+)/g;
        let result = pattern.exec(message);
        return result !== null? result.groups : null;
    }

    function sortMessage(messageObject, attack, destroy) {
        if(messageObject.attackType === 'A'){
            attack.push(messageObject.planetName);
            attack.sort((a, b) => a.localeCompare(b));
        } else if(messageObject.attackType === 'D'){
            destroy.push(messageObject.planetName);
            destroy.sort((a, b) => a.localeCompare(b));
        }
    }
}

solve([
        '3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR'
    ]
);