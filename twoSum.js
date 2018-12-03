/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0, len = nums.length;  i<len-1;i++){
        var n = nums.indexOf(target - nums[i],i+1);
        if(n != -1){
            arr.push(i,n);
            break;
        }
    }
    return arr;
};
