function solve(arr) {
    /**
     * @var arr
     * @type {string[]}
     */
    let output = [];
    let games = arr[0].split(' ');
    games.forEach(function (value) {
        output.push(value);
    });
    arr.splice(0, 1);
    arr.forEach(function (value, index, array) {
        let command = array[index].split(' ')[0];
        let game = array[index].split(' ')[1];
        if (command === "Install" && !(output.includes(game))) {
            output.push(game);
        } else if (command === "Uninstall" && output.includes(game)) {
            output.splice(output.indexOf(game), 1);
        } else if (command === "Update" && output.includes(game)) {
            let removed = output.splice(output.indexOf(game), 1)[0];
            output.push(removed);
        } else if (command === "Expansion" && output.includes(game.split('-')[0])) {
            let gameIndex = output.indexOf(game.split('-')[0]);
            let expansion = game.split('-')[1];
            let toAdd = `${game.split('-')[0]}:${expansion}`;
            output.splice(gameIndex + 1, 0, toAdd);
        }
    });
    console.log(output.join(' '));
}
