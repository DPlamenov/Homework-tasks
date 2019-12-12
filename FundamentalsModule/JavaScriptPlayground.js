let obj = {
    'name' : 'Ivan',
    'getName': function () {
        return this.name;
    },
    'setName': function (name) {
        this.name = name;
    }
};
obj.setName('q');
console.log(obj.getName());

function join(array, separator) {
    let result = "";

    for (let i = 0; i < array.length - 1; i++) {
        result += (array[i] + separator);
    }

    result += (array.length - 1);
    return result;
}