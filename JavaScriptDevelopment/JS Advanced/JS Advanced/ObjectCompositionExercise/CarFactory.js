function solve(car) {
    let newCar = { model: car.model };

    let horsePower = car.power;
    let engineVolume = 0;
    if (horsePower <= 90) {
        horsePower = 90;
        engineVolume = 1800;
    } else if (horsePower <= 120) {
        horsePower = 120;
        engineVolume = 2400;
    } else if (horsePower <= 200) {
        horsePower = 200;
        engineVolume = 3500;
    }

    newCar.engine = {
        power: horsePower,
        volume: engineVolume
    };
    newCar.carriage = {
        type: car.carriage,
        color: car.color
    };
    let wheelSize = car.wheelsize;
    if (wheelSize % 2 === 0) {
        wheelSize--;
    }
    newCar.wheels = new Array(4).fill(wheelSize);
    return newCar;
}

