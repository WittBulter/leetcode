/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let arr = magazine.split(''), index
  for (let i = 0; i < ransomNote.length; i ++) {
    index = arr.findIndex(v => v === ransomNote[i])
    if (index === -1) {
      return false
      break;
    }
    arr.splice(index, 1)
  }
  return true
};