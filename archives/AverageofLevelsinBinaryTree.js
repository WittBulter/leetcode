/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return []
  let result = [root.val]
  if (!root.left && !root.right) return result
  
  let currentNode = [root], nextNode = [], i = 1
  while (i) {
    currentNode.forEach(node => {
      node.left && nextNode.push(node.left)
      node.right && nextNode.push(node.right)
    })
    if (nextNode.length === 0) {
      i = 0
      break;
    }
    result.push(nextNode.reduce((pre, next) => pre + next.val, 0) / nextNode.length)
    currentNode = [...nextNode]
    nextNode = []
  }
  return result
};