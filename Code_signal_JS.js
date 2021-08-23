function sudoku2(grid) {
    let visited = new Set();
    let size = grid.length
    let rowString, colString, boxString, value, result;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            value = grid[i][j];
            if (value == '.') continue;
            rowString = `${value} found in row ${i}`;
            colString = `${value} found in col ${j}`;
            boxString = `${value} found in box ${Math.floor(i / 3)} ${Math.floor(j / 3)}`
            if (visited.has(rowString) || visited.has(colString) || visited.has(boxString)) {
                return false
            } else {
                visited.add(rowString)
                visited.add(colString)
                visited.add(boxString)
            }

        }
    }
    return true
}

function isCryptSolution(crypt, solution) {
    let solutionHash = {};
    solution.forEach(([char, value]) => {
        solutionHash[char] = value
    })
    let testSum = 0;
    let solutionSum = 0;
    let result = true;
    crypt.forEach((string, index) => {
        let subSum = '';
        for (let i = 0; i < string.length; i++) {

            let char = string[i];
            if (i == 0 && solutionHash[char] == '0' && string.length > 1) {
                result = false
                break
            }
            subSum += solutionHash[char]
        }
        if (index < 2) {
            testSum += parseInt(subSum)
        } else {
            solutionSum = parseInt(subSum)
        }
    })
    return result && testSum == solutionSum
}

function isListPalindrome(l) {
    if (!l) return true;
    let slow = l;
    let fast = l;
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let startToReverse = slow.next;
    let newList = reverseLinkedList(startToReverse);
    let testNode = l;
    while (newList) {
        if (testNode.value != newList.value) {
            return false
        } else {
            testNode = testNode.next
            newList = newList.next
        }
    }
    return true
}

function reverseLinkedList(head) {
    if (!head) return head;
    let prev = null;
    let next;
    while (head) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

function addTwoHugeNumbers(a, b) {
    aReverse = reverseLinkedList(a);
    bReverse = reverseLinkedList(b);
    let head = new ListNode(null);
    let newList = head;
    let aValue, bValue, newValue;
    let remainder = 0;

    while (aReverse || bReverse) {
        aValue = aReverse ? aReverse.value : 0;
        bValue = bReverse ? bReverse.value : 0;
        newValue = aValue + bValue + remainder
        remainder = Math.floor(newValue / 10000)
        newList.next = new ListNode((newValue % 10000))
        newList = newList.next
        aReverse = aReverse ? aReverse.next : aReverse;
        bReverse = bReverse ? bReverse.next : bReverse;
    }
    if (remainder !== 0) {
        newList.next = new ListNode(remainder)
    }
    return reverseLinkedList(head.next)
}

function mergeTwoLinkedLists(l1, l2) {
    let mergedList = new ListNode(null);
    let mergeNode = mergedList;
    let firstVal, secondVal;
    while (l1 && l2) {
        firstVal = l1.value;
        secondVal = l2.value;
        if (firstVal < secondVal) {
            mergeNode.next = l1;
            mergeNode = mergeNode.next
            l1 = l1.next
        } else {
            mergeNode.next = l2;
            mergeNode = mergeNode.next
            l2 = l2.next
        }
    }
    if (l1) {
        mergeNode.next = l1
    } else if (l2) {
        mergeNode.next = l2
    }
    return mergedList.next
}

function reverseNodesInKGroups(l, k) {
    let head = null;
    let lastToGo = null;
    let currentStart = l;
    let currentNode = l;
    let reversed, last;
    let lastSeen;
    nodes = 1;
    while (currentNode) {
        if (nodes % k == 0) {
            nodes = 0;
            currentNode = currentNode.next
            lastSeen = currentNode;
            let [reversed, newLast] = reverseSegment(currentStart, k)
            if (head === null) {
                head = reversed
                last = newLast
            } else {
                last.next = reversed;
                last = newLast;
            }

            currentStart = currentNode
        } else {
            currentNode = currentNode.next
        }
        nodes += 1
    }
    if (nodes !== 0) {
        last.next = lastSeen
    }
    function reverseSegment(node, value) {
        let head = node
        let start = 0;
        let prev = null
        let next
        while (start < value && node) {
            next = node.next
            node.next = prev
            prev = node
            node = next
            start += 1
        }
        return [prev, head]
    }
    return head
}