function solve(area, vol, input) {
    let objects = JSON.parse(input);
    let result = [];
    for (let obj of objects) {
        let currentObj = {};

        let _area = area.call(obj);
        let _vol = vol.call(obj);

        currentObj = {area: Math.abs(_area), volume: Math.abs(_vol)};

        result.push(currentObj);
    }

    return result;
}