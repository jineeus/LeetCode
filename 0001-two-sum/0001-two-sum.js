/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const result = new Map();
    for(let i = 0; i < nums.length; i++){
        const remain = target - nums[i];
        if(result.has(remain)){
            return [result.get(remain), i];
        }
        result.set(nums[i], i);
    }
};
