// Stack

// functions: push, pop, peek, length/size

const Stack = function(){
    this.count = 0;
    this.storage = [];

    this.push = function(val) {
        this.storage.push(val);
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) return undefined;
        this.count--;
        return this.storage.pop()
    }

    this.peek = function() {
        return this.storage[this.count - 1]
    }

    this.size = function() {
        return this.count
    }

}

//Sets

function Set() {
    var collection = [];
    
    this.has = function() {
        return (collection.indexOf(element) !== -1)
    }

    this.values = function() {
        return collection
    }

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true
        } else {
            return false
        }
    }

    this.remove = function(element) {
        if (this.has(element)) {
            let index = collection.indexOf(element)
            collection.splice(index, 1);
            return true
        }
        return false
    }

    this.size = function() {
        return collection.length
    }

    this.union = function(otherSet) {
        let newSet = new Set();
        let currValues = this.values();
        let secondValues = otherSet.values;
        currValues.forEach((val1) => {
            newSet.add(val1)
        })
        secondValues.forEach(val2 => {
            newSet.add(val2)
        })

        return newSet
    }

    this.intersection = function(otherSet) {
        let newSet = new Set();
        let currValues = this.values();
        currValues.forEach(val => {
            if (otherSet.has(val)) {
                newSet.add(val)
            }
        });

        return newSet
    }

    this.difference = function(otherSet) {
        let newSet = new Set();
        let currValues = this.values();
        let secondValues = otherSet.values();
        currValues.forEach(val1 => {
            if (!otherSet.has(val1)) {
                newSet.add(val1)
            }
        });
        secondValues.forEach(val2 => {
            if (!this.has(val2)) {
                newSet.add(val2)
            }
        });
        return newSet;
    }

    this.subset = function(otherSet) {
        let currValues = this.values();
        return currValues.every(val => {
            return otherSet.has(val);
        });
    }

}


function Queue() {
   let collection = [];

   this.print = function() {
       console.log(collection)
   }

   this.enqueue = function(value) {
       collection.push(element);
   }

   this.dequeue = function() {
       return collection.shift();
   }

   this.front = function() {
       return collection[0]
   }

   this.size = function() {
       return collection.length
   }

   this.isEmpty = function() {
       return collection.length === 0
   }
}

function PriorityQueue() {
    let collection = [];

    this.printCollection = function(){
     console.log(collection)
    }

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for (var i = 0; i<collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    added = true;
                    collection.splice(i, 0, element)
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }

    }

    this.dequeue = function() {
        let value = collection.shift();
        return value[0]
    }
}

//Binary Search Tree

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add() {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return 
                    } else {
                        return searchTree(node.left)
                    }
                } else if (data >node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return
                    } else {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }

            searchTree(node)
        }
    }

    findMin() {
        let node = this.root
        if (node === null) return null;
        while (node.left != null) {
            node = node.left
        }
        return node.data
    }

    findMax() {
        let node = this.root;
        if (node === null) return null;
        while (node.right !== null) {
            node = node.right
        }
        return node.data
    }

    find(data) {
        let current = this.root;
        while (current) {
            if (current.data === data)  {
                return current
            } else if (current.data < data) {
                current = current.right
            } else {
                current = current.left
            } 
        }
        return null;
    }

    isPresent(data) {
        return this.find(data) !== null;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null
                } else if (node.left === null) {
                    return node.right
                } else if (node.right === null) {
                    return node.left
                }
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode= tempNode.left;
                }
    
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data)
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node
            } else {
                node.right = removeNode(node.right, data);
            }
        }
        this.root = removeNode(this.root, data);
    }

    findMinHeight() {
        let node = this.root;
        if (node === null) {
            return 0
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right)
        return left < right ? left: right;
        }
    
    findMaxHeight() {
        let node = this.root;
        if (node === null) {
            return 0
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        return left > right ? left : right;
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    inOrder() {
        if (this.root == null) return null;
        let result = new Array();
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }

    preOrder() {
        if (this.root == null) return null;
        let result = new Array();
        function traverseInOrder(node) {
            result.push(node.data);
            node.left && traverseInOrder(node.left);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }

    preOrder() {
        if (this.root == null) return null;
        let result = new Array();
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            node.right && traverseInOrder(node.right);
            result.push(node.data);
        }
        traverseInOrder(this.root);
        return result;
    }

    levelOrder() {
        let node = this.root;
        if (node === null) return null;
        let queue = [node];
        let results = [];
        while (queue.length > 0) {
            let currNode = queue.shift();
            results.push(currNode.data);
            currNode.left && queue.push(currNode.left);
            currNode.right && queue.push(currNode.right);
        }
        return results;
    }
}

//Hash Table
function customHash(word, max) {
    let val = 0;
    for(let i = 0; i < word.length; i++) {
        val += word.charCodeAt(i)
    }
    return val % max
}

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 4;
    }

    print() {
        console.log(this.storage)
    }

    add(key, value) {
        let index = customHash(key, this.storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [[key, value]]
        } else {
            let inserted = false;
            for (let i = 0; i<storage[index].length; i++) {
                if (key === storage[index][i][0]) {
                    storage[index][i][1] = value;
                    inserted = true;
                    break
                }
            } if (!inserted) {
                storage[index].push([key,value])
            }
        }
    }

    remove(key) {
        let index = customHash(key, this.storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for(let i = 0; i<storage[index].length; i++) {
                if (storage[index][i][0] == key) {
                    delete storage[index][i]
                }
            }
        }
    };

    lookup(key) {
        let index = customHash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i<storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index[i][1]]
                }
            }
        }
        return undefined
    }
}
