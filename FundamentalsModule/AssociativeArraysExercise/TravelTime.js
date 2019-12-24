function solve(input) {
    let object = {};
    input.forEach(function (element) {
        let [country, town, cost] = element.split(' > ');
        if (!object.hasOwnProperty(country)) {
            object[country] = {};
        }
        if (!object[country].hasOwnProperty(town)) {
            object[country][town] = cost;
        } else if (object[country].hasOwnProperty(town) && Number(object[country][town]) > cost) {
            object[country][town] = cost;
        }

    });

    let array = Object.entries(object);
    array = array.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    });
    array.forEach(function (element, index, array) {
        let toSort = Object.entries(element[1]);
        toSort = toSort.sort(function (a, b) {
            return Number(a[1]) - Number(b[1]);
        });
        array[index][1] = toSort;
    });
    array.forEach(function (element) {
        let country = element.shift();
        let output = '';
        element[0].forEach(function (element) {
            output += `${element[0]} -> ${element[1]} `;
        });
        console.log(`${country} -> ${output}`);
    });
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);