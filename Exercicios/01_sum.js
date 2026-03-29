/**
 * Exercise 1 - Sum of command line arguments
 *
 * Accepts a set of numbers passed as command line arguments and displays their sum.
 *
 * Usage: node 01_sum.js <number1> <number2>...<numberN>
 *
 * process.argv - array with all command line arguments
 *   - index 0: path to Node executable
 *   - index 1: path to script file
 *   - index 2+: actual arguments passed by the user
 *
 * .slice(2) - returns a new array starting from index 2 (skips Node and script path)
 * Number()  - converts a string to a number (returns NaN if invalid)
 * isNaN()   - returns true if the value is Not a Number
 * process.exit(1) - terminates the process immediately with error code 1
 */

const args = process.argv.slice(2)

if(args.length < 1){
    console.log('There are missing arguments');
    process.exit(1)
}

for(let arg of args){
    if(isNaN(Number(arg))){                                      // Aqui estou a ver se o argumento é um numero, como o argumento
                                                                // sempre vem em formato de string eu converto para numero e vejo se aqule numero é um numero valido ou não, se for um numero valido ele retorna false e o if não é executado, se for um numero invalido ele retorna true e o if é executado
        process.exit(1)
    }
}

let sum = 0

for(let arg of args){
    sum += Number(arg)
}
console.log(`The sum is: ${sum}`)