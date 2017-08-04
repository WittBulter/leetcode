/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let i = 0, result = 0, tmp = 0
  while (i !== nums.length) {
    result = Math.max(result, tmp = nums[i] === 0 ? 0 : tmp + 1)
    i ++
  }
  return result
};