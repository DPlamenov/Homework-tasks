function cappyJuice(input) {
    let juiceQuantity = new Map();
    let bottles = new Map();

    input.forEach(el => {
        let [juice, quantity] = el.split('=>').map(e => e.trim());
        quantity = Number(quantity);

        if (!juiceQuantity.has(juice)) {
            juiceQuantity.set(juice, 0);
        }
        let oldQuantity = juiceQuantity.get(juice);
        juiceQuantity.set(juice, oldQuantity + quantity);

        let newQuantity = juiceQuantity.get(juice);
        if (parseInt(Number(newQuantity) / 1000) > 0) {
            bottles.set(juice, parseInt(Number(newQuantity) / 1000));
        }

    });
    
    Array.from(bottles.entries()).forEach(el => {
        console.log(`${el[0]} => ${el[1]}`);
    })
}
