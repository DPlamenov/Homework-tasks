let array = [20, 60, 10];

let index = 6;
while (index > array.length - 1) {
    index -= array.length;
}
console.log(index);
console.log(array[index]);