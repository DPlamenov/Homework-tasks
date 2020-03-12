function solve(input) {
    let count = Number(input.shift());
    let totalUser = 0;
    // input = input.filter(e => e !== '');
    for (let i = 0; i < count; i++) {
        let element = input[i];
        let result = validate(element);
        if (result) {
            console.log("Registration was successful");
            console.log(`Username: ${result.username}, Password: ${result.password}`);
            totalUser++;
        } else {
            console.log("Invalid username or password");
        }
    }

    console.log(`Successful registrations: ${totalUser}`);

    function validate(string) {
        let pattern = /\bU\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-z]{5,}.*?\d)P@\$/g;

        let result = pattern.exec(string);
        if (result !== null) {
            return {username: result.groups.username, password: result.groups.password};
        }
    }
}

solve([
        '3',
        'U$myU$-->P@$asdqwe123P@$',
        'Sara 1232412',
        'U$NameU$P@$Pass234P@$'
    ]
);