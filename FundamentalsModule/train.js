function f(arr) {
    let wagons = arr[0].split(' ');
    wagons.every(Number);

    let maxCapacity = Number(arr[1]);

    arr.splice(0, 2);
    let counter = 1;
    for (let i = 0; i < wagons.length; i++) {
        wagons[i] = Number(wagons[i]);
    }
    while (counter <= arr.length) {
        if (arr[counter - 1].toString().charAt(0) === "A") {
            wagons.push(Number(arr[counter - 1].split(' ')[1]));
        } else {

            let toFit = Number(arr[counter - 1]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + toFit <= maxCapacity) {
                    wagons[i] += toFit;
                    break;
                }
            }
        }

        counter++;
    }
    let toPrint = "";
    for (let i = 0; i < wagons.length ; i++) {
        toPrint += `${wagons[i]} `;
    }
    console.log(toPrint);
}

// f(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75']
// );