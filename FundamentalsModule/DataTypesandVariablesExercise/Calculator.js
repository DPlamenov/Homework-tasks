function f(x, oper, y) {
    let r = Number(x) + oper + Number(y);
    r = eval(r).toFixed(2);
    console.log(r);
}