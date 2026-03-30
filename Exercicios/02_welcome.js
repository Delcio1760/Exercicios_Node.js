/**
 * Exercise 2 - Environment variable greeting
 *
 * Reads the USER_NAME environment variable and displays a personalized greeting.
 * If the variable is not set, displays a generic message to the visitor.
 *
 * Usage:
 *   node 02_welcome.js
 *   USER_NAME=Teresa node 02_welcome.js
 *
 * process.env         - object containing all environment variables of the system
 * process.env.USER_NAME - reads the value of the USER_NAME environment variable
 *                         returns undefined if the variable is not set
 */

if(process.env.USER_NAME){
   
    console.log(`Hello ${process.env.USER_NAME}!Welcome to Node`)

}else{
    console.log('Hello, visitor! Set the USER_NAME variable for a personalized greeting')
}
