function f(n1, n2, n3) {
    function sum(n1, n2) {
        let sum = (a, b) => (a + b);
        return sum(n1, n2);
    }

    function subtract(n1, n2,) {
        let subtract = (a, b) => (a - b);
        return subtract(n1, n2);
    }

    let result = subtract(sum(n1, n2), n3);
    console.log(result);
}