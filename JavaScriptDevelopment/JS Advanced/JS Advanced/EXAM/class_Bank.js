class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
        this.transaction = {};
    }

    newCustomer(customer) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === customer.personalId);

        if (findCustomer) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} is already our customer!`);
        }

        this.transaction[customer.personalId] = [];

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (!findCustomer.hasOwnProperty('totalMoney')) {
            findCustomer.totalMoney = 0;
        }

        let current = {};
        current.type = 'deposit';
        current.amount = amount;
        this.transaction[personalId].push(current);

        findCustomer.totalMoney += amount;
        return `${findCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (findCustomer.totalMoney < amount
            || findCustomer.totalMoney === undefined) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        let current = {};
        current.type = 'withdraw';
        current.amount = amount;
        this.transaction[personalId].push(current);

        findCustomer.totalMoney -= amount;
        return `${findCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        let output = [];

        output.push(`Bank name: ${this.#bankName}`);
        output.push(`Customer name: ${findCustomer.firstName} ${findCustomer.lastName}`);
        output.push(`Customer ID: ${personalId}`);
        output.push(`Total Money: ${findCustomer.totalMoney}$`);
        output.push('Transactions:');

        let thisTransaction = this.transaction[personalId];
        let counter = thisTransaction.length;
        thisTransaction.reverse().forEach(function (element) {
            if (element.type === 'deposit') {
                output.push(`${counter}. ${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${element.amount}$!`);
            } else {
                output.push(`${counter}. ${findCustomer.firstName} ${findCustomer.lastName} withdrew ${element.amount}$!`);
            }
            counter--;
        });

        return output.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 6233267
}));
console.log(bank.newCustomer({
    firstName: 'Mihaela',
    lastName: 'Mileva',
    personalId: 4151596
}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
