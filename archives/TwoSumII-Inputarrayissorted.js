/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  console.time('test')
  let results = []
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[k] > target) {
        break
      }
      if (numbers[i] + numbers[k] === target) {
        results = [i + 1, k + 1]
        break
      }
    }
  }
  return results
}

console.log(twoSum([-1, 0, 5], 4))
console.timeEnd('test')

