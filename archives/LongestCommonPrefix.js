/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  let temp = ''
  const maxLength = strs[0].length
  for (let i = 0; i < maxLength; i ++ ) {
    for (let k = 1; k < strs.length; k ++) {
      if (strs[0][i] !== strs[k][i] || strs[k].length === i) {
        return temp
      }
    }
    temp += strs[0][i]
  }
  return temp
};