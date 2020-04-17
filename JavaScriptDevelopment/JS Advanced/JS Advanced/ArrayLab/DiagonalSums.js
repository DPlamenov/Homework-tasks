function solve(matrix) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < matrix.length; i++) {
        first += matrix[i][i];
        second += matrix[i][matrix.length - 1 - i];
    }
    console.log(`${first} ${second}`);
    // console.log(second);
}

solve([[20, 40], [10, 60]]);