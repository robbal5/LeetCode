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