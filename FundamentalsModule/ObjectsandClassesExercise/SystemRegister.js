function solve(input) {
    let register = {};
    for (let element of input) {
        let [system, componentName, subComponentName] = element.split(' | ');
        if (!register.hasOwnProperty(system)) {
            register[system] = {};
        }
        if (!register[system].hasOwnProperty(componentName)) {
            register[system][componentName] = [];
        }
        register[system][componentName].push(subComponentName);
    }
    let sortedKeys = Object.keys(register).sort(function (a, b) {
        return Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b);
    });
    sortedKeys.forEach((key) => {
        console.log(key);
        let sortedSubKeys = Object.keys(register[key]).sort(function (a, b) {
            return Object.keys(register[key][b]).length - Object.keys(register[key][a]).length;
        });
        sortedSubKeys.forEach((subKey) => {
            console.log(`|||${subKey}`);
            register[key][subKey].forEach((subComponent) => {
                console.log(`||||||${subComponent}`);
            });
        });
    });
}