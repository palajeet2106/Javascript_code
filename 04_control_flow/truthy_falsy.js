
// const userEmail = "ajeet@gmail.com";
// if (userEmail) {
//       console.log("Got user email");
// }else{
//     console.log("don't have user email");
// }                                                    // output = Got user email



// const userEmail = "";
// if (userEmail) {
//       console.log("Got user email");
// }else{
//     console.log("don't have user email");
// }                                                    // output = don't have user email




const userEmail = [];
if (userEmail) {
      console.log("Got user email");
}else{
    console.log("don't have user email");
}                                                    // output = Got user email


// falsy value =  false , 0(zero) , -0(minus zero) , BigInt 0n , "" , null , undefined , NaN

// Truthy value = " 0 " , " False " , " " , [] , {} , function(){}

if(userEmail.length === 0){
     console.log("Array is Empty");
}                                    // output = Array is Empty


const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}                                   // output = Object is Empty




 // Note :-
 
 // false == 0    output = true
 // false == ''   output = true
 // 0 == ''       output =  true