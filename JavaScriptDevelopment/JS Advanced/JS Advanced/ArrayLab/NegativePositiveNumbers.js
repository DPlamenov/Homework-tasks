function solve(input) {
    let result = [];

    input.forEach(function (element) {
        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    });
    result.forEach((element) => {
        console.log(element);
    });
}


solve([7, -2, 8, 9]);