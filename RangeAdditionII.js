/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let row = 40000
  let col = 40000
  for (let i = 0; i < ops.length; i++) {
    row = Math.min(row, ops[i][0])
    col = Math.min(col, ops[i][1])
  }
  row = Math.min(row, m)
  col = Math.min(col, n)
  return row * col
}