function solve(input) {
    let matrix = input.map(e => e.split(' ').map(Number));
    let sum = sumDiagonals(matrix);

    let matrix2 = [];
    if (sum.d1 === sum.d2) {
        matrix.forEach(function (element, row) {
            let array = [];
            element.forEach(function (element2, column) {
                let isPart = isPartOfDiagonal(row, column, matrix);
                if (!isPart) {
                    array.push(sum.d1);
                } else {
                    array.push(element2);
                }
            });
            matrix2.push(array);
        })
    }

    if (matrix2.length === 0) {
        matrix2 = matrix;
    }

    matrix2.forEach(function (row) {
        console.log(row.join(' '));
    });

    function sumDiagonals(matrix) {
        let d1 = 0;
        let d2 = 0;

        for (let i = 0; i < matrix.length; i++) {
            d1 += matrix[i][i];
            d2 += matrix[i][matrix.length - 1 - i];
        }

        return {d1, d2};
    }

    function isPartOfDiagonal(row, column, matrix) {
        if (row === column) {
            return true;
        }
        return column === matrix.length - 1 - row;
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

);