function solve(matrix) {
    let sumOfAllRows = rowSum(matrix);
    let sumOfAllColumns = columnSum(matrix);

    if (sumOfAllRows && sumOfAllColumns) {
        console.log('true');
    } else {
        console.log('false');
    }

    function rowSum(matrix) {
        let result = [];
        matrix.forEach(function (element) {
            let sum = element.reduce((a, b) => a + b, 0);
            result.push(sum);
        });

        return result.every(function (element) {
            return element === result[0];
        });
    }

    function columnSum(matrix) {
        let result = [];
        for (let i = 0; i < matrix.length; i++) {
            let sum = 0;
            for (let j = 0; j < matrix.length; j++) {
                sum += matrix[j][i];
            }
            result.push(sum);
        }

        return result.every(function (element) {
            return element === result[0];
        });
    }
}