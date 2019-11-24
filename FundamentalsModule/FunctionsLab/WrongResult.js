function f(num1, num2, num3) {
    function wrongResult(num1, num2, num3) {
        let negativeNumbers = 0;
        if (num1 < 0) {
            negativeNumbers++;
        }
        if (num2 < 0) {
            negativeNumbers++;
        }
        if (num3 < 0) {
            negativeNumbers++;
        }
        let result = num1 * num2 * num3;

        if (negativeNumbers % 2 === 0 || result === 0) {
            return "Positive";
        }
        return "Negative";
    }

    console.log(wrongResult(num1, num2, num3));
}