function solve(arr) {
    let result = [];
    let n = 1;
    arr.forEach(function (value) {
        if (value === "add") {
            result.push(n);
        } else if (value === "remove") {
            result.pop();
        }
        n++;
    });
    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(' '));
    }
}