function removeElement(nums: number[], val: number): number {
    let shift = 0;
    for(let i=0; i< nums.length; i++) {
        nums[i] = nums[i+shift];
        if(nums[i] === val){
            shift++;
            i--
        }

    }
    return nums.length - shift;
}

export default removeElement;