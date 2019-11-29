function solve(arr) {
    let nums = arr.shift().split(' ').map(Number);
    let maxCapacity = arr.shift();

    arr.forEach(function (value) {
        let num = 0;
        if (value.includes("Add")) {
            num = value.split(" ")[1];
            nums.push(num);
        } else {
            num = Number(value.split(" ")[0]);
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] + num <= maxCapacity) {
                    nums[i] += num;
                    break;
                }
            }
        }
    });
    console.log(nums.join(' '));
}