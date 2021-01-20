/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let both = [...nums1, ...nums2].sort((a,b)=> a-b)
    
    let res = 0
    let med = Math.floor(both.length/2)
    
    if (both.length%2 === 0){
        res = (both[med-1]+ both[med])/2
    } else {
        res = both[med]
    }
    
    return res
};
