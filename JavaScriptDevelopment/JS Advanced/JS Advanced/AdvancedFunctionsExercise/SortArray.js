function solve(array, sort) {
    return array.sort((a, b) => {
        if (sort === 'asc') {
            return a - b;
        }
        return b - a;
    });
}
