function f(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = 0; j < i.toString().length ; j++) {
            sum += parseInt( i.toString().charAt(j));
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}