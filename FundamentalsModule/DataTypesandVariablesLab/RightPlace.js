function f(s1, char, result) {
    let s2 = s1.replace('_', char);
    if(s2 === result){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
}