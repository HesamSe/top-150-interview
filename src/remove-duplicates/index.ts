function removeDuplicates(nums: number[]): number {
    let uniqueIndex = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== nums[uniqueIndex]){
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
}

export default removeDuplicates;