function solve(numbers, additonal) {
    numbers = numbers.splice(0, additonal[0]);
    numbers.splice(0, additonal[1]);
    let count = 0;
    numbers.forEach(function (value) {
       if(value === additonal[2]){
           count++;
       }
    });
    console.log(`Number ${additonal[2]} occurs ${count} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);