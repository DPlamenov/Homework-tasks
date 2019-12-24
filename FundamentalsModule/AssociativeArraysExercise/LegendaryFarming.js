function solve(input) {
    let map = new Map();
    map.set('shards', 0);
    map.set('fragments', 0);
    map.set('motes', 0);
    input = input.split(' ');
    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();
        if (map.has(material)) {
            let oldQuantity = map.get(material);
            map.set(material, oldQuantity + quantity);
        } else {
            map.set(material, quantity);
        }
        if (map.get('shards') >= 250) {
            map.set('shards', map.get('shards') - 250);
            console.log(`Shadowmourne obtained!`);
            break;
        }
        if (map.get('fragments') >= 250) {
            map.set('fragments', map.get('fragments') - 250);
            console.log(`Valanyr obtained!`);
            break;
        }
        if (map.get('motes') >= 250) {
            map.set('motes', map.get('motes') - 250);
            console.log(`Dragonwrath obtained!`);
            break;
        }
    }
    let array = map.entries();
    let keyMaterials = {};
    let otherMaterials = {};
    for (let arrayElement of array) {
        if(arrayElement[0] === 'shards' || arrayElement[0] === 'fragments' || arrayElement[0] === 'motes'){
            keyMaterials[arrayElement[0]] = arrayElement[1];
        }else{
            otherMaterials[arrayElement[0]] = arrayElement[1];
        }
    }
    let entries = Object.entries(keyMaterials);
    entries.sort(function (a, b) {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
    entries.forEach(function (element) {
        console.log(`${element[0]}: ${element[1]}`);
    });
    let entriesOtherMaterials = Object.entries(otherMaterials);
    entriesOtherMaterials.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    });
    entriesOtherMaterials.forEach(function (element) {
        console.log(`${element[0]}: ${element[1]}`);
    });
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('--------');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');