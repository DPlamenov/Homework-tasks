function pyramid(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold;
    let row = 0;

    while (base > 2) {
        let marbel = base * 4 - 4;
        let stone = base * base - marbel;
        totalStone += stone;


        if (row % 5 === 0) {
            totalLapis += marbel;
        } else {
            totalMarble += marbel;
        }
        row++;
        base -= 2;
    }
    row++;
    let gold = base * base * increment;
    let stone = Math.ceil(totalStone * increment);
    let marble = Math.ceil(totalMarble * increment);
    let lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold);
    let totalHeight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}