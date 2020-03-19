function solve(input) {
    let stores = {};

    input.forEach(function (element) {
        if (element.includes('Add')) {
            let [store, items] = element.split('->').slice(1);
            items = items.split(',');
            if (!stores.hasOwnProperty(store)) {
                stores[store] = [];
            }

            stores[store].push(...items);
        } else if (element.includes('Remove')) {
            let store = element.split('->')[1];
            if (stores.hasOwnProperty(store)) {
                delete stores[store];
            }
        }
    });
    console.log('Stores list:');
    Object.entries(stores).sort((a, b) =>{
        return b[1].length - a[1].length || b[0].localeCompare(a[0]);
    }).forEach(el => {
        let store = el[0];
        let items = el[1];
        console.log(store);
        items.forEach(item => {
            console.log(`<<${item}>>`);
        })
    });
}


solve([
        'Add->PeakSports->Map,Navigation,Compass',
        'Add->Paragon->Sunscreen',
        'Add->Groceries->Dried-fruit,Nuts',
        'Add->Groceries->Nuts',
        'Add->Paragon->Tent',
        'Remove->Paragon',
        'Add->Pharmacy->Pain-killers',
        'END'
    ]
);