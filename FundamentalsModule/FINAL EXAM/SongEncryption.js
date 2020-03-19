function solve(input) {

    for (let element of input) {
        if (element === 'end') {
            break;
        }
        let isValid = isTextValid(element);
        if (isValid) {
            let key = Number(isValid.artist.length);
            let arrayOfElement = element.split('');
            let needToChange = false;
            for (let i = 0; i < arrayOfElement.length; i++) {
                if (arrayOfElement[i] === "'" || arrayOfElement[i] === " ") {
                    continue;
                }
                if (arrayOfElement[i] === ":") {
                    arrayOfElement[i] = '@';
                    continue;
                }
                let before = arrayOfElement[i];
                arrayOfElement[i] = (arrayOfElement[i].charCodeAt(0));
                if (before.toLowerCase() === before && arrayOfElement[i] + key > 122) {
                    arrayOfElement[i] = arrayOfElement[i] + key - 26;
                } else if (before.toUpperCase() === before && arrayOfElement[i] + key > 90) {
                    arrayOfElement[i] = arrayOfElement[i] + key - 26;

                } else {
                    arrayOfElement[i] = arrayOfElement[i] + key;
                }
                arrayOfElement[i] = String.fromCharCode(arrayOfElement[i]);
            }
            arrayOfElement = arrayOfElement.join('');
            console.log(`Successful encryption: ${arrayOfElement}`);
        } else {
            console.log('Invalid input!');
        }
    }


    function isTextValid(text) {
        let pattern = /^(?<artist>[A-Z][a-z\s']+):(?<song>[A-Z\s]+)$/g;
        let result = pattern.exec(text);
        return result !== null ? result.groups : null;
    }
}

solve([
        'Michael Jackson:ANOTHER PART OF ME',
        'Adele:ONE AND ONLY',
        "Guns n'roses:NOVEMBER RAIN",
        'Christina Aguilera: HuRt',
        'end'
    ]
);

