class Bank {

    #bankName;
    #transaction = {};

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let findCustomer = this.allCustomers
            .find(e => e.firstName === customer.firstName);

        if (findCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        this.#transaction[customer.personalId] = [];
        return customer;
    }

    depositMoney(personalId, amount) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (findCustomer === undefined) {
            throw new Error("We have no customer with this ID!");
        }

        if (!findCustomer.hasOwnProperty("totalMoney")) {
            findCustomer.totalMoney = 0;
        }

        findCustomer.totalMoney += amount;
        let transaction = {};
        transaction.type = "deposit";
        transaction.amount = amount;
        this.#transaction[findCustomer.personalId].push(transaction);

        return findCustomer.totalMoney + "$";
    }

    withdrawMoney(personalId, amount) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (findCustomer === undefined) {
            throw new Error("We have no customer with this ID!");
        }

        if (findCustomer.totalMoney < amount) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        findCustomer.totalMoney -= amount;

        let transaction = {};
        transaction.type = "withdraw";
        transaction.amount = amount;
        this.#transaction[findCustomer.personalId].push(transaction);

        return findCustomer.totalMoney + "$";
    }

    customerInfo(personalId) {
        let findCustomer = this.allCustomers
            .find(e => e.personalId === personalId);

        if (findCustomer === undefined) {
            throw new Error("We have no customer with this ID!");
        }

        let info = this.#transaction[personalId].reverse();
        let output = [];
        output.push(`Bank name: ${this.#bankName}`);
        output.push(`Customer name: ${findCustomer.firstName} ${findCustomer.lastName}`);
        output.push(`Customer ID: ${findCustomer.personalId}`);
        output.push(`Total Money: ${findCustomer.totalMoney}$`);
        output.push('Transactions:');

        let counter = info.length;
        info.forEach(function (transaction) {
            if (transaction.type === 'deposit') {
                output.push(`${counter}. ${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${transaction.amount}$!`);
            } else {
                output.push(`${counter}. ${findCustomer.firstName} ${findCustomer.lastName} withdrew ${transaction.amount}$!`);
            }
            counter--;
        });

        return output.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
//
console.log(bank.withdrawMoney(6233267, 125));
//
console.log(bank.customerInfo(6233267));