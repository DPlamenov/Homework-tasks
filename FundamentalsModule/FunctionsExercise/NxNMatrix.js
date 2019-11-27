function f(n) {
    function matrix(n) {
        const output = [];
        for (let i = 0; i < n; i++) {
            output.push((n + " ").toString().repeat(n).trim());
        }
        output.forEach(function (value) {
            console.log(value);
        });
    }

    matrix(n);
}
