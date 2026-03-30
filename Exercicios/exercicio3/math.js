/**
 * Math module - provides 4 basic mathematical operations
 * This module only knows how to do math, nothing else.
 * It receives numbers and returns results.
 *
 * module.exports - exports the functions so other files can use them with require()
 */

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) return 'ERROR: Cannot divide by zero!'
    return a / b
}

module.exports = { add, subtract, multiply, divide }