function solve(input) {
    let journal = {};
    input = input.filter(e => e !== 'end');
    for (let line of input) {
        let [letter, indexes] = line.split(':');
        indexes = indexes.split('/').map(Number);
        if (!journal.hasOwnProperty(letter)) {
            journal[letter] = [];
        }
        journal[letter] = journal[letter].concat(indexes);
    }
    let output = [];
    Object.entries(journal).forEach(function (element) {
        element[1].forEach(e => {
           output[e] = element[0];
        });
    });
    console.log(output.join(''));
}

solve([
        'a:0/3/5/11', 'v:1/4',
        'j:2',        'm:6/9/15',
        's:7/13',     'd:8/14',
        'c:10',       'l:12',
        'end'
    ]
);