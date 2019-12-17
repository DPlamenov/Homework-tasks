class Vehicle {
    type = "";
    model = "";
    parts = {};
    fuel = 0;

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        parts.quality = parts.engine * parts.power;
        this.parts = parts;
        this.fuel = fuel;
        this.drive = function (fuelLoss) {
            this.fuel -= fuelLoss;
        };
    }
}