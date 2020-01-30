Array.prototype.map = function (callback) {
    let resultArray = [];
    this.forEach(function (element, index) {
        resultArray[index] = callback(element, index);
    });
    return resultArray;
}
