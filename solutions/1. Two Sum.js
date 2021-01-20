/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
​
var twoSum = function(nums, target) {
    const prevNumbers = {}
    
    for (let i=0; i<nums.length;i++){
        const need = target - nums[i]
        const ind2 = prevNumbers[need]
​
        if(ind2 !== undefined){
            return [ind2, i]
        } else {
            prevNumbers[nums[i]] = i
        }
    }
​
};
​
