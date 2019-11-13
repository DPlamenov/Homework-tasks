function f(n, numbers) {
    let nums = [];

    for (let i = 0; i < n; i++) {
        nums[i] = numbers[i];
    }

    for (let i = 0; i < nums.length / 2; i++) {
        let lastElement = nums[nums.length - 1 - i];
        let firstElement = nums[i];
        nums[i] = lastElement;
        nums[nums.length - 1 - i] = firstElement;
    }
    let output = "";
    for (let i = 0; i < nums.length; i++) {
        output += `${nums[i]} `;
    }
    console.log(output);
}