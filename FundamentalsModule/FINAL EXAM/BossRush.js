function solve(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let currentElement = input[i];
        //console.log(currentElement);
        let [boss, title] = currentElement.split(':');

        if (checkBoss(boss) && checkTitle(title)) {
            boss = boss.slice(1, boss.length - 1);
            title = title.slice(1, title.length - 1);
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }

    function checkBoss(bossName) {
        if (bossName !== undefined) {
            let firstChar = bossName[0];
            let lastChar = bossName[bossName.length - 1];
            if (firstChar !== '|' && lastChar !== '|') {
                return false;
            }
            bossName = bossName.slice(1, bossName.length - 1);
            if (bossName.toUpperCase() !== bossName) {
                return false;
            }
            return bossName.length >= 4;
        }

    }

    function checkTitle(title) {
        if (title !== undefined) {
            if (title.split(' ').length !== 2) {
                return false;
            }

            let [first, second] = title.split(' ');
            let firstChar = title[0];
            let lastChar = title[title.length - 1];
            if (firstChar !== '#' && lastChar !== '#') {
                return false;
            }
            let regex = /^[A-z]+$/;
            if (!regex.test(first.slice(1)) && !regex.test(second)) {
                return false;
            }
            return true;
        }
    }
}