function spy(target, method) {
    const f = target[method];
    let counter = {count: 0};

    target[method] = function () {
        counter.count++;
        return f.apply(this, arguments);
    };

    return counter;
}
