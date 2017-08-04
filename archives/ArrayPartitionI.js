/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((pre, next) => pre - next).reduce((pre, next, index) => index % 2 === 0 ? pre + next: pre, 0)
};


console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]))