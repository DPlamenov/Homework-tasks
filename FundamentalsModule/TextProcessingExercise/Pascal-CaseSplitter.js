function solve(string) {
    let array = string.match(/[A-z][a-z]*/g);
    console.log(array.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');