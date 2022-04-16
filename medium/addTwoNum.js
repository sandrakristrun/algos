 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var addTwoNumbers = function(l1, l2) {
  let first = l1;
  let second = l2
  let newValue;
  let newNode = new ListNode()
  let current = newNode;
  while(first != null || second != null){
      if(first && second){
          newValue = first.val + second.val
      } else if(first){
          newValue = first.val
      } else {
          newValue = second.val
      }
      current.next = new ListNode(newValue)
      current = current.next;
      if(first.next){
          first = first.next
      }
      if(second.next){
          second = second.next
      }
  }
  return newNode.next
};

console.log(addTwoNumbers([1,2,3], [4,5,6]))
