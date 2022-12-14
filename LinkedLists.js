class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

// const n1 = new Node(100)
// console.log(n1)

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty
        if (!this.head) {
            this.head = node;

        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    // Insert at index

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return
        }
        if (index == 0) {
            this.head = new Node(data, this.head)
            return
        }
        let node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;

        }
        node.next = current
        previous.next = node
        this.size++;
    }


    // Get at Index

    // remove at Index

    // Clear List

    // Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

}


const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500,0)

ll.printListData()

