function f(n, power) {
    function p(n, power) {
        let result = 1;
        for (let i = 1; i <= power ; i++) {
            result *= n;
        }
        return  result;
    }
    return p(n, power);
}