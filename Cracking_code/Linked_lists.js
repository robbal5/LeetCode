//Remove Dups

function removeDups(node, list = {}) {
    if (node.next == null) {
        if (list[node.val]) {
            node.prev.next = null;
        }
        return;
    }
    else {
        if (list[node.val]) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        } else {
            list[node.val] = true;
        }
    }
    removeDups(node.next, list)
}

//Above is how to solve using temporary storage, recursive

function removeDupsTwo(node) {
    let firstNode = node;
    
    while (firstNode.next != null) {
        let testNode = firstNode.next;
        while (testNode) {
            if (firstNode.val == testNode.val) {
                testNode.prev.next = testNode.next;
                testNode.next.prev = testNode.prev;
            }
            testNode = testNode.next
        }
        firstNode = firstNode.next
    }
}

//Above is how to solve with no temp storage, two pointers, O(n^2) time complexity

function returnKthToLast(head, k) {
    let testNode = head;
    let count = 1;
    while (testNode.next) {
        count++;
        testNode = testNode.next
    }
    for (i = 1; i < k; i++) {
        testNode = testNode.prev
    }
    return testNode;
}

function deleteMiddle(node) {
    if (node.next && node.prev){
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
}

function partition(node, partition) {
    let lessValues = [];
    let moreValues = [];
    let testNode = node
    while(testNode) {
        if (node.value < partition) {
            lessValues.push(node.value)
        } else {
            moreValues.push(node.value)
        }
        testNode = testNode.next
    }
    let newHead = new Node(lessValues.pop());
    let iterativeNode = newHead;
    while (lessValues.length && moreValues.length) {
        let newNode;
        if (lessValues.length) {
            newNode = new Node(lessValues.pop());
        } else {
            newNode = new Node(moreValues.pop());
        }
        iterativeNode.next = newNode;
        newNode.prev = iterativeNode;
        iterativeNode = newNode
    }
    return newHead;
}

