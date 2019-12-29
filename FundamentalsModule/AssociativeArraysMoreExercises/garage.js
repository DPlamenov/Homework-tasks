function solve(input) {
    let garages = new Map();
    input.forEach(function (element) {
        let garageId = Number(element.split(' - ')[0]);
        let property = element.split(' - ')[1].split(', ');
        if (garages.has(garageId)) {
            let obj = {};
            let garageCurrent = garages.get(garageId);
            property.forEach(function (el) {
                let propertyName = el.split(': ')[0];

                obj[propertyName] = el.split(': ')[1];
            });
            garageCurrent.push(obj);
            garages.set(garageId, garageCurrent);
        } else {
            let obj = {};
            property.forEach(function (el) {
                let propertyName = el.split(': ')[0];
                obj[propertyName] = el.split(': ')[1];
            });
            garages.set(garageId, [obj]);
        }
    });
    garages.forEach(function (value, key, map) {
        console.log(`Garage № ${key}`);
        value.forEach(function (el) {
            let arr = [];
            for (let _key in el) {
                arr.push(`${_key} - ${el[_key]}`);
            }
            console.log('--- ' + arr.join(', '));

        });
    })
}