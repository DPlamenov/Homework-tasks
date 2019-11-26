function f(digit) {
    function OddAndEvenSum(digit) {
        let oddSum = 0;
        let evenSum = 0;
        digit = digit.toString();
        for (let i = 0; i < digit.length; i++) {
            if (Number(digit[i]) % 2 === 0) {
                evenSum += Number(digit[i]);
            } else {
                oddSum += Number(digit[i]);
            }
        }
        return [oddSum, evenSum];
    }

    function printArray(resultArray) {
        console.log(`Odd sum = ${resultArray[0]}, Even sum = ${resultArray[1]}`);
    }

    printArray(OddAndEvenSum(digit))
}