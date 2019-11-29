function solve(nums) {
    let smallest = nums.slice(0).sort((a, b) => a - b);
    let biggest = nums.sort(((a, b) => b - a));

    let output = [];
    for (let i = 0; i < nums.length / 2.0; i++) {
        output.push(biggest[i]);
        if (smallest[i] !== biggest[i]) {
            output.push(smallest[i]);
        }
    }
    console.log(output.join(' '));
}
