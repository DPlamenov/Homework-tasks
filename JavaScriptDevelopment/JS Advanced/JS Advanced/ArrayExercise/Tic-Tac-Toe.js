function solve(input) {
    let dashboard = [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let player = 'X';


    for (let element of input) {
        let [row, column] = element.split(' ');
        if (dashboard[row][column]) {
            console.log("This place is already taken. Please choose another!");
        } else {
            dashboard[row][column] = player;
            player = player === 'X' ? 'O' : 'X';
        }

        let win = checkWin(dashboard);
        if (win) {
            console.log(`Player ${win.winner} wins!`);
            break;
        }

        if (!checkFreeSpaces(dashboard)) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
    }

    dashboard.forEach(function (element) {
        console.log(element.join('\t'));
    });

    function checkFreeSpaces(board) {
        let free = false;
        board.forEach(function (element) {
            if (element.includes(false)) {
                free = true;
            }
        });

        return free;
    }

    function checkWin(board) {
        let winner = false;

        //Check rows
        let rows = [];
        board.forEach(function (element) {
            if (element.every(e => e !== false) && element.every(e => e === element[0])) {
                rows.push(true);
                winner = element[0];
            } else {
                rows.push(false);
            }
        });
        // console.log(winner);
        let columns = [];
        for (let i = 0; i < board.length; i++) {
            let all = [];
            for (let j = 0; j < board.length; j++) {
                all.push((board[j][i] !== false) ? board[j][i] : false);
            }
            if (!winner) {
                winner = all[i];
            }
            columns.push(all.every(e => e !== false) && all.every(e => e === all[i]));
        }

        let diagonals = ['', ''];

        for (let i = 0; i < board.length; i++) {
            diagonals[0] += board[i][i];
            diagonals[1] += board[i][board.length - 1 - i];
        }

        diagonals = diagonals.map(function (element) {
            if (element === 'XXX' || element === 'OOO') {
                winner = element.charAt(0);
            }
            return (element === 'XXX' || element === 'OOO');
        });
        let obj = {
            rows: rows.some(e => e === true),
            columns: columns.some(e => e === true),
            d1: diagonals[0],
            d2: diagonals[1]
        };

        for (let element of Object.values(obj)) {
            if (element === true) {
                return {winner};
            }
        }
        return false;
    }
}