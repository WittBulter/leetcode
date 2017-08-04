/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let str = String(x)
  while (str.length >= 0) {
    if (str.length <= 1) return true
    if (str[0] !== str[str.length - 1]) {
      return false
    }
    str = str.substr(1, str.length - 2)
  }
};