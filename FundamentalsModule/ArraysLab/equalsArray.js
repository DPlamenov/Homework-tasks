function f(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length ; i++) {
        arr2[i] = Number(arr2[i]);
    }
    let identical = true;
    let index = 0;
    let sum = 0;
    for (let i = 0; i < arr1.length ; i++) {
        sum += arr1[i];
        if(arr1[i] !== arr2[i]){
            identical = false;
            index = i;
            break;
        }
    }
    if(identical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}