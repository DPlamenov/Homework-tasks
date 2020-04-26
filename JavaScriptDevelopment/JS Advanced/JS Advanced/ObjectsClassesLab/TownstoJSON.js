function solve(input) {
    input.shift();
    input = input.map(e => {
        return e.split(/\s?\|\s?/g).filter(e => e !== '');
    });

    let towns = [];

    input.forEach(function (element) {
        let town = {};
        town.Town = element[0];
        town.Latitude = Number(Number(element[1]).toFixed(2));
        town.Longitude = Number(Number(element[2]).toFixed(2));
        towns.push(town);
    });


    console.log(JSON.stringify(towns));
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);