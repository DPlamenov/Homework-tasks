function f(numOne, numTwo, operator) {
    function calc(numOne, numTwo, operator) {
        let result;
        switch (operator) {
            case "multiply":
                let multiply = (a, b) => a * b;
                result = multiply(numOne, numTwo);
                break;
            case "divide":
                let divide = (a, b) => a / b;
                result = divide(numOne, numTwo);
                break;
            case "add":
                let add = (a, b) => a + b;
                result = add(numOne, numTwo);
                break;
            case "subtract":
                let subtract = (a, b) => a - b;
                result = subtract(numOne, numTwo);
                break;
        }
        return result;
    }

    console.log(calc(numOne, numTwo, operator));

}