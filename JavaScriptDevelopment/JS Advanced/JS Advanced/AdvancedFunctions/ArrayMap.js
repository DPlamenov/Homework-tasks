function arrayMap(array, callback) {
    return array.reduce((a, b) => {
        a.push(callback(b));
        return a;
    }, []);
}
