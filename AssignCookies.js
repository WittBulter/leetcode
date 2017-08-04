/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let result = 0
  let i = 0, j = 0
  g.sort((pre, next) => pre - next)
  s.sort((pre, next) => pre - next)
  
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      result ++
      i ++
    }
    j ++
  }
  return result
};


console.log(findContentChildren([1, 2, 3], [2, 3]))