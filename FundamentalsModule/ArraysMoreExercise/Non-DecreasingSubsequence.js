function solve(arr) {
    let currentMax = arr[0];
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentMax) {
            newArray.push(arr[i]);
            currentMax = arr[i];
        }
    }
    console.log(newArray.join(' '));
}