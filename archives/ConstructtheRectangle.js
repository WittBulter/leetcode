/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  const reg = /^\+?[1-9][0-9]*$/
  let w = Math.sqrt(area)
  if (reg.test(w)) return [w, w]
  w = ~~w
  while (w) {
    if (reg.test(area / w)) {
      return [area / w, w]
      break
    }
    w --
  }
};

console.log(constructRectangle(6))

