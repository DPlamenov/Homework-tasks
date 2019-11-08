function f(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    let polyPerimeter = (a + b + c) / 2;

    let result = polyPerimeter * (polyPerimeter - a) * (polyPerimeter - b) * (polyPerimeter - c);
    result = Math.sqrt(result);
    console.log(result);
}
