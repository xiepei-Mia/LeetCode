/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var num = nums1.concat(nums2);
    var mid;
    num.sort((a,b)=>a-b);

    if(num.length%2 == 1){
        mid =  num[(num.length-1)/2];
    }else{
        mid = (num[num.length/2]+num[num.length/2 - 1])/2;
    }
    return mid;
};
