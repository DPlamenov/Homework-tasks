function solve(array) {
    let object = {};
    for (let i = 0; i < array.length; i += 2) {
        let key = array[i];
        let value = array[i + 1];

        object[key] = Number(value);
    }

    console.log(object);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);