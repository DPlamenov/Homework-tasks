
for (let i = 1; i <= 300; i++) {
    let resultFromMidExam = 300 * 0.4;
    let currentResult = i * 0.6;
    console.log(`---`);
    console.log(i);
    console.log((resultFromMidExam + currentResult).toFixed(2));
    console.log(((resultFromMidExam + currentResult) / 300 * 4 + 2).toFixed(2));

}