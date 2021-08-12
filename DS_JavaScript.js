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
}