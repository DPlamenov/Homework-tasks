function solve(str, count) {
    function repeat(str, count) {
        let result = "";
        for (let i = 1; i <= count ; i++) {
            result += str;
        }
        return result;
    }

    return repeat(str, count);
}