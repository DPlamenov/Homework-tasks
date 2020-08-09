function f(num) {
    const condenseArray = num;

    while (!isNaN(condenseArray[1])) {
        for (let i = 0; i < num.length; i++) {
            condenseArray[i] = num[i] + num[i + 1];
        }
        num = condenseArray;
    }
    console.log(condenseArray[0]);



}

f([1, 2]);