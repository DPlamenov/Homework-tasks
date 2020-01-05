function solve(input) {
    let partySize = Number(input[0]);
    let days = Number(input[1]);
    let companions = partySize;
    let coins = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0) {
            companions -= 2;
        }
        if (i % 15 === 0) {
            companions += 5;
        }
        coins += 50;
        coins -= 2 * companions;
        if (i % 3 === 0) {
            coins -= 3 * companions;
        }
        if (i % 5 === 0) {
            if (i % 3 === 0) {
                coins -= 2 * companions;
            }
            coins += 20 * companions;
        }

    }
    console.log(`${companions} companions received ${Math.floor(coins / companions)} coins each.`);
}

solve(['3', '5']);
solve(['15', '30']);