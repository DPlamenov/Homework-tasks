function solve(input) {
    let counter = 0;
    input.forEach(function (element, row) {
        // element = element.map(Number);
        element.forEach(function (el, column) {
            let neighbors = getNeighbors(row, column, input);
            if (neighbors.includes(el)) {
                counter += neighbors.filter(e => e === el).length;
            }
        })
    });
    console.log(counter / 2);

    function getNeighbors(row, column, matrix) {
        // console.log(row, column);
        let result = [];

        //upper
        if (row > 0) {
            let _upper = matrix[row - 1][column];
            result.push(_upper);
        }
        //lower
        if (row < matrix.length - 1) {
            let _lower = matrix[row + 1][column];
            result.push(_lower);
        }
        //right
        if (column < matrix[0].length - 1) {
            let _right = matrix[row][column + 1];
            result.push(_right);
        }
        //left
        if (column > 0) {
            let _right = matrix[row][column - 1];
            result.push(_right);
        }
        return result;
    }
}

solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);