function solve(input) {
    let result = [];
    input.forEach(function (v) {
        if (v.includes('addMovie')) {
            let obj = {
                name: v.replace('addMovie ', '')
            };
            result.push(obj);
        } else if (v.includes('directedBy')) {
            v = v.replace(' directedBy ', '|');
            let name = v.split('|')[0];
            let actor = v.split('|')[1];
            result.forEach(function (v) {
                if (v.name === name) {
                    v.director = actor;
                }
            });
        } else if (v.includes('onDate')) {
            v = v.replace(' onDate ', '|');
            let name = v.split('|')[0];
            let date = v.split('|')[1];
            result.forEach(function (v) {
                if (v.name === name) {
                    v.date = date;
                }
            });
        }
    });
    result.forEach(function (v) {
        if (v.hasOwnProperty("name") && v.hasOwnProperty("date") && v.hasOwnProperty("director")) {
            console.log(JSON.stringify(v));
        }
    });
}

solve([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);