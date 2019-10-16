function nextDay(year, month, day) {
    let dateNow = new Date(year, month - 1,day);
    let oneDay = 24 * 60 * 60 * 1000;
    let tomorrow = new Date(dateNow.getTime() + oneDay);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);

}
