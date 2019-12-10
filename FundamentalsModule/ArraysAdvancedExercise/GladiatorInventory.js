function solve(input) {
    let inventory = input.shift().split(' ');
    //console.log(startInventory)
    input.forEach(function (value) {
        let operation = value.split(' ')[0];
        if (operation === "Buy" && !inventory.includes(value.split(' ')[1])) {
            inventory.push(value.split(' ')[1]);
        } else if (operation === "Trash" && inventory.includes(value.split(' ')[1])) {
            let index = inventory.indexOf(value.split(' ')[1]);
            inventory.splice(index, 1);
        } else if (operation === "Repair" && inventory.includes(value.split(' ')[1])) {
            let index = inventory.indexOf(value.split(' ')[1]);
            inventory.push(inventory.splice(index, 1)[0]);
        } else if (operation === "Upgrade" && inventory.includes(value.split(' ')[1].split('-')[0])) {
            let index = inventory.indexOf(value.split(' ')[1].split('-')[0]);
            let toAdd = (value.split(' ')[1]).split('-');
            inventory.splice(index + 1, 0, `${toAdd[0]}:${toAdd[1]}`);
        }
    });
    console.log(inventory.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);