class setOfStacks {
    constructor() {
        this.stacks = [[]]
        this.max = 5;
    }

    push(value) {
        let lastSubstack = this.stacks[this.stacks.length -1]
        if (lastSubstack.length <= this.max) {
            lastSubstack.push(value)
        } else {
            this.stacks.push([]);
            this.stacks[this.stacks.length - 1].push(value)
        }
    }

    pop() {
        let lastSubstack = this.stacks[this.stacks.length -1];
        if (lastSubstack.length == 0 && this.stacks.length == 1) {
            return null;
        } else {
            let returnValue = lastSubstack.pop();
            if (lastSubstack.length == 0 && this.stacks.length > 1) {
                this.stacks.pop();
            }
            return returnValue;
        }
    }

    popAt(index) {
        let chosenStack = this.stacks[index];
        if (chosenStack) {
            return chosenStack.pop();
        } else {
            return null
        }
    }
}

class MyQueue {
    constructor() {
        this.enterStack = [];
        this.exitStack = [];
    }

    push(value) {
        this.enterStack.push(value)
    }

    pop() {
        if (this.exitStack.length == 0) {
           if (this.enterStack.length == 0) return null;
           let currentLength = this.enterStack.length
           for(let i = 0; i<currentLength; i++) {
               this.exitStack.push(this.enterStack.pop())
               console.log(i)
           }
        }
        return this.exitStack.pop();
    }
}

function sortStack(stack) {
    if (stack.isEmpty()) return [];
    let tempStack = new Stack();
    let value;
    while(!stack.isEmpty()) {
        let value = stack.pop();
        while(value) {
            if (value >= tempStack.peek() || tempStack.length == 0 ) {
                tempStack.push(value);
                value = null;
            } else {
                stack.push(tempStack.pop())
            }
        }
    }
    while(!tempStack.isEmpty()){
        stack.push(tempStack.pop())
    }
    return stack;

}

class Animal {
    constructor(type){
        this.type = type;
    }   
}

class Shelter {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(animal) {
        let newNode = new Node(animal)
        if (this.head){
            this.tail.next = newNode
            this.tail = this.tail.next
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    dequeueAny() {
        let temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null;
        return temp;
    }

    dequeueCat() {
        let temp = this.tail
        while (temp.animal.type != 'Cat') {
            if (temp == null) return null;
            temp = temp.prev
        }
        let next = temp.next;
        let prev = temp.prev;
        prev.next = next;
        next.prev = prev;
        return temp;
    }

    dequeueDog() {
        let temp = this.tail
        while (temp.animal.type != 'Dog') {
            if (temp == null) return null;
            temp = temp.prev
        }
        let next = temp.next;
        let prev = temp.prev;
        prev.next = next;
        next.prev = prev;
        return temp;
    }
}