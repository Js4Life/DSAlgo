function removeDups(nums) {
    let startingIndex = 0;
    for (let secondIndex = 1; secondIndex < nums.length; secondIndex++) {
       // console.log(nums[startingIndex], nums[secondIndex]);
        if (nums[startingIndex] !== nums[secondIndex]) {
            startingIndex++;
            nums[startingIndex] = nums[secondIndex]
        }
    }
    return startingIndex + 1
}

console.log(removeDups([1,1,2]))