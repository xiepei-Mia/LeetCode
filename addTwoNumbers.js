

    /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var list1 = l1;
    var list2 = l2;
    var pummy = new ListNode(1);
    var curr = pummy;
    
    var sum = 0;
    var target = 0;

    //插入函数
    var insert = function(list ,val){
         while(list.next){
             list = list.next;
         }
        var  tempL = new ListNode(val);
         list.next = tempL;
    }
    
    while(list1 || list2){
        if(!list1){
            list1 = new ListNode(0);
        }
        if(!list2){
            list2 = new ListNode(0);
        }
        sum = list1.val + list2.val+target;
        target = parseInt(sum/10);
        insert(curr,sum%10);
            
        list1 = list1.next;
        list2 = list2.next;
    }
    
    if(target === 1){
        insert(curr,1);
    }
    return pummy.next;
}
