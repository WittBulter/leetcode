/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let index
  return findNums.map(num => {
    index = nums.indexOf(num)
    while (index !== nums.length) {
      if (nums[index] > num) {
        return nums[index]
      }
      index ++
    }
    return -1
  })
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))