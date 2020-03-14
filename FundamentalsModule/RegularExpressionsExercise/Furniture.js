function solve(input) {
    let pattern = />>(?<furniture>[A-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
    let string = input.join(' ');
    let validFurniture;
    let bought = [];
    let spendMoney = 0;

    while ((validFurniture = pattern.exec(string)) !== null){
        bought.push(validFurniture.groups.furniture);
        spendMoney += Number(validFurniture.groups.price) * Number(validFurniture.groups.quantity);
    }

    console.log(`Bought furniture:`);
    bought.forEach(e => {
        console.log(e);
    });
    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);