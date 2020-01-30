function f(startingYield) {
    let days = 0;
    let totalExtracted = 0;
    if (startingYield < 100) {
        console.log(days);
        console.log(totalExtracted);
        return;
    }
    let minusYield = 0;
    while (startingYield - minusYield >= 100) { //2

        totalExtracted += (startingYield - minusYield);
        if (totalExtracted < 26) {
            totalExtracted = 0;
        } else {
            totalExtracted -= 26;
        }
        minusYield += 10;
        days++;
    }
    totalExtracted -= 26;
    console.log(days);
    console.log(totalExtracted);
}
