function solve(input) {
    return input.map(e => {
        if (e % 2 === 0) {
            return e * 2;
        }

        return e * 3;
    });
}