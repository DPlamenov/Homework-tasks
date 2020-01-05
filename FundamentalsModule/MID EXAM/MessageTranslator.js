//Final Exam
function solve(input) {
    function isValid(command) {
        let firstValid = false;
        let secondValid = false;
        let result = [];
        if (command.includes(':')) {
            let firstPart = command.split(':')[0];
            let secondPart = command.split(':')[1];
            if (firstPart[0] === "!" && firstPart[firstPart.length - 1] === "!") {
                if (firstPart[1].toUpperCase() === firstPart[1]) {
                    let arrayFirstPart = firstPart.split('').slice(2, firstPart.length - 1);
                    let flagIsAllLower = true;
                    let flagMin3Symbol = true;
                    if (arrayFirstPart.length + 1 <= 3) {
                        flagMin3Symbol = false;
                    }
                    arrayFirstPart.forEach(function (value, index, array) {
                        if (value.toLowerCase() !== value) {
                            flagIsAllLower = false;
                        }
                    });
                    if (flagIsAllLower && flagMin3Symbol) {
                        result.push(firstPart.split('').slice(1, firstPart.length - 1).join(''));
                        firstValid = true;
                    }
                }
            }
            if (secondPart[0] === "[" && secondPart[secondPart.length - 1] === "]") {
                if (secondPart.slice(1, secondPart.length - 1).length >= 8) {
                    result.push(secondPart.split('').slice(1, secondPart.length - 1).join(''));
                    let isOnlyAlpha = secondPart.split('').slice(1, secondPart.length - 1).every(function (value, index, array) {
                        return ((value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) || (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122))
                    });
                    if (isOnlyAlpha) {
                        secondValid = true;
                    }

                }
            }
        }
        if (firstValid && secondValid) {
            result.push(true);
        } else {
            result.push(false);
        }
        if (result[result.length - 1] === true) {
            result.unshift(result.pop());
        }
        if (result.includes(false)) {
            result = [];
        }

        return result;
    }

    let count = input.shift();
    for (let i = 0; i < count; i++) {
        let currentCommand = input.shift();
        let valid = isValid(currentCommand);
        let msgOutput = "";
        if (valid[0]) {
            msgOutput += `${valid[1]}: `;
            let ascii = valid[2].split('').map(el => el.charCodeAt(0)).join(' ');
            msgOutput += ascii;
            console.log(msgOutput);
        } else {
            console.log("The message is invalid");
        }

    }
}
