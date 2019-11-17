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
    let r = "";
    for (let j = 0; j < arr2.length; j++) {
        r += `${arr2[j]} `;
    }
    console.log(r);
}