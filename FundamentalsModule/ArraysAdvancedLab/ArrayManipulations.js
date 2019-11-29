function solve(arr) {
    let nums = arr.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                add(nums, firstNum);
                break;
            case "Remove":
                nums = remove(nums, firstNum);
                break;
            case "RemoveAt":
                removeAt(nums, firstNum);
                break;
            case "Insert":
                insert(nums, firstNum, secondNum);
        }

        function add(arr, el) {
            arr.push(el);
        }

        function remove(arr, el) {
            return arr.filter((e) => e !== el);
        }

        function removeAt(arr, index) {
            arr.splice(index, 1);
        }

        function insert(array, num, index) {
            array.splice(index, 0, num);
        }
    }
    console.log(nums.join(' '));
}