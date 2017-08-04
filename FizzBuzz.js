/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = []
  let i = 0
  while (i !== n) {
    if ((i + 1) % 3 === 0) {
      result.push('Fizz')
      if ((i + 1) % 5 === 0) {
        result[i] = 'FizzBuzz'
      }
    } else if ((i + 1) % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(String((i + 1)))
    }
    i ++
  }
  return result
};