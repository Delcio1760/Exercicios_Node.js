/**
 * Exercise 3 - CLI calculator using a Node module
 *
 * Reads operation and numbers from command line arguments,
 * uses the math module to calculate and prints the result.
 *
 * Usage: node ex03.js <operation> <number1> <number2>
 *
 * require('./math') - imports the math module from the same folder
 * switch/case      - selects the correct operation based on the operator argument
 */

const math = require('./math')

const args = process.argv.slice(2)

const operation = args[0]
const a = Number(args[1])
const b = Number(args[2])

if (args.length < 3) {
    console.log('ERROR: Not enough operators! USAGE: node ex3 <operation> <number1> <number2>')
    process.exit(1)
}

switch(operation){
    case '+': console.log(`${a} + ${b} = ${math.add(a, b)}`)
    break

    case'-': console.log(`${a} - ${b} = ${math.subtract(a, b)}`)
    break

    case'*': console.log(`${a} * ${b} = ${math.multiply(a, b)}`)
    break

    case'/': console.log(`${a} / ${b} = ${math.divide(a, b)}`)
    break

    default:
        console.log('ERROR: Invalid operation! Supported operations are: +, -, *, /')
        process.exit(1)
}
