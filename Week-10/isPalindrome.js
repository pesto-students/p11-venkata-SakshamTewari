function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function isPalindrome(head){
    let slow = head;
    let fast = head;

    while(fast.next!= null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let previous = slow;
    
}