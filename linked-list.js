class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// making linked list in js
class LinkedList{
    constructor(head, size){
        this.head = null
        this.size = 0
    }
    
    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.size++;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.size++
        }
    }

    appendToFront(data){
        const newNode = new Node(data)
        if(!this.head) this.head = newNode;
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    
    print(){
        if(!this.head) console.log("List is Empty!!!!!")
        else{
            let currentNode = this.head;
            while(currentNode){
                console.log(`${currentNode.data} -> `)
                currentNode = currentNode.next;
            }
        }
    }
    
    reverseLL(){
        if(!this.head) console.log(`List emptyyyy!!!`)
        else{
            let prevPtr=null, currPtr=this.head, nextPtr=currPtr.next;
            while(!currPtr){
                currPtr.next = prevPtr;
                prevPtr = currPtr;
                nextPtr = currPtr.next;
            }
            this.head = prevPtr;
        }
    }
    
    removeLL(){
        if(!this.head) console.log(`Emtpy ll`)
        else{
            this.head = this.head.next;
        }
    }
    convertToNumber(convertedNumber, data){
        return convertedNumber*10 + data;
    }
    
    convertToLinkedList(num){
        this.head = null;
        while(num != 0){
            let unitPlace = num%10;
            num = (num - unitPlace)/10;
            console.log(`current number:${unitPlace}`)
            this.appendToFront(unitPlace)
        }
    }
    
    incrementLL(){
        let currentNode = this.head;
        let outputNumber = 0;
        if(!this.head) console.log(`Empty Linked list`)
        else{
            while(currentNode){
                outputNumber = this.convertToNumber(outputNumber, currentNode.data)
                currentNode = currentNode.next;
            }
            outputNumber += 1;
            this.convertToLinkedList(outputNumber);
        }
    }
    
}





const ll = new LinkedList();
ll.append(5)
ll.append(4)
ll.append(3)
ll.append(2)
ll.append(1)
ll.incrementLL()
ll.print();