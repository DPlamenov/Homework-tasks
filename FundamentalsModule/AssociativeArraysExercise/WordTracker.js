function solve(input) {
    let tracker = new Map();
    let wordsToTrack = input.shift().split(' ');
    wordsToTrack.forEach(value => tracker.set(value, 0));
    input.forEach(function (element) {
        if (tracker.has(element)) {
            let oldValue = tracker.get(element);
            tracker.set(element, oldValue + 1);
        }
    });

    let output = Array.from(tracker).sort(function (a, b) {
        return b[1] - a[1];
    });
    output.forEach(function (element) {
        console.log(`${element[0]} - ${element[1]}`);
    });
}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);