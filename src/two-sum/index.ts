export default function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    let i = 0;

    while (i < nums.length) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);

        i++;
    }

    throw new Error('Not Found');

};