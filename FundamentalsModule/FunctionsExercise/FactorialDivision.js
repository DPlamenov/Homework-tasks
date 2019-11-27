function solve(a, b) {
    function calcFactorial(a, b) {
        let result = [];
        let factA = 1;
        let factB = 1;
        for (let i = 1; i <= a; i++) {
            factA *= i;
        }
        for (let i = 1; i <= b; i++) {
            factB *= i;
        }
        result.push(factA);
        result.push(factB);

        return result;
    }

    function division(arr) {
        return arr[0] / arr[1];
    }

    let factorial = calcFactorial(a, b);
    let result = division(factorial);
    console.log(result.toFixed(2));
}