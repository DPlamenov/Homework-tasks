function solve(input) {
    let [x1, y1, x2, y2] = input.map(Number);

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

    function isValid(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        let isValid = Number.isInteger(Math.sqrt(distH ** 2 + distY ** 2)) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }
}

solve(['3', '0', '0', '4']);