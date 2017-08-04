/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let sum = 0, min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i ++) {
      min = Math.min(min, nums[i])
      sum += nums[i]
    }
    return sum - min * nums.length
  };