function solve(input) {
    let townObj = {};
    input.forEach(function (v) {
        let [town, latitude, longitude] = v.split(' | ');
        townObj.town = town;
        townObj.latitude = Number(latitude).toFixed(2);
        townObj.longitude = Number(longitude).toFixed(2);
        console.log(townObj);
    });
}