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

function electionsWinners(votes, k) {
    let max = Number.NEGATIVE_INFINITY;
    let multiple_maxes = false;
    votes.forEach(number => {
        if (number > max) {
            max = number;
            multiple_maxes = false;
        } else if (number == max) {
            multiple_maxes = true
        }
    })
    let possibleWinners = 0;
    votes.forEach(number2 => {
        if (number2 + k > max || (number2 == max && !multiple_maxes)) possibleWinners += 1;
    })
    return possibleWinners;
}

function isMAC48Address(inputString) {
    let possibleChars = 'ABCDEF0123456789';
    let inputArray = inputString.split('-');
    if (inputArray.length !== 6) return false;
    for (let i = 0; i < inputArray.length; i++) {function isMAC48Address(inputString) {
    let possibleChars = 'ABCDEF0123456789';
    let inputArray = inputString.split('-');
    if (inputArray.length !== 6) return false;
    for (let i = 0; i <inputArray.length; i++) {
        let group = inputArray[i];
        if (group.length != 2) return false;
        for (let j = 0; j< 2; j++) {
            let char = group[j];
            if (!possibleChars.includes(char)) return false
        }
    }
    return true;
}

        let group = inputArray[i];
        if (group.length != 2) return false;
        for (let j = 0; j < 2; j++) {
            let char = group[j];
            if (!possibleChars.includes(char)) return false
        }
    }
    return true;
}

function lineEncoding(s) {
    let newString = '';
    let count = 1;
    let currentChar = s[0];
    for (let i = 1; i < s.length; i++) {
        let testChar = s[i];
        if (testChar == currentChar) {
            count++
        } else {
            newString += count > 1 ? (count.toString() + currentChar) : currentChar;
            currentChar = testChar;
            count = 1
        }
    }
    newString += count > 1 ? (count.toString() + currentChar) : currentChar;
    return newString;
}

function minesweeperClick(field, x, y) {
    let rows = field.length;
    let cols = field[0].length
    let visited = new Set();
    let queue = [[x, y]];
    let newMatrix = [];
    let currentBombs;
    let directions = [[1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1], [0, 1], [0, -1]];
    for (let i = 0; i < rows; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
            newMatrix[i][j] = -1
        }
    }
    visited.add([x, y].join(''))

    while (queue.length > 0) {
        let currentPosition = queue.shift();
        if (field[currentPosition[0]][currentPosition[1]]) continue;
        currentBombs = checkNeighbors(field, currentPosition[0], currentPosition[1]);
        if (currentBombs == 0) {
            directions.forEach(([xDif, yDif]) => {
                newX = currentPosition[0] + xDif;
                newY = currentPosition[1] + yDif;
                newX = (newX >= 0 && newX < rows) ? newX : null;
                newY = (newY >= 0 && newY < cols) ? newY : null;
                if (newX !== null && newY !== null) {
                    if (visited.has([newX, newY].join(''))) {

                    } else {
                        visited.add([newX, newY].join(''))
                        queue.push([newX, newY]);
                    }
                }
            })

        }
        newMatrix[currentPosition[0]][currentPosition[1]] = currentBombs;
    }
    return newMatrix
}


function checkNeighbors(field, x, y) {
    let cols = field[0].length;
    let rows = field.length
    let directions = [[1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1], [0, 1], [0, -1]];
    let bombs = 0;
    let newX, newY;
    directions.forEach(([xDif, yDif]) => {
        newX = x + xDif;
        newY = y + yDif;
        newX = (newX >= 0 && newX < rows) ? newX : null;
        newY = (newY >= 0 && newY < cols) ? newY : null;
        if (newX !== null && newY !== null && field[newX][newY]) {

            bombs += 1;
        }
    })

    return bombs;
}


// field:
[[false, false, false],
[false, false, false],
[false, false, false],
[false, true, true],
[false, false, false]]
// x: 1
// y: 0
// Expected Output:
// [[0, 0, 0],
// [0, 0, 0],
// [1, 2, 2],
// [-1, -1, -1],
// [-1, -1, -1]]


function rearrangeLastN(l, n) {
    if (l == null || n == 0) return l;
    let oldHead = l;
    let slowNode = l;
    let fastNode = l;
    let counter = 1;
    let prevNode;
    while (fastNode.next && fastNode.next.next) {
        counter++;
        prevNode = slowNode;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    console.log(slowNode.value)
    if (counter == n) {
        prevNode.next = null;
        currentNode = slowNode;
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = oldHead;
        return slowNode
    } else if (counter < n) {
        currentNode = oldHead;
        remainingNodes = counter
        let moved = false
        while (remainingNodes > (n - counter)) {
            prevNode = currentNode;
            currentNode = currentNode.next
            moved = true;
        }
        if (!moved) return currentNode
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = oldHead;
        prevNode.next = null
        return currentNode

    } else if (counter > n) {
        currentNode = slowNode;
        while (counter > n) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            counter--
        }
        prevNode.next = null;
        currentNode.next = oldHead;
        return currentNode
    }


}
function rearrangeLastN(l, n) {
    if (l == null || n == 0) return l;
    let length = 0;
    currentNode = l;
    while (currentNode) {
        length++
        currentNode = currentNode.next;
    }
    if (n >= length) return l
    let prevNode;
    let newHead = l;
    while (length > n) {
        prevNode = newHead;
        newHead = newHead.next;
        length--
    }
    prevNode.next = null;
    currNode = newHead;
    while (currNode.next) {
        currNode = currNode.next
    }
    currNode.next = l
    return newHead
}

function findProfession(level, pos) {
    if (level == 1) {
        return 'Engineer'
    }

    if (findProfession(level - 1, Math.floor((pos + 1) / 2)) == 'Doctor') {
        return pos % 2 > 0 ? 'Doctor' : 'Engineer'
    }
    return pos % 2 > 0 ? 'Engineer' : 'Doctor'



}

function kthSmallestInBST(t, k) {
    let values = [];
    function grabValue(node) {
        if (values.length < k) {
            if (node.left) grabValue(node.left)
            values.push(node.value)
            if (node.right) grabValue(node.right)
        }

    }
    grabValue(t)
    return values[k - 1]
}

function kthSmallestInBST(t, k) {
    let value;
    let count = 0;
    function grabValue(node) {
        if (!node) return;
        grabValue(node.left)
        count++
        if (count == k) {
            value = node.value;
            return
        }
        grabValue(node.right)
    }
    grabValue(t)
    return value;
}
 
 function chessKnight(cell) {
    let moves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]
    let cols = '0abcdefgh';
    let numberCell = [cols.indexOf(cell[0]), parseInt(cell[1])]
    let possibleMoves = 0;
    let newX, newY;
    moves.forEach(([xPos, yPos]) => {
        newX = numberCell[0] + xPos;
        newY = numberCell[1] + yPos;
        if (Math.min(newX, newY) >= 1 && Math.max(newX, newY) <= 8) {
            possibleMoves++;
        }
    })
    return possibleMoves
}