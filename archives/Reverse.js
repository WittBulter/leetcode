/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const y = String(Math.abs(x)).split('').reverse().join('')
    const result = x < 0 ? -y : + y
    return isNaN(result) || result > 2147483647 || result < -2147483647 ? 0 : result
};