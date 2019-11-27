function solve(arr) {
    arr = arr.filter((num, index) => index % 2 !== 0).map(e => e * 2).reverse().join(' ');
    console.log(arr);
}