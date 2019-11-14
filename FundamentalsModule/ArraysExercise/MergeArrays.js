function f(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            arr3.push(arr1[i] + arr2[i]);
        }
    }
    let result = arr3.join(' - ');
    console.log(result);
}