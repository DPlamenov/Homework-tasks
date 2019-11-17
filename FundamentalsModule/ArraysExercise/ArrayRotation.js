function f(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr[i]);
        arr[i] = undefined;
    }
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined){
            output+= `${arr[i]} `;
        }
    }
    console.log(output);
}