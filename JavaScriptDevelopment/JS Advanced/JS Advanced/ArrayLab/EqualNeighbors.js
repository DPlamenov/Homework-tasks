function equalNeighbors(matrix = []) {
    // Mask
    let neighbors = matrix.reduce((acc, current, rowIndex) => {
        return current.reduce((acc, item, itemIndex) => {
            if (item === current[itemIndex + 1]) {
                acc++;
            }
            if (item === (matrix[rowIndex + 1] || [])[itemIndex]) {
                acc++;
            }
            return acc;
        }, acc);
    }, 0);
    console.log(neighbors);
}