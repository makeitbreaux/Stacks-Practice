class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    //PUSH: ADD ELEMENT TO TOP OF STACK 
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count ++;
        return this.count -1;
    }

    //POP: RETURN & REMOVE ELEMENT FROM TOP OF STACK
    //RETURN UNDEFINED IF STACK IS EMPTY
    pop() {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deleteItem} removed`)
        return deleteItem;
    }
    
    //PEEK: SHOW TOP ELEMENT IN STACK
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }
    
    //ISEMPTY: CHECK IF STACK IS EMPTY
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0;    
    }

    //SIZE: CHECK SIZE OF STACK
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }

    //PRINT: PRINT ELEMENTS IN STACK
    print() {
        let str = '';
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str;
    }
    //CLEAR: CLEAR STACK
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared')
        return this.items;
    }
}

const stack = new Stack;

stack.isEmpty()

stack.push(100)
stack.push(200)
stack.push(300)

console.log(stack.print())

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())
