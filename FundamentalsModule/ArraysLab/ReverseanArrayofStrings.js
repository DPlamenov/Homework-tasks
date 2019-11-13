function f(strings) {
    for (let i = 0; i < strings.length / 2; i++) {
        let lastElement = strings[strings.length - 1 - i];
        let firstElement = strings[i];
        strings[i] = lastElement;
        strings[strings.length - 1 - i] = firstElement;
    }
    let result = "";
    for (let i = 0; i < strings.length ; i++) {
        result += `${strings[i]} `;
    }
    console.log(result);
}