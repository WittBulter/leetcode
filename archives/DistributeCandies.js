/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let types = {}
  candies.forEach(candy => {
    if (!types[candy]) {
      types[candy] = 1
    } else {
      types[candy] ++
    }
  })
  return Object.keys(types).length > candies.length / 2 ? candies.length / 2 : Object.keys(types).length
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))