function solve(input) {
    let username = input.shift();
    input.forEach(element => {
        let [command, ...arguments] = element.split(' ');
        if (command === 'Case') {
            switch (arguments[0]) {
                case 'lower':
                    username = username.toLowerCase();
                    break;
                case 'upper':
                    username = username.toUpperCase();
                    break;
            }
            console.log(username);
        } else if (command === 'Reverse') {
            let startIndex = Number(arguments[0]);
            let endIndex = Number(arguments[1]);

            if (startIndex >= 0 && startIndex < username.length && endIndex >= 0 && endIndex < username.length) {
                let substring = username.substring(startIndex, endIndex + 1).split('').reverse().join('');
                console.log(substring);
            }
        } else if (command === 'Cut') {
            let substring = arguments[0];
            if (username.includes(substring)) {
                username = username.replace(substring, '');
                console.log(username);

            } else {
                console.log(`The word ${username} doesn't contain ${substring}.`);

            }
        } else if (command === 'Replace') {
            let char = arguments[0];
            while (username.includes(char)) {
                username = username.replace(char, '*');
            }
            console.log(username);

        } else if (command === 'Check') {
            let char = arguments[0];
            if (username.includes(char)) {
                console.log('Valid');
            } else {
                console.log(`Your username must contain ${char}.`);
            }
        }

    });
}

solve(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']);