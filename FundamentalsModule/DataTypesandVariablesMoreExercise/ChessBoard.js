function f(n) {
    let lastColor = 'white';
    let startWith = 'black';
    console.log(`<div class="chessboard">`);

    for (let rows = 1; rows <= n; rows++) {
        console.log('<div>');

        for (let columns = 1; columns <= n; columns++) {
            if (columns === 1) {
                console.log(`<span class="${startWith}"></span>`);
                lastColor = startWith;
                if (startWith === "white")
                    startWith = "black";
                else
                    startWith = "white";
                continue;
            }
            if (lastColor === "white") {
                console.log('<span class="black"></span>');
                lastColor = "black";
            } else {
                console.log('<span class="white"></span>');
                lastColor = "white";
            }

        }
        if (rows + 1 % 2 === 0) {
            startWith = 'white';
        }
        console.log('</div>');
    }
    console.log('</div>');
}