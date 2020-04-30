function solve(input) {
    let cars = {};

    input.forEach((el) => {
        let [carBrand, carModel, producedCars] = el.split('|')
            .map(e => e.trim());

        producedCars = Number(producedCars);

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};
        }
        if (!cars[carBrand].hasOwnProperty(carModel)) {
            cars[carBrand][carModel] = 0;
        }
        cars[carBrand][carModel] += producedCars;
    });

    Object.entries(cars).forEach((el) => {
        let [carBrand, cars] = el;
        console.log(carBrand);
        Object.entries(cars).forEach((el) => {
            console.log(`###${el[0]} -> ${el[1]}`);
        });
    });
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);