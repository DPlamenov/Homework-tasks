function solve(input) {
    let words = input[0].split(' ');
    let commands = input.splice(1);

    commands.forEach(function (element) {
        if (element.includes('Delete')) {
            let index = Number(element.split(' ')[1]);
            if (index >= 0 && index < words.length) {
                words.splice(index + 1, 1);
            }
        } else if (element.includes('Swap')) {
            let word1 = element.split(' ')[1];
            let word2 = element.split(' ')[2];
            if (words.indexOf(word1) !== -1 && words.indexOf(word2) !== -1) {
                let index1 = words.indexOf(word1);
                let index2 = words.indexOf(word2);
                words.splice(index1, 1, word2);
                words.splice(index2, 1, word1);
            }
        } else if (element.includes('Put')) {
            let word = element.split(' ')[1];
            let index = Number(element.split(' ')[2]);
            if (index - 1 >= 0 && index - 1 <= words.length) {
                words.splice(index - 1, 0, word);
            }

        } else if (element.includes('Sort')) {
            words.sort(function (a, b) {
                return b.localeCompare(a);
            });
        } else if (element.includes('Replace')) {
            let word1 = element.split(' ')[1];
            let word2 = element.split(' ')[2];
            if (words.indexOf(word2) !== -1) {
                let index1 = words.indexOf(word2);
                words.splice(index1, 1, word1);
            }
        }
    });
    console.log(words.join(' '));
}

solve([
        'Congratulations! You last also through the have challenge!',
        'Swap have last',
        'Replace made have',
        'Delete 2',
        'Put it 4',
        'Stop',
        ''
    ]
);