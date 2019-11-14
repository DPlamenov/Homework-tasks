function f(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumber <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            arr2.push(currentNumber);
        }
    }
    console.log(arr2);
}