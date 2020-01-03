function solve(input) {
    input = input.map(Number);
    let stepsMade = input[0];
    let lengthOfSteps = input[1];
    let needDistance = input[2];
    let travelled = 0;
    for (let i = 1; i <= stepsMade; i++) {
        if (i % 5 === 0) {
            travelled -= 0.3 * lengthOfSteps;
        }
        travelled += lengthOfSteps;
    }
    console.log(`You travelled ${(travelled / needDistance).toFixed(2)}% of the distance!`);
}