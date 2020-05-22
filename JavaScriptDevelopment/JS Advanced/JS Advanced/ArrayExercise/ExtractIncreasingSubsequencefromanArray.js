function solve(input) {
    let result = input.reduce((a, b) => {
        if (b >= Math.max(...a)) {
            a.push(b);
        }
        return a;
    }, []).join('\n');

    console.log(result);
}
