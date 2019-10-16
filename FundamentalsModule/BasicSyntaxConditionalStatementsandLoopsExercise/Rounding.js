function solve(n, to) {
    if(to > 15){
        to = 15;
    }
    let a =  n.toFixed(to);
    return parseFloat(a);

}
