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

function sumLists(list1, list2) {
    let rollover = 0;
    let newHead;
    let testNode;
    while(list1 || list2) {
        let val1 = list1 ? list1.val : 0;
        let val2 = list2 ? list2.val : 0;
        let newVal = val1 + val2 + rollover;
        if (newVal > 9) {
            newVal = newVal % 10;
            rollover = 1
        }
        else {
            rollover = 0;
        }
        let newNode = new Node(newVal)
        if (!newHead){
            newHead = newNode;
            testNode = newHead;
        }  else {
            testNode.next = newNode;
            testNode = newNode;
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    if (rollover == 1) {
        testNode.next = new Node(1)
    }
    return newHead; 
}

function palindrome(headNode) {
    let trail = headNode;
    let tail;
    while (trail) {
        if (trail.next) {
            tail = trail.next
        }
        trail = tail;
    }
    let start = headNode;
    let end = tail;
    while (true) {
        if (start == end) {
            return true;
        } else if (start.next == end) {
            return (start.val == end.val)
        } else if(start.val == end.val) {
            start = start.next;
            end = end.prev;
            continue; 
        } else {
            return false;
        }
    }
}

function intersection(list1, list2) {
    let listOneNodes = {};
    let listOneTest = list1;
    let listTwoTest = list2;
    while (listOneTest) {
        listOneNodes[listOneTest] = true;
        listOneTest = listOneTest.next
    }
    while(listTwoTest) {
        if (listOneNodes[listTwoTest]) return true;
        listTwoTest = listTwoTest.next;
    }
    return false;
}

function loopDetection(list, values = {}) {
    if (list == null) return false;
    if (values[list]) return true;
    values[list] = list;
    return loopDetection(list.next, values)
}

//Not optimal, makes us iterations through h + l, with h being non looped portion and l being looped portion
// Takes O(n) space from recursion AND values memory