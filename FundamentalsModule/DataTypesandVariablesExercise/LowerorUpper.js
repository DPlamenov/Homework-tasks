function f(a) {
    let asciiCode = a.charCodeAt(0);
    if(asciiCode >= 65 && asciiCode <= 90){
        console.log("upper-case");
    }else{
        console.log("lower-case");
    }
}