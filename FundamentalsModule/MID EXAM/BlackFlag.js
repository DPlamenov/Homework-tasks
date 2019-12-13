function solve(input) {
    let collected = 0;
    for (let i = 1; i <= input[0]; i++) {
        collected += Number(input[1]);
        if (i % 3 === 0) {
            collected += Number(input[1] * 0.5);
        }
        if (i % 5 === 0) {
            collected *= 0.7;
        }
        //console.log(collected, i);
    }
    if (collected >= input[2]) {
        console.log(`Ahoy! ${collected.toFixed(2)} plunder gained.`);
    }else{
        let percentage = collected / input[2] * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve([5, 40, 100]);
solve([10, 20, 380]);

function f(a1) {
    console.log(a1[0], a1[1], a1[2]);

}