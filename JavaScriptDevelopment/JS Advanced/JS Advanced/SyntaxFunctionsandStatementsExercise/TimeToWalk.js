function solve(steps, lengthOfPrint, speed) {
    let distance = (steps * lengthOfPrint) / 1000;
    let time = (distance / speed) + (parseInt(distance * 1000 / 500) / 60);
    time *= 60 * 60;
    let hours = parseInt(time / 3600);
    let minutes = parseInt(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);