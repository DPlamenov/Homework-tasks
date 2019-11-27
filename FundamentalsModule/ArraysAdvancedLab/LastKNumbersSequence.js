function solve(n, k) {
    let counter = 1;
    let output = [1];
    while (output.length < n) {
        let toAdd = 0;
        let toAddExtract = output.slice(Math.max(0, output.length - k ), output.length + 1);
        toAdd = toAddExtract.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        output.push(toAdd);
        counter++;
    }
    console.log(output.join(' '));
}