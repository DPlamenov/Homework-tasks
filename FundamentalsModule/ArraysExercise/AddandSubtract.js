function f(nums) {
    let originalSum = 0;
    let newSum = 0;
    for (let i = 0; i < nums.length; i++) {
        originalSum += nums[i];
        if(nums[i] %2 === 0){
            nums[i] += i;
        }else{
            nums[i] -= i;
        }
        newSum += nums[i];
    }
    console.log(nums);
    console.log(originalSum);
    console.log(newSum);
}