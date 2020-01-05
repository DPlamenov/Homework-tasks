function solve(arr) {
    let lastElement = Number(arr.pop());
    for (let i = 1; i <= lastElement; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}