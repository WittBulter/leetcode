/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  let result = [], tmp, count = 0
  let i = 0, k
  while (i !== nums.length) {
    k = 0
    while (k !== nums[i].length) {
      tmp = ~~(count / c)
      if (count % c === 0) {
        result[tmp] = [nums[i][k]]
      } else {
        result[tmp].push(nums[i][k])
      }
      count ++
      k ++
    }
    i ++
  }
  return result
};

console.log(matrixReshape([[1, 2], [3, 4], [50, 66]], 2, 3))