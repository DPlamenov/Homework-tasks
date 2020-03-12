function solve(input) {
    let employees = input.slice(0, 3).map(Number);
    let peopleCount = input.slice(3).map(Number)[0];

    let totalPerHour = employees.reduce((a, b) => a + b, 0);
    let hour = 0;
    while (peopleCount > 0){
        hour++;
        if(hour % 4 === 0){
            continue;
        }
        peopleCount -= totalPerHour;
    }
    console.log(`Time needed: ${hour}h.`);
}
