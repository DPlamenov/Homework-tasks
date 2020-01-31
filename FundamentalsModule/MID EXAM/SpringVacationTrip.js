function solve(input) {
    input = input.map(Number);
    let days = input.shift();
    let budget = input.shift();
    let people = input.shift();
    let fuelPerKilometer = input.shift();
    let foodExpenses = input.shift();
    let priceForRoom = input.shift();

    let hotel = days * people * priceForRoom;
    if (people > 10) {
        hotel *= 0.75;
    }
    let food = days * people * foodExpenses;
    let total = hotel + food;
    for (let i = 1; i <= days; i++) {
        total += input[i - 1] * fuelPerKilometer;
        if (i % 3 === 0 || i % 5 === 0) {
            total *= 1.4;
        }
        if (i % 7 === 0) {
            total -= (total / people);
        }
        if (budget < total) {
            break;
        }
    }
    if (budget >= total) {
        console.log(`You have reached the destination. You have ${(budget - total).toFixed(2)}$ budget left.`);
    } else {
        console.log(`Not enough money to continue the trip. You need ${(total - budget).toFixed(2)}$ more.`);
    }
}