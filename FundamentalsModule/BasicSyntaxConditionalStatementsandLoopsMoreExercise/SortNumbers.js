function f(x1, x2, x3) {
    let arr = [x1, x2, x3];
    arr.sort(function (a, b) {
       return b-a;
    });
    for (let i = 0; i < arr.length;  i++) {
        console.log(arr[i]);
    }
}
