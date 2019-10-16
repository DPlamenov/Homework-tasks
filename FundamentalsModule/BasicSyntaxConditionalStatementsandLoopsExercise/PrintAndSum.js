function f(start, stop) {
    let sum = 0;
    let result = "";
    for (let i = start; i <= stop ; i++) {
        result += i + " ";
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
