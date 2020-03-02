function solve(input) {
    let system = {};
    for (let element of input) {
        let [systemName, component, subComponent] = element.split(' | ');
        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {};
        }
        if (!system[systemName].hasOwnProperty(component)) {
            system[systemName][component] = [];
        }
        if (!system[systemName][component].includes(subComponent)) {
            system[systemName][component].push(subComponent);
        }
    }
    let keys = Object.keys(system);

    keys.sort(function (a, b) {
        if (Object.keys(system[b]).length - Object.keys(system[a]).length === 0) {
            return a.localeCompare(b);
        }
        return Object.keys(system[b]).length - Object.keys(system[a]).length;
    });

    for (let key of keys) {
        console.log(key);
        let keys = Object.keys(system[key]);
        keys.sort((a, b) => {
            return system[key][b].length - system[key][a].length;
        });
        keys.forEach(function (element) {
            console.log('|||' + element);
            system[key][element].forEach(element => {
                console.log('||||||' + element);
            });
        })

    }
}
