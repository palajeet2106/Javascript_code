// function sayMyName(){
//     console.log("A");
//     console.log("j");
//     console.log("e");
//     console.log("e");
//     console.log("t");
// }
// sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

// // addTwoNumbers(3,4);  // output = 7
// // addTwoNumbers("");  // output = undefined
// // addTwoNumbers()  // output = NaN
// // addTwoNumbers(3 , "4")  // output = 34

// // addTwoNumbers(3 , +"4")  // output = 7

// // addTwoNumbers(3 , "a")  // output = 3a
// // addTwoNumbers(3 , null)  // output = 3

// const  result = addTwoNumbers(3,5)
// console.log("Result",result);     //   output = Result undefined


// function addTwoNumbers(number1 , number2){
//     let result = number1+number2
//     // console.log("Ajeet");
//     return result           // return k bad dusri value print nhi hoti hai
//     // console.log("Ajeet");
// }
// const result = addTwoNumbers(3 ,5)
// console.log("result", result);       //   output = result 8

// OR

function addTwoNumbers(number1 , number2){
    return number1+number2
    
}
const result = addTwoNumbers(3 ,5)
console.log("result", result);       //   output = result 8


// function loginUserMessage (username){
//     return `${username} just logged in`
// }

// // loginUserMessage("Ajeet")    // output = kux bhi output nhi milega
// console.log(loginUserMessage("Ajeet"));   // output = Ajeet just logged in

// console.log(loginUserMessage());   // output = undefined just logged in


function loginUserMessage (username){
//  if(username === undefined){
    if(!username){
    console.log("Please enter a username");
    return
   }
   return `${username} just logged in`
}


console.log(loginUserMessage());   // output = Please enter a username
                                  //   undefined

