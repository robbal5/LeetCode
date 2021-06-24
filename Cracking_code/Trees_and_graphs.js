//BFS, directed graph Route between nodes
function routeBetweenNodes(start, finish) {
    let queue = [];
    queue.push(start);
    while(queue.length != 0) {
        let currNode = queue.pop();
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
