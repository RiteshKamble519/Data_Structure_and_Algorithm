class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.count = 1
    }

    append(value) {
        let newNode = new Node(value)
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode;
        this.count++;
        return this
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head
        this.head.prev = newNode;
        this.head = newNode;
        this.count++;
        return this;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    printList() {
        let printLinkedList = this.head;
        while (printLinkedList) {
            console.log(printLinkedList.value)
            printLinkedList = printLinkedList.next
        }
    }

    insertAtIndex(index, value) {
        let newNode = new Node(value)
        let linkedListInsert = this.traverseToIndex(index)
        newNode.prev = linkedListInsert.prev
        newNode.next = linkedListInsert
        linkedListInsert.prev = newNode;
        newNode.prev.next = newNode;
        console.log("Inserted " + value + " at position" + index)
        this.count++
        this.printList()
    }

    removeAtIndex(index) {
        let removeNode = this.traverseToIndex(index)
        removeNode.next.prev = removeNode.prev
        removeNode.prev.next = removeNode.next
        console.log("Removing : ", removeNode.value + " from index : ", index)
        this.count--
        this.printList()
    }
}

let myDoublyLinkedList = new DoublyLinkedList(10)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.append(34)
myDoublyLinkedList.append(23)
myDoublyLinkedList.append(56)
myDoublyLinkedList.prepend(17)
myDoublyLinkedList.insertAtIndex(2, 20)
myDoublyLinkedList.removeAtIndex(5)
