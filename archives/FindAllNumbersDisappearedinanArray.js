/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  nums.sort((pre, next) => pre - next)
  if (nums[nums.length - 1] < nums.length) {
    nums.push(nums.length + 1)
  }
  if (nums[0] > 1) {
    nums.unshift(0)
  }
  let results = []
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] - nums[i - 1] > 1) {
      nums[i - 1] = nums[i - 1] + 1
      results.push(nums[i - 1])
      i --
    }
  }
  return results
};

console.log(findDisappearedNumbers([2, 2]))