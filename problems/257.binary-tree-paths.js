/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  function dfs(node, path = "", paths = []) {
    if (node === null) return

    path = `${path}${node.val}`

    if (node.left === null && node.right === null) {
      paths.push(path)
    } else {
      path = `${path}->`
      dfs(node.left, path, paths)
      dfs(node.right, path, paths)
    }

    return paths
  }

  return dfs(root)
}
// @lc code=end
