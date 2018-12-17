// compute the greatest common divisor of two nonnegative intergers
const compute = (x: number, y: number): number => {
    // if y is 0, the greatest common divisor is x
    if (y == 0) return x

    let res: number = x % y
    return compute(y, res)
}