function solve(input) {
    let systems = {};
    input.forEach(function (element) {
        let [systemName, componentName, subcomponentsName] = element.split('|').map(e => e.trim());
        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        }
        if (!systems[systemName].hasOwnProperty(componentName)) {
            systems[systemName][componentName] = [];
        }
        if (!systems[systemName][componentName].includes(subcomponentsName)) {
            systems[systemName][componentName].push(subcomponentsName);
        }
    });
    systems = Object.entries(systems).sort(function (a, b) {
        return Object.values(b[1]).length - Object.values(a[1]).length || a[0].localeCompare(b[0]);
    }).map(function (element) {
        element[1] = Object.entries(element[1]).sort((a, b) => {
            return b[1].length - a[1].length;
        });
        element[1] = Object.fromEntries(element[1]);
        return element;
    }).forEach(function (element) {
        let entries = Object.entries(element[1]);
        console.log(element[0]);
        entries.forEach(function (element) {
            let componentName = element[0];
            console.log(`|||${componentName}`);
            for (let subcomponents of element[1]) {
                console.log(`||||||${subcomponents}`);
            }
        });
    });

}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);