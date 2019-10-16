function f(peopleInGroup, typeGroup, day) {
    let total = 0;
    if (typeGroup === "Students") {
        if (day === "Friday") {
            total = peopleInGroup * 8.45;
        } else if (day === "Saturday") {
            total = peopleInGroup * 9.80;
        } else if (day === "Sunday") {
            total = peopleInGroup * 10.46;
        }
    } else if (typeGroup === "Business") {
        if (day === "Friday") {
            total = peopleInGroup * 10.90;
        } else if (day === "Saturday") {
            total = peopleInGroup * 15.60;
        } else if (day === "Sunday") {
            total = peopleInGroup * 16.00;
        }
    } else if (typeGroup === "Regular") {
        if (day === "Friday") {
            total = peopleInGroup * 15.00;
        } else if (day === "Saturday") {
            total = peopleInGroup * 20.00;
        } else if (day === "Sunday") {
            total = peopleInGroup * 22.50;
        }
    }
    if (typeGroup === "Students" && peopleInGroup >= 30) {
        total *= 0.85;
    }
    if (typeGroup === "Business" && peopleInGroup >= 100) {
        if (day === "Friday") {
            total -= 10 * 10.90;
        } else if (day === "Saturday") {
            total -= 10 * 15.60;
        } else if (day === "Sunday") {
            total -= 10 * 16.00;
        }
    }
    if (typeGroup === "Regular" && peopleInGroup >= 10 && peopleInGroup <= 20) {
        total *= 0.95;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
