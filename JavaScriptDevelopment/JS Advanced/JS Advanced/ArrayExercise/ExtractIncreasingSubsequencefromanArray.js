function solve(input) {
    let biggest = 0;
    let result = input.reduce((a, b) => {
        if(b > biggest){
            biggest = b;
            a.push(b);
        }
        return a;
    }, []).join('\n');
    console.log(result);
}
