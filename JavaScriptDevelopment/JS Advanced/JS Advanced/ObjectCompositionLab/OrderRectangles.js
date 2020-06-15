function solve(input) {
    let allRectangles = [];

    input.forEach(function (rect) {
        let rectObj = {
            width: rect[0],
            height: rect[1]
        };
        rectObj.area = function () {
            return this.width * this.height;
        };
        rectObj.compareTo = function (other) {
            return other.area() - this.area() || other.width - this.width;
        };

        allRectangles.push(rectObj);
    });
    allRectangles.sort((a, b) => a.compareTo(b));

    return allRectangles;
}
let sizes = [[1,20],[20,1],[5,3],[5,3]];
let result = solve(sizes);
console.log(result);
console.log(result[0].compareTo(result[1]));
