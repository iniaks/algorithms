export class Stack {
    stack: any[] = []
    // push an element into the peek of stack
    push(element: any) {
        this.stack.push(element)
    }
    // remove the element of bottom of stack
    pop() {
        return this.stack.pop()
    }
    // get the peek element of stack
    peek() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return this.stack.length == 0
    }
    size() {
        return this.stack.length
    }
    clear() {
        this.stack = []
    }
    print() {
        console.log(this.stack.toString())
    }
}