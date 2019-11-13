function f(arr) {
    let first = arr.shift();
    let last = arr.pop();

    let sum = Number(first) + Number(last);
    console.log(sum);
}
