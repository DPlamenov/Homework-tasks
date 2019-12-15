function solve(name, area, population, country, postCode) {
    let city = {
        name, area, population, country, postCode
    };
    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}