"use strict";

// # primitive datatypes

// 7 types : string,symbol,null, number,boolean,bigint,undefined 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let useerEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId );

const bigNumber = BigInt(12345);

console.log( bigNumber);




// # Non primitive datatypes ( Reference types)

// Array , Objects , Functions

//Array

const cars = ["swift","thar","fortuner"];

//Objects

let myObj = {
    name : "Ajeet",
    age : 22,
}
console.log(myObj);


// Functions

 const myFunct = function () {
      console.log("hello Coder");
 }
 console.log(myFunct) ;
 console.log(typeof  myFunct );
 console.log(typeof   cars);
 console.log(typeof  myObj );
 console.log(typeof bigNumber );
 console.log(typeof anotherId  );



//  🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹Memory🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹

// 2 types = Stack(primitive datatypes) , Heap(non primitive datatypes)

// stack

let myYouTubename = "Ajeetdotcom";
let anotherName = myYouTubename;
anotherName = "virajdotcom";
console.log(myYouTubename);
console.log(anotherName);
 
// Haep

let user = {
    email:"ajeet@gmauil.com",

    upi : "ajeet@ybl"
}

console.log(user);


let usertwo = user;
   usertwo.email = "aj@gmail.com";
// console.log(usertwo);

console.log(user.email);
console.log(usertwo.email);

