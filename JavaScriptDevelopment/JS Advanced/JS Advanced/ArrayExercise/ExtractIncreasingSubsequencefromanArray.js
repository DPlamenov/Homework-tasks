function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = input.reduce((a, b) => {
        if(b >= biggest){
            biggest = b;
            a.push(b);
        }
        return a;
    }, []).join('\n');
    console.log(result);
}
