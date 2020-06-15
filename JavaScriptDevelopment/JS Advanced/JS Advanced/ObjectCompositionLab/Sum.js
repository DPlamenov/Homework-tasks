function solve(input) {
    let selectors = {};

    return {
        init(s1, s2, result) {
            selectors.s1 = document.querySelector(s1);
            selectors.s2 = document.querySelector(s2);
            selectors.result = document.querySelector(result);
        },
        add() {
            let firstValue = selectors.s1.value;
            let secondValue = selectors.s2.value;
            selectors.result.value = Number(firstValue) + Number(secondValue);

        },
        subtract() {
            let firstValue = selectors.s1.value;
            let secondValue = selectors.s2.value;
            selectors.result.value = Number(firstValue) - Number(secondValue);
        }
    };
}
