function solve(...args) {
    let resultMap = new Map();

    args.forEach(function (element) {
        let typeAndValue = getTypeAndValue(element);
        console.log(`${typeAndValue.type}: ${typeAndValue.value}`);

        if (!resultMap.has(typeAndValue.type)) {
            resultMap.set(typeAndValue.type, 0);
        }
        resultMap.set(typeAndValue.type, resultMap.get(typeAndValue.type) + 1);
    });

    Array.from(resultMap.entries()).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(function (element) {
        console.log(`${element[0]} = ${element[1]}`);
    });

    function getTypeAndValue(el) {
        return {
            type: typeof el,
            value: el
        };
    }
}

solve(42, 'cat', [], undefined);
