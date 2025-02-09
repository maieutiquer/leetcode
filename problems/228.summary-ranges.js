/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return []
  }

  const allRanges = []
  let currentRange = []

  for (let i = 0; i < nums.length; i++) {
    if (
      currentRange.length === 0 ||
      nums[i] - currentRange[currentRange.length - 1] === 1
    ) {
      currentRange.push(nums[i])
    } else {
      allRanges.push(currentRange)
      currentRange = [nums[i]]
    }
  }

  allRanges.push(currentRange)

  return allRanges.map(
    (range) =>
      `${range[0]}${range.length === 1 ? "" : `->${range[range.length - 1]}`}`,
  )
}
// @lc code=end
