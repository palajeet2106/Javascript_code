// singleton
//object.create

//objects literals

const mySym = Symbol("key1");
const JsUser = {
    name : "ajeet",
    age:21,
    "full name" : "Ajeet Pal",
   [mySym] : "mykey1",
   email : "ajeet@gmail.com",
   location : "Fatehpur",
   isLoggedIn : false,
   LostLoggeddays : ["monday","saturday"],
}
// console.log(JsUser.email);  // output = ajeet@gmail.com
// console.log(JsUser["email"]); // output = ajeet@gmail.com

// console.log(JsUser["full name"]);  // output = Ajeet Pal

// console.log(JsUser[mySym]);  //   output =  mykey1

// console.log(typeof JsUser [mySym]);  //   output =  mykey1

// JsUser.email = "aj@gmail.com";   // chamge the email
// console.log(JsUser["email"]); // output = aj@gmail.com 

Object.freeze(JsUser);  // frreze =  do not change the value
JsUser.email = "aj@gmail.com";
// console.log(JsUser); 
// console.log(JsUser["email"]); // output = aj@gmail.com 


JsUser.greeting = function(){
    console.log("hello Js User");
}
// console.log(JsUser.greeting); // output = [Function (anonymous)]

// console.log(JsUser.greeting()); // output = hello Js User

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.Symbol}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());