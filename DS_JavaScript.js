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