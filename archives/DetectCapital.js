/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length === 1) return true
  let len = word.length, result = word[word.length -1].charCodeAt(0) < 91
  while (len--) {
    if (len === 0) {
      if (word[len].charCodeAt(0) > 96 && result === true) {
        return false
        break;
      }
      return true
    }
    if (word[len].charCodeAt(0) < 91 !== result) {
      return false
      break;
    }
  }
  return true
};

console.log(detectCapitalUse('WEQWE'))