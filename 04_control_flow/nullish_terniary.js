// Nullish Coalescing operator(??) : null undefined

let val1 ;

// val1 = 5 ?? 10;     // output = 5

// val1 = null ?? 10;     // output = 10

// val1 = undefined ?? 15;     // output = 15


val1 = null ?? 10 ?? 15 ;     // output = 10

console.log(val1);


// Terniary Operator

//syntax  
// condition ? true : false

const iceTeaPrice =100;
iceTeaPrice <= 80 ? console.log("less than 80") :  console.log("more than 80");   // output = more than 80

iceTeaPrice >= 80 ? console.log("less than 80") :  console.log("more than 80");   // output = less than 80