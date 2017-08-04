/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let results = new Set(), index
  for (let i = 0; i < nums1.length; i ++) {
    index = nums2.findIndex(v => v === nums1[i])
    if (index !== -1) {
      results.add(nums1[i])
    }
  }
  return [...results]
};