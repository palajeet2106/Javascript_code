// Global and Local Scope

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);


 //var c = 300;
// if (true) {
//     let a = 10;    // output =  error
//     const b = 20;     // output =  error
//     var c = 30;       // output =  30    isliye hm var ka use nhi krte hai   kyuki block scope ki value bahar nhi jani chahiye
// }
// //console.log(a);
// //console.log(b);
// console.log(c);


let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    console.log("Inner:",a);   // output  = Inner: 10

}
console.log(a);     // output  = 300

