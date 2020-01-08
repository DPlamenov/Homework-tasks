function solve(input) {
    let budget = Number(input[0]);
    let priceOfFlour = Number(input[1]);
    let cozonacsPrice = (0.75 * priceOfFlour) + (1.25 * priceOfFlour / 4) + priceOfFlour;

    let count = Math.floor(budget / cozonacsPrice);
    budget -= count * cozonacsPrice;
    let easterEggs = 0;
    for (let i = 1; i <= count; i++) {
        easterEggs += 3;
        if (i % 3 === 0) {
            easterEggs -= i - 2;
        }
    }
    console.log(`You made ${count} cozonacs! Now you have ${easterEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}
