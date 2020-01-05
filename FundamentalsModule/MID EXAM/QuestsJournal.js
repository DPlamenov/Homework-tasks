function solve(input) {
    let journal = input.shift().split(', ');
    let commands = input.slice();

    commands.forEach(function (element) {
        if (element.includes('Start - ')) {
            let quest = element.split(' - ')[1];
            if (!journal.includes(quest)) {
                journal.push(quest);
            }
        } else if (element.includes('Complete - ')) {
            let quest = element.split(' - ')[1];
            if (journal.includes(quest)) {
                let index = journal.indexOf(quest);
                journal.splice(index, 1);
            }
        } else if (element.includes('Side Quest - ')) {
            let [quest, sideQuest] = element.split(' - ')[1].split(':');
            if (journal.includes(quest) && !journal.includes(sideQuest)) {
                let index = journal.indexOf(quest);
                journal.splice(index + 1, 0, sideQuest);
            }
        } else if (element.includes('Renew - ')) {
            let quest = element.split(' - ')[1];
            if (journal.includes(quest)) {
                let index = journal.indexOf(quest);
                journal.splice(index, 1);
                journal.push(quest);
            }
        }
    });
    console.log(journal.join(', '));
}