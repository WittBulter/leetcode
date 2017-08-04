/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

console.log(reverseWords('word1 word2 word3 test'))