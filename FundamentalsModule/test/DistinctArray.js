function f(nums) {
    let unique = [];
    for (let i = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i]);
        }
    }
    let result = "";
    for (let i = 0; i < unique.length; i++) {
        result += `${unique[i]} `;
    }
    console.log(result);
}
