let names = ["Isacc", "Theodor", "Jack", "Harrison", "George"];
names.sort(function (a, b) {
    if (a.length.toString().localeCompare(b.length.toString()) === 0) {
        a.localeCompare(b);
    }
    return a.length.toString().localeCompare(b.length.toString());
});
console.log(names);
