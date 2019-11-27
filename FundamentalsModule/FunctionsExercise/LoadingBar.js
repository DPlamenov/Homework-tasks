function f(n) {
    function loading(n) {
        let first = `${n}% [${"%".toString().repeat(n / 10)}${".".toString().repeat(10 - n / 10)}]`;
        let second = "";
        if (n === 100) {
            second = `[${"%".toString().repeat(10)}]`;
        } else {
            second = "Still loading...";
        }
        console.log(first);
        console.log(second);
    }

    loading(n);
}

f(30);