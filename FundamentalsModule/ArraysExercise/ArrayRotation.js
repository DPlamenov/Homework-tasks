function f(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }

    console.log(arr.join(' '));
}