function solve(input) {
    let object = {};
    input.forEach(function (element) {
        let [company, id] = element.split(' -> ');
        if (object.hasOwnProperty(company)) {
            if(!object[company].includes(id)){
                object[company].push(id);
            }
        } else {
            object[company] = [];
            if(!object[company].includes(id)){
                object[company].push(id);
            }
        }
    });
    let array = Object.entries(object);
    array = array.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    });
    array.forEach(function (element) {
        console.log(element[0]);
        element[1].forEach(function (element) {
            console.log(`-- ${element}`);
        });
    });
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);