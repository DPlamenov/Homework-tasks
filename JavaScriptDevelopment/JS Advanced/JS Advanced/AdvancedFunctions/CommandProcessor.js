function solve() {
    let string = '';
    return {
        append: (s) => {
            string += s;
        },
        removeStart: (x) => {
            string = string.slice(x);
        },
        removeEnd: (x) => {
            string = string.slice(0, string.length - x);
        },
        print: () => {
            console.log(string);
        }
    };
}
