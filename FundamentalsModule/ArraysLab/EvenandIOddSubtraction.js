function f(nums) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even += nums[i];
        } else {
            odd += nums[i];
        }
    }

    let result = even - odd;
    console.log(result);
}