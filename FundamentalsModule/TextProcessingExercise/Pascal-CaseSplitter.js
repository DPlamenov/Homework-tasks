function solve(string) {
    let array = string.match(/[A-z][a-z]{0,}/g);
    console.log(array.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');