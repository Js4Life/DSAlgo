function multiply(num1, num2) {
    if (num2 !== undefined) {
        return num1 * num2
    }

    return function domultiply(num2) {
        return num1 * num2
    }
}

console.log(multiply(4, 5))
console.log(multiply(3, 3))
// 20
// 9

const double = multiply(2)
console.log(double(5))
console.log(double(11))
// 10
// 22