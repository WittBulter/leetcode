/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let result = 0
  
  grid.forEach((rows, index) => {
    rows.forEach((row, i) => {
      if (row) {
        result += 2
        rows[i + 1] && result --
        rows[i - 1] && result --
        if (!grid[index + 1] || grid[index + 1][i] === 0) {
          result ++
        }
        if (!grid[index - 1] || grid[index - 1][i] === 0) {
          result ++
        }
      }
    })
  })
  return result
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]))