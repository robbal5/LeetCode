//BFS, directed graph Route between nodes
function routeBetweenNodes(start, finish) {
    let queue = [];
    queue.push(start);
    while(queue.length != 0) {
        let currNode = queue.unshift();
        if (currNode.val == finish) {
            return true;
        }
        currNode.children.forEach(child=> {
            queue.push(child)
        })
    }
    return false;
}

// Minimal Tree, given sorted (increasing) array created binary search tree

function minimalTree(array, parent = null) {
    if (array.length == 0) return;
    let middle = Math.floor(array.length / 2);
    let newNode = new Node(array[middle]);
    newNode.parent = parent;
    let leftArr = array.slice(0, middle);
    let rightArr = array.slice(middle+1);
    newNode.left = (minimalTree(leftArr, newNode ))
    newNode.right =(minimalTree(rightArr, newNode))
    return newNode;
}


//List of Depths, given binary tree, create linked list for each depth

function listOfDepths(head) {
    let headList = new List(head)
    let headArr = [];
    let nextArr = [];
    let counter = 0;
    let depth = 0;
    let queue = [head]
    while (queue.length > 0) {
        let currNode = queue.unshift();
        let currList = new List(currNode)
        if (nextArr[depth]) {
            nextArr.next = currList
        } else{
            nextArr[depth] = currList;
            headArr[depth] = currList;
        }
        counter += 1;
        if (counter >= Math.exp(2, depth)) {
            depth += 1;
            counter = 0
        }
        currNode.children.forEach(child => queue.push(child))
    }
    return headList;
}

//Check Balanced, binary tree, heights of two subtrees of any node never differ by more than one

function checkBalanced(head, depth = 0) {
    let leafDepths = [];
    if (head.children.length == 0) {
        return [depth];
    } else {
        head.children.forEach(child => {
            leafDepths.concat(checkBalanced(child, depth+1))
        })
    }
    if (depth == 0) {
        let min = Math.min(...leafDepths);
        let max = Math.max(...leafDepths);
        return (max - min <= 1)
    } else{
        return leafDepths;
    }

}

// Validate BST, definition is all to the left must be less than node, all to right must be greater
//may need to track prev min and prev max, because it can fail based on nodes more than 1 away

function validateBST(node, prevMin = null, prevMax = null) {
    if (!prevMin || node.val < prevMin) prevMin = node.val;
    if (!prevMax || node.val > prevMax) prevMax = node.val;
    if (node.left.val > node.val || node.right.val < node.val) return false;
    
}