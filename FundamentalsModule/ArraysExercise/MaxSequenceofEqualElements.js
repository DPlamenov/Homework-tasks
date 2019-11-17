function f(arr) {
    let maxLength = -1;
    let endIndex = 0;
    let length = 0;
    let numbers = arr;
    for (let i = 0; i < arr.length; i++) {
        numbers[i] = Number(arr[i]);
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            length++;
            if (i + 1 === numbers.length - 1 && maxLength < length) {
                maxLength = length;
                endIndex = i + 1;
            }
        } else {
            if (maxLength < length) {
                maxLength = length;

                endIndex = i;
            }

            length = 0;
        }
    }
    let result = "";
    for (let i = 0; i < maxLength + 1; i++) {
        result += `${numbers[endIndex]} `;

    }
    console.log(result);
}


// //[2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	2 2 2
// // [1, 1, 1, 2, 3, 1, 3, 3]	1 1 1
// // [4, 4, 4, 4]	4 4 4 4
// // [0, 1, 1, 5, 2, 2, 6, 3, 3]	1 1
// f([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// f([1, 1, 1, 2, 3, 1, 3, 3]);
// f([4, 4, 4, 4]);
// f([0, 1, 1, 5, 2, 2, 6, 3, 3]);