function solve(input) {
    let speed = input[0];
    let area = input[1];
    let limit = 0;
    let printMessage = (speed, limit) => {
        if (speed > limit + 40) {
            console.log('reckless driving');
        } else if (speed > limit + 20) {
            console.log('excessive speeding ');
        } else if (speed > limit) {
            console.log('speeding');
        }
    };
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    printMessage(speed, limit);
}

solve([120, 'interstate']);