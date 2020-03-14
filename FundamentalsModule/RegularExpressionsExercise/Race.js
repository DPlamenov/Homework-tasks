function solve(input) {
    let race = {};

    let racers = input.shift().split(', ');
    racers.forEach(e => {
        race[e] = 0;
    });

    for(let information of input){
        let info = extractInfo(information);
        saveInformation(info, race);
    
    }

    let result = Object.entries(race).sort(((a, b) => {
        return b[1] - a[1];
    })).map(e => e[0]).slice(0, 3);
    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);

    function extractInfo(information) {
        let letters = [];
        let digits = [];

        for (let char of information){
            if(isCharDigit(char)){
                digits.push(char);
            }
            if(isCharLetter(char)){
                letters.push(char);
            }
        }

        return {
            name: letters.join(''),
            distance: digits.map(Number).reduce((acc, value) => {
                acc += value;
                return acc;
            }, 0)
        };
    }
    
    function isCharDigit(char) {
        return Boolean(Number(char)) ;
    }

    function isCharLetter(char) {
        let lowerCase = char.toLowerCase().charCodeAt(0);
        return (lowerCase >= 97 && lowerCase <= 122);
    }
    
    function saveInformation(information, object) {
        if(object.hasOwnProperty(information.name)){
            object[information.name] += information.distance;
            return true;
        }
    }
}

solve([
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
);