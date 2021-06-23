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

