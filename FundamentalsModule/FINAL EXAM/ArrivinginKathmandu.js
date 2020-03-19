function solve(input = []) {
    let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)+=(?<myLength>\d+)<<(?<geohash>.+)$/;
    input = input.filter(e => e !== 'Last note');
    input.forEach(function (element) {
        let isValid = isPeakValid(element);
        if(isValid){
            isValid.name = isValid.name.replace(/[!@#$?]+/g, '');
            console.log(`Coordinates found! ${isValid.name} -> ${isValid.geohash}`);
        } else {
            console.log("Nothing found!");
        }
    });

    function isPeakValid(peakName){
        let match = pattern.exec(peakName);
        return match !== null && match[0] === peakName && isLengthValid(match.groups) && match.groups;
    }
    
    function isLengthValid(peakObject) {
        return peakObject.geohash.length === Number(peakObject.myLength);
    }

}

solve([
        'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
        '=9Cho?@#Oyu<<thvb7ydht',
        'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
        'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
        'Last note'
    ]

);