function solve(input) {
    let amountOfBiscuits = Number(input[0]);
    let countOfTheWorkers = Number(input[1]);
    let otherFactory = Number(input[2]);

    let totalProduce = 0;
    for (let i = 1; i <= 30; i++) {
        let produce = amountOfBiscuits * countOfTheWorkers;
        if (i % 3 === 0) {
            produce *= 0.75;
        }
        produce = Math.floor(produce);
        totalProduce += produce;
    }
    console.log(`You have produced ${totalProduce} biscuits for the past month.`);
    let percentage = 0;
    if (totalProduce > otherFactory) {
        percentage = (totalProduce / otherFactory * 100 - 100).toFixed(2);
        console.log(`You produce ${percentage} percent more biscuits.`);
    } else {
        percentage = Math.abs((totalProduce / otherFactory * 100 - 100)).toFixed(2);
        console.log(`You produce ${percentage} percent less biscuits.`);
    }
}