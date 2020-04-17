function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;

    input.forEach(function (element) {
        for (let el of element) {
            let currentBiggest = Number.MIN_SAFE_INTEGER;
            if (el > currentBiggest) {
                currentBiggest = el;
            }
            // console.log(currentBiggest);
            if (currentBiggest > biggest) {
                biggest = currentBiggest;
            }
        }

    });

    console.log(biggest);
}

solve([[20, 50, 10],
    [8, 33, 145]]
);