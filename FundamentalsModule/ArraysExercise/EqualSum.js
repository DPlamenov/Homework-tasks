function f(arr) {
    let left = 0;
    let right = 0;
    let isValid = false;
    for (let i = 0; i < arr.length; i++) {
        left = 0;
        right = 0;
        for (let j = 0; j < i; j++) { //left
            left += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) { //right
            right += arr[j];
        }
        if(left === right){
            isValid = true;
            console.log(i);
            break;
        }
    }
    if(!isValid){
        console.log('no');
    }
}