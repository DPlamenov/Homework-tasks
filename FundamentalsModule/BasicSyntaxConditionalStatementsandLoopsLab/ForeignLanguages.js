function solve(county) {
    if (county === "England" || county === "USA") {
        console.log("English");
    } else if (county === "Spain" || county === "Argentina" || county === "Mexico") {
        console.log("Spanish");
    }else{
        console.log("unknown");
    }
}