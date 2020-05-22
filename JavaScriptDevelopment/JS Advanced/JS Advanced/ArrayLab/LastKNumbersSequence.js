function solve(n, k) {
    let counter = 1;
    let output = [1];
    while (output.length < n) {
        let toAdd = 0;
        let toAddExtract = output.slice(Math.max(0, output.length - k));
        toAdd = toAddExtract.reduce((acc, current) => acc + current, 0);
        output.push(toAdd);
        counter++;
    }
    console.log(output.join(' '));
}


solve(10, 5);