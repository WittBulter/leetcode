/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const dirMap = {
    '{': 1,
    '[': 1,
    '(': 1,
    '}': 0,
    ']': 0,
    ')': 0,
  }
  const isEqual = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  let stack = [], now, result = true
  ;[...new Array(s.length)].forEach((v, i) => {
    now = dirMap[s[i]]
    // is left
    if (now === 1) return stack.push(s[i])
    // is right
    if (now === 0) {
      if (stack.length === 0 || isEqual[stack[stack.length - 1]] !== s[i]) {
        return result = false
      }
      stack.pop()
    }
  })
  return result && stack.length === 0
};
console.log(isValid('['))