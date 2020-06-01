function solve(input, sort) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let i = 0; i < input.length; i++) {
        let [destinationName, price, status] = input[i].split('|');

        let ticket = new Ticket(destinationName, Number(price), status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => {
        if (sort === 'price') {
            return a[sort] - b[sort];
        }
        return a[sort].localeCompare(b[sort]);
    });
    return tickets;
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);