function solve(input) {
    input = input.map(Number);
    let sizeOfSide = input[0];
    let sheetsOfPaper = input[1];
    let areaCoveredBySingle = input[2];

    let giftBox = sizeOfSide * sizeOfSide * 6;
    let covered = 0;
    for (let i = 1; i <= sheetsOfPaper; i++) {
        if (i % 3 === 0) {
            covered += areaCoveredBySingle * 0.25;
        } else {
            covered += areaCoveredBySingle;
        }
    }
    let percentage = covered / giftBox * 100;
    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
}

solve(['5', '30', '4']);