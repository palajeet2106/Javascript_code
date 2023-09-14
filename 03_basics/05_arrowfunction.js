//Arrow Functions

// const user = {
//     username : "Ajeet",
//     price : 999,
//     welcomeMessage : function () {
//              console.log(`${this.username} welcome to website`);
//     }
// }

//  //user.welcomeMessage();   // output = Ajeet welcome to website

//  user.username = "vishu"
//  user.welcomeMessage();    // output = vishu welcome to website


// console.log(this);      // output = {}    




// const user = {
//     username : "Ajeet",
//     price : 999,
//     welcomeMessage : function () {
//         console.log(this);       //   output   = {
//                                  //            username: 'vishu',
//                                  //           price: 999,
//                                 //            welcomeMessage: [Function: welcomeMessage]
//                                 //        }
//     }
// }

//  //user.welcomeMessage();   // output = Ajeet welcome to website

//  user.username = "vishu"
//  user.welcomeMessage();    // output = vishu welcome to website


// //console.log(this);      // output = {}      kyuki yah global object hai



// function chai (){
//     let username = "Ajeet"
//    // console.log(this);
//    console.log(this.username);      // output = undefined
// }
// chai()




// const chai = function chai (){
//     let username = "Ajeet"
//    // console.log(this);
//    console.log(this.username);      // output = undefined
// }
// chai()




const chai = ()  => {
    let username = "Ajeet"
   // console.log(this);             // output = { }
   console.log(this.username);      // output = undefined
}
chai()



// Syntax Of Arrow Function

// () =>  {}


//Expliccit Return

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,5));     // output = 8


//Implicit return

// const addtwo = (num1 , num2) => num1 + num2

// console.log(addtwo(3,5));     // output = 8


// OR

// const addtwo = (num1 , num2) => (num1 + num2)

// console.log(addtwo(3,5));     // output = 8




// const addtwo = (num1 , num2) => {username : "Ajeet"}

// console.log(addtwo(3,5));     // output = undefined



const addtwo = (num1 , num2) => ({username : "Ajeet"})

console.log(addtwo(3,5));     // output = { username: 'Ajeet' }




