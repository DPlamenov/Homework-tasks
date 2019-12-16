//Mid Exam
function solve(input) {
    input = input.map(Number);
    let neededExp = input.shift();
    let countOfBattles = input.shift();
    let totalCollected = 0;
    let collected = false;
    let totalBattle = 1;
    for (let i = 1; i <= countOfBattles; i++) {
        let earnedPerBattle = input.shift();
        totalCollected += earnedPerBattle;
        if (i % 3 === 0) {
            totalCollected += 0.15 * earnedPerBattle;
        }
        if (i % 5 === 0) {
            totalCollected -= 0.1 * earnedPerBattle;
        }

        if (totalCollected >= neededExp) {
            collected = true;
            break;
        }
        totalBattle++;
    }
    if (totalCollected >= neededExp) {
        collected = true;
    }
    if (collected) {
        console.log(`Player successfully collected his needed experience for ${totalBattle} battles.`);
    } else {
        let neededExperience = neededExp - totalCollected;
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
    }
}