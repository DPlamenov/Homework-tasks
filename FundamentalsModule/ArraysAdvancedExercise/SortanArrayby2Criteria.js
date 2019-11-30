function solve(input) {
    input.sort(function (a, b) {
        if (a.length.toString().localeCompare(b.length.toString()) === 0) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        return a.length.toString().localeCompare(b.length.toString());
    });
    console.log(input.join('\n'));
}
