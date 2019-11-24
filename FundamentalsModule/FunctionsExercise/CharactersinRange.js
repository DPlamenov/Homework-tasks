function f(char1, char2) {
    function func(ch1, ch2) {
        let first = Math.min(ch1.charCodeAt(0), ch2.charCodeAt(0));
        let last = Math.max(ch1.charCodeAt(0), ch2.charCodeAt(0));
        let result = "";
        for (let i = first + 1; i < last; i++) {
            result += String.fromCharCode(i) + " ";
        }
        return result;
    }

    console.log(func(char1, char2));
}

f("C", "#");