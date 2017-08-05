/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Number.MAX_SAFE_INTEGER
  let pre = Number.MAX_SAFE_INTEGER
  const eachTree = (root) => {
    root.left && eachTree(root.left)
    min = Math.min(min, Math.abs(root.val - pre))
    pre = root.val
    root.right && eachTree(root.right)
    return min
  }
  return eachTree(root)
};