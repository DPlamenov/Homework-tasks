function f(x1, y1, x2, y2) {
    let x = Math.pow(Math.abs(x1 - x2), 2);
    let y = Math.pow(Math.abs(y1 - y2), 2);
    return Math.sqrt(x + y);
}