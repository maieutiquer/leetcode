/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10
    if (digits[i] !== 0) {
      return digits
    } else if (i === 0) {
      digits.unshift(1)
      return digits
    }
  }
}
// @lc code=end
