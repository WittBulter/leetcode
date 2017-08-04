/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let str = s + t, result = 0
  for (let i = 0; i < str.length; i ++) {
    result ^= str[i].charCodeAt(0)
  }
  return String.fromCharCode(result)
}

console.log(findTheDifference('abwcd', 'abwcda'))