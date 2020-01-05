function solve(arr) {
    let step = Number(arr.pop());
    let newArray = [];
    for (let i = 0; i < arr.length; i += step) {
        newArray.push(arr[i]);
    }
    console.log(newArray.join(' '));
}