/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    // store linkedlist values
    let first = []
    let sec = []
    while (l1){
        first.push(l1.val)
        l1 = l1.next
    }
    
    while (l2){
        sec.push(l2.val)
        l2 = l2.next
    }
​
    // reverse and join digits
    first =first.reverse().join("")
    sec = sec.reverse().join("")
​
    //add both numbers
    let sum = BigInt(first) + BigInt(sec)
     sum = sum.toString().split('')
​
    //split num into digits
    let digits = []
    while (sum.length > 0){
        digits.push(sum.pop())
    }
        
    //create new linkedlist
    let counter = 0
    let newList = new ListNode(digits[counter],null)
    let head = newList
    while (counter < digits.length-1){
        counter++
        head.next = new ListNode((digits[counter]),null)
        head = head.next;
    }
    return newList
    
};
