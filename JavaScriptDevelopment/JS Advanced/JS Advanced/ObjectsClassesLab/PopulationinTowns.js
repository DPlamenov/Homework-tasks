function solve(input) {
    const map = new Map();

    input.forEach((el) =>  {
        let [townName, townPopulation] = el.split(' <-> ');
        townPopulation = Number(townPopulation);

        if(!map.has(townName)){
            map.set(townName, 0);
        }

        let oldValue = map.get(townName);
        map.set(townName, oldValue + townPopulation);
    });

    Array.from(map.entries()).forEach(e => {
        console.log(`${e[0]} : ${e[1]}`);
    });
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);