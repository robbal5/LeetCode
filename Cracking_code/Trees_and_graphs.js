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
    return headArr;
}