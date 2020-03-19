function solve(input) {
    for (let element of input) {
        let isValid = isValidCheck(element.trim());
        if (isValid) {
            let decryptedCode = decrypt(isValid.geohash, isValid.length);
            console.log(`Coordinates found! ${isValid.name} -> ${decryptedCode}`);
            break;
        } else {
            console.log(`Nothing found!`);
        }
    }

    function isValidCheck(message) {
        let pattern = /([#$%*&])(?<name>[A-z]+)\1=(?<length>\d+)!!(?<geohash>.+)$/g; //gm
        let result = pattern.exec(message);
        let returnObject = {};
        if (result !== null && result.groups.geohash.length === Number(result.groups.length)) {
            returnObject.name = result.groups.name;
            returnObject.length = result.groups.length;
            returnObject.geohash = result.groups.geohash;
            return returnObject;
        }
        return null;
    }


    function decrypt(message, key) {
        let newMessage = [];

        for (let char of message) {
            let newChar = char.charCodeAt(0) + Number(key);
            newMessage.push(String.fromCharCode(newChar));
        }
        return newMessage.join('');
    }
}

solve([
        '%GiacomoAgostini%=7!!hbqw',
        '&GeoffDuke*=6!!vjh]zi',
        'JoeyDunlop=10!!lkd,rwazdr',
        'Mike??Hailwood=5!![pliu',
        '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
    ]
);