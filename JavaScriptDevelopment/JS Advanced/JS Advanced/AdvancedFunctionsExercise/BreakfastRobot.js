function solve() {
    let library = {
        apple: {
            carb: 1,
            flavour: 2
        },
        lemonade: {
            carb: 10,
            flavour: 20
        },
        burger: {
            carb: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carb: 10,
            fat: 10,
            flavour: 10
        }
    };

    let microelements = {
        protein: 0,
        carb: 0,
        fat: 0,
        flavour: 0,
    };

    return function (command) {
        let commandType = command.split(' ')[0];
        if (commandType === 'restock') {
            let [microelement, quantity] = command.split(' ')
                .slice(1);

            if (microelement === 'carbohydrate') {
                microelement = 'carb';
            }

            microelements[microelement] += Number(quantity);
            return 'Success';
        } else if (commandType === 'prepare') {
            let [meal, quantity] = command.split(' ')
                .slice(1);
            quantity = Number(quantity);

            let needProducts = library[meal];
            let allProducts = true;
            let failedProduct = '';
            Object.entries(needProducts)
                .forEach(function (element) {
                    if (microelements[element[0]] < element[1] * quantity) {
                        if(failedProduct === ''){
                            failedProduct = element[0];
                        }
                        allProducts = false;
                    }
                });


            if (allProducts) {
                Object.entries(needProducts)
                    .forEach(function (element) {
                        microelements[element[0]] -= element[1] * quantity;
                    });
                return 'Success';
            } else {
                if(failedProduct === 'carb'){
                    failedProduct = 'carbohydrate';
                }
                return `Error: not enough ${failedProduct} in stock`;
            }

        } else if (commandType === 'report') {
            return `protein=${microelements['protein']} carbohydrate=${microelements['carb']} fat=${microelements['fat']} flavour=${microelements['flavour']}`;
        }

    };
}
