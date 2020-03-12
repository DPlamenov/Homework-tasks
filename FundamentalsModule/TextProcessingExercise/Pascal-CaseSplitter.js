function solve(string) {
    let array = string.match(/[A-Z][a-z]*/g);
    console.log(array.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');