let student = function () {
    let studentName = "Petar";
    let studentAge = 24;
    let getStudentName = function () {
        return studentName;
    };
    let getStudentAge = function () {
        return studentAge;
    };
    let setStudentName = function (_studentName) {
        studentName = _studentName;
    };
    let setStudentAge = function (_studentAge) {
        studentAge = _studentAge;
        return studentAge;
    };
    return {getStudentName, getStudentAge, setStudentName, setStudentAge};
}();
console.log(student);