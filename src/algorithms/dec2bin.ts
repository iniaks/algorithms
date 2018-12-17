import { Stack } from '../structures/stack'

export const convert = (source: number): string => {
    let stack = new Stack()
    let decimal = source
    let binary = ''

    // create a new stack, begin to compute
    // divide 2, get the remainder, redo this until the number is zero
    while (decimal > 0) {
        let res = Math.floor(decimal % 2)
        stack.push(res)
        decimal = Math.floor(decimal / 2)
    }
    // if the stack is not empty, then pop the stack to reconstruct the binary string
    while (!stack.isEmpty()) {
        binary += stack.pop().toString()
    }

    return binary
}

//test
console.log(convert(233))
