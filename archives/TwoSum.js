/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let next = [...nums]
  let result

  nums.forEach((num, index) => {
      next.splice(0, 1)
      next.forEach((v, i) => {
          if (num + v === target) {
              result = [index, index + i + 1]
          }
      })
  })
  
  return result
};