function f(row, columns) {
    let n = row * columns;
    let counter = 0;
    let direction = "right";
    let directionCount = 1;
    let output = [];
    for (let i = 0; i < row; i++) {
        output[i] = [];
        for (let j = 0; j < columns; j++) {
            output[i][j] = 1;
        }
    }

    let currentRows = 0;
    let currentColumns = 0;
    let maxHorizontal = row;
    let maxVertical = columns;
    while (counter < n) {
        if ((directionCount > row) && (direction === "left" || direction === "right")) {
            if (direction === "left") {
                direction = "up";
            } else if (direction === "right") {
                direction = "down";
            }

            directionCount = 1;
        } else if ((directionCount > columns) && (direction === "up" || direction === "down")) {
            if (direction === "up") {
                direction = "right";
            } else if (direction === "down") {
                direction = "left";
            }


            directionCount = 1;
        }
        if (direction === "right") {
            currentColumns++;
        } else if (direction === "left") {
            currentColumns--;
        } else if (direction === "up") {
            currentRows--;
        } else if (direction === "down") {
            currentRows++;
        }
        counter++;
        if (counter === 1) {

            currentRows = 0;
            currentColumns = 0;
        }
        output[currentRows][currentColumns] = counter;

        directionCount++;

        console.log(output);
    }
    console.log(output);
}

f(5, 5);