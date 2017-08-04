/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let result = 0, odd = x ^ y
  while (odd) {
    result ++
    odd &= (odd - 1)
  }
  return result
};