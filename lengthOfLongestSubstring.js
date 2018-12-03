/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var n = s.split("");
    var result = 0;
    var start = 0;
    var len = n.length;
    for(let i = 0; i<len; i++){
        var j = n.indexOf(n[i],start);
       if(j != i){
            result = Math.max(result,i-start);
            start = j+1;
        }  
        if(i === len-1){
            result = Math.max(result,i-start+1);
        } 
    }
    return result;
};
