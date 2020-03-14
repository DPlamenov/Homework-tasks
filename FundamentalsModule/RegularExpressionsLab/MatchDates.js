function solve(input){
    let pattern = /(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let dates = input[0];
    let validDate;
    while ((validDate = pattern.exec(dates)) !== null){
        let groups = validDate.groups;
        let day = groups.day;
        let month = groups.month;
        let year = groups.year;

        let output = `Day: ${day}, Month: ${month}, Year: ${year}`;
        console.log(output);
    }

}

solve([
        '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
    ]
);