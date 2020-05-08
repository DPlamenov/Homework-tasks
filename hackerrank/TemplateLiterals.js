function solve(...expressions) {
    // console.log(expressions);
    let [a, p] = expressions;
    let s = Math.sqrt(Math.pow(p, 2) - 16 * a);
    let s1 = (p - s) / 4;
    let s2 = (p + s) / 4;

    let result = [s1, s2];

    return result.sort((a, b) => a - b);
}
