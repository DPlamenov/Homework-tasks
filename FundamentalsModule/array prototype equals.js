Array.prototype.equals = function (arr) {
    let isEquals = true;
    if (this.length !== arr.length) {
        isEquals = false;
    }
    this.forEach(function (value, index, array) {
        if (array[index] !== arr[index]) {
            isEquals = false;
        }
    });
    return isEquals;
};