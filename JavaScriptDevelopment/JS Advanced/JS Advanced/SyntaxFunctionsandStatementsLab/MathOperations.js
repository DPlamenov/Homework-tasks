function solve(...input) {
    let a = input[0];
    let b = input[1];
    let operator = input[2];

    let result;
    switch (operator) {
        case '+':
            result = sum(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '%':
            result = modulo(a, b);
            break;
        case '**':
            result = power(a, b);
            break;
    }

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function modulo(a, b) {
        return a % b;
    }

    function power(a, b) {
        return a ** b;
    }

    console.log(result);
}

solve(5, 6, '+');