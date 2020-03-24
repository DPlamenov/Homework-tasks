function solve(input) {
    let pattern = /(.+?)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]+)<\1/;

    let counterOfInput = input.shift();
    for (let i = 0; i < counterOfInput; i++) {
        let currentMsg = input[i];
        let result = isValid(pattern, currentMsg);

        if (result) {
            let groups = result.slice(2);
            let password = groups.join('');
            console.log(`Password: ${password}`);

        } else {
            console.log("Try another password!");
        }

    }
    function isValid(pattern, text) {
        let result = text.match(pattern);


        return result;
    }
}

solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]
);
console.log('-------------');
solve(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*'
    ]

);