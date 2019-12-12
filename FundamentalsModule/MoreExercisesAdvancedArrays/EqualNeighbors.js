function solve(matrix) {
    let arr = [];
    let rows = matrix.length;
    let columns = matrix[0].length;
    matrix.forEach(function (element) {
        arr = arr.concat(element);
    });
    let countOfPairs = 0;
    let newArr = arr;
    arr.forEach(function (value, index, array) {
        if (newArr[index + 1] === value) {
            countOfPairs++;
            newArr.splice(index, 2);
        }
        if (newArr[index - 1] === value) {
            countOfPairs++;
            newArr.splice(index - 1, 2);
        }
    });
    matrix.forEach(function (element, index, array) {
        element.forEach(function (el, index2, array2) {
            if (index + 1 !== array.length) {
                if(el === array[index + 1][index2]){
                    let firstIndex = array2.indexOf(el);
                    let secondIndex = array.indexOf(array[index + 1][index2]);


                    countOfPairs++;
                }
            }
        });
    });
    console.log(countOfPairs);
}

solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);