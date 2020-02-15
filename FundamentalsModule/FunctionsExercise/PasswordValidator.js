function f(password) {
    function validate(password) {
        let output = [];
        if (password.length < 6 || password.length > 10) {
            output.push("Password must be between 6 and 10 characters");
        }
        let a = password.match("\b[A-Za-z0-9]+\b");
        if (a === null) {
            output.push("Password must consist only of letters and digits");
        }


        function parse(num) {
            return Number(num);
        }

        let number = 0;
        password.split('').forEach(function (value, index, array) {
            if (parse(value) === value) {
                number++;
            }
        });
        if (number < 2) {
            output.push('Password must have at least 2 digits');
        }
        if (output.length === 0) {
            output.push('Password is valid');
        }
        return output;
    }

    function print(arr) {
        arr.forEach(function (value) {
            console.log(value);
        })
    }

    print(validate(password));
}

f('logIn');