function f(num) {
    if(num.length === 1){
        return num[0];
    }
    let condenseArray = [];
    for (let i = 0; i < num.length; i++) {
        condenseArray[i] = num[i] + num[i + 1];

    }
    while (!isNaN(condenseArray[1])) {
        for (let i = 0; i < num.length; i++) {
            condenseArray[i] = num[i] + num[i + 1];
        }
        num = condenseArray;
    }
    console.log(condenseArray[0]);
}