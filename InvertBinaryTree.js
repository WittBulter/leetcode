/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return
  }
  [root.left, root.right] = [root.right || null, root.left || null]
  root.left && (root.left.left || root.left.right) && invertTree(root.left)
  root.right && (root.left.left || root.left.right) && invertTree(root.right)
  return root
};