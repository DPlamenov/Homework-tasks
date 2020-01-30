function solve(input) {
    input = input.map(Number);
    let journeyCost = input[0];
    let months = input[1];

    let saved = 0;

    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0 && i !== 1) {
            saved *= 0.84;
        }
        if (i % 4 === 0) {
            saved *= 1.25;
        }
        saved += journeyCost * 0.25;
    }
    if (saved >= journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(saved - journeyCost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(journeyCost - saved).toFixed(2)}lv. more.`);
    }
}

solve(['1000', '4']);
solve([3265, 3]);