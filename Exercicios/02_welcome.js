if(process.env.USER_NAME){
   
    console.log(`Hello ${process.env.USER_NAME}!Welcome to Node`)

}else{
    console.log('Hello, visitor! Set the USER_NAME variable for a personalized greeting')
}
