function solve(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]{0,}?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g;
    let text = input.join(' ');

    let validIncome;
    let income = 0;
    while ((validIncome = pattern.exec(text)) !== null){
        let customerName = validIncome.groups.customer;
        let product = validIncome.groups.product;
        let totalPrice = Number(validIncome.groups.count) * Number(validIncome.groups.price);
        income += totalPrice;
        console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

solve([
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
    ]

);