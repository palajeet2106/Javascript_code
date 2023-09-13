// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));   // output = 2

// console.log(calculateCartPrice(200,400,500));   // output = 200



// function calculateCartPrice(...num1){  //   ...(rest operator or spread operator)
//     return num1
// }


// console.log(calculateCartPrice(200,400,500));   // output = [ 200, 400, 500 ]



// const user = {
//     username : "Ajeet pal",
//     price : 199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)       // output = username is Ajeet pal and price is 199



// function calculateCartPrice(val1 , val2,...num1){  //   ...(rest operator or spread operator)
//     return num1
// }


// console.log(calculateCartPrice(200,400,500,600 ,700));   // output = [ 500, 600, 700 ]



// const user = {
//     username : "Ajeet pal",
//     prices : 199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)       // output = username is Ajeet pal and price is 199




function calculateCartPrice(val1 , val2,...num1){  //   ...(rest operator or spread operator)
    return num1
}


console.log(calculateCartPrice(200,400,500,600 ,700));   // output = [ 500, 600, 700 ]



const user = {
    username : "Ajeet pal",
    prices : 199                    // output = username is Ajeet pal and price is undefined
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)      // output = username is Ajeet pal and price is undefined


 // ++++++++++ OR  +++++++++

 handleObject({
    username:"vishu",
    price : 399
 })                         // output = username is vishu and price is 399



 const myNewArray = [200,300,400,600];
 function returnSecondValue (getArray){
//    return getArray[2]
   return getArray[1]
 }
//  console.log(returnSecondValue(myNewArray));      //  output = 400
 console.log(returnSecondValue(myNewArray));      //  output = 300

 //  ++++++++++++ OR +++++++++++

 console.log(returnSecondValue([200,100,400,600]));    // output = 100
