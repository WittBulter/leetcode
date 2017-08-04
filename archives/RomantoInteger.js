/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let length = s.length
  let now, result
  while (length --) {
    now = s[length]
    if (!result) {
      result = map[now]
    } else if (map[now] >= map[s[length + 1]]) {
      result += map[now]
    } else {
      result -= map[now]
    }
  }
  return result
};