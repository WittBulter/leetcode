/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  let sentenceMap = sentence.split(' ')
  let indexs = []
  sentenceMap = sentenceMap.map(word => {
    indexs = []
    dict.forEach(d => word.startsWith(d) && indexs.push(d))
    if (indexs.length === 0) return word
    if (indexs.length === 1) return indexs[0]
    return indexs.reduce((pre, next) => next.length < pre.length ? next : pre, indexs[0])
  })
  return sentenceMap.join(' ')
}


console.log(replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"))