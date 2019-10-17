function f(string) {
    let arr = string.toString().split('');
    for (let i = 0; i < arr.length / 2; i++) {
        let last = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = last;
    }
    let str = arr.join('');
    console.log(str);
}
