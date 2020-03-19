function solve(input) {
    let bands = {};
    let lastInputBand = input.pop();
    let totalTime = 0;
    input.forEach(function (element) {
        // console.log(element);
        if(element.includes('Add;')){
            let bandName = element.split('; ')[1];
            let members = element.split('; ')[2].split(', ');
            if(!bands.hasOwnProperty(bandName)){
                bands[bandName] = new Map();
                bands[bandName].set('members', new Set());
                bands[bandName].set('playTime', 0);

            }

            members.forEach(function (element) {
                bands[bandName].get('members').add(element);
            })

        } else if(element.includes('Play;')){
            let bandName = element.split('; ')[1];
            if(!bands.hasOwnProperty(bandName)){
                bands[bandName] = new Map();
                bands[bandName].set('members', new Set());
                bands[bandName].set('playTime', 0);

            }
            let time = Number(element.split('; ')[2]);
            let oldTime = Number(bands[bandName].get('playTime'));
            totalTime += time;
            bands[bandName].set('playTime', time + oldTime);
        }
    });
    console.log(`Total time: ${totalTime}`);
    Object.entries(bands).sort((a, b) => {
        return b[1].get('playTime') - a[1].get('playTime') || a[0].localeCompare(b[0]);
    }).forEach(function (element) {
        console.log(`${element[0]} -> ${element[1].get('playTime')}`);
    });
    let lastBand = bands[lastInputBand];
    console.log(lastInputBand);
    Array.from(lastBand.get('members')).forEach(function (element) {
        console.log(`=> ${element}`);
    })
}

solve([
        'Play; The Beatles; 2584',
        'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
        'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
        'Play; Eagles; 1869',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
        'Play; The Rolling Stones; 4239',
        'start of concert',
        'The Rolling Stones'
    ]
);