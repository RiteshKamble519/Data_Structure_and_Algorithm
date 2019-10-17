let nodelength = 0;
function CreateNode(node, pos) {
    this.node = node;
    this.prev = null;
    this.next = null;
    this.pos = pos;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(element) {
        var node = new CreateNode(element, ++nodelength);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        console.log("Node '" + node.node + "' added at position " + node.pos);
        this.length++;
        return this;
    }

    deleteNodeAtPos(pos) {
        let temp;
        if (pos > this.length)
            return 1;
        else {
            temp = this.head;
            for (let i = 1; i < pos; i++) {
                temp = temp.next;
            }
            let prevEle = temp.prev;
            let nextEle = temp.next;
            prevEle.next = nextEle;
            nextEle.prev = prevEle;
            console.log("Node " + temp.node + " at position " + temp.pos + " is deleted")
            temp.prev = null;
            temp.next = null;
            this.length--;
            console.log("Length of node after deleting '" + temp.node + "' :" + this.length)
        }
    }
    deleteNodeAtEnd() {
        let temp = this.tail;
        this.tail = temp.prev;
        console.log("Node " + temp.node + " at position " + temp.pos + " is deleted")
        temp = this.tail;
        temp.next = null;
        this.length--;
    }

    getNodeAtPos(pos) {
        let curr = this.head;
        let curr1 = curr.next;
        var currlocation = this.head;
        for (let i = 1; i < pos; i++) {
            currlocation = currlocation.next;
        }
        console.log("Printing node at position", pos, ":", currlocation.node);
    }
}

const chain = new LinkedList();
chain.addNode(1);
chain.addNode(2);
chain.addNode(3);
chain.addNode(4);
chain.addNode(5);
chain.addNode(6);
chain.addNode(7);
chain.getNodeAtPos(5);
chain.deleteNodeAtEnd();
chain.getNodeAtPos(6);
chain.deleteNodeAtPos(4);
