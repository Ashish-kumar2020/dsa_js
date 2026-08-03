class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

    findLinkedListLength = (head) =>{
        let count = 0;
        if(head === null) return 0;
        let curr = head;
        while(curr !== null){
            count++;
            curr = curr.next;
        }
        return count;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log(head.findLinkedListLength(head));