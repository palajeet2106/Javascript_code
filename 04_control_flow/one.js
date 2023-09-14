// If statement 

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("User Logged In");
// }

// const tempreture = 41;
// if (tempreture  < 50) {
//     console.log("Less Than 50 ");    // output = Less Than 50 
// }
// console.log("tempreture is grater than 50");    // output = tempreture is grater than 50




// const tempreture = 41;
// if (tempreture  === 41) {
//     console.log("Less Than 50 ");    // output = Less Than 50 
// }
// console.log("tempreture is grater than 50");    // output = tempreture is grater than 50




// const tempreture = 41;
// if (tempreture  === 40) {
//     console.log("Less Than 50 ");    
// }else{
//     console.log("tempreture is grater than 50");    // output = tempreture is grater than 50
// }



// const score = 200;
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`);     // output = power is not defined   kyuki lacal ya block scope ki value ko bahar declare krke execute nhin kra skte hai


//Short hand notation 

// const balance = 1000;
// if(balance > 500) console.log("test");  // output = test     


// const balance = 1000;
// if(balance > 500) console.log("test") , console.log("test2")  // output =  test test2     is tarah se code likhna shi nhi hota hai

 


// const balance = 1000;
// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//    console.log("less than 1200"); 
// }                                      //  output = less than 1200
     



const balance = 1000;
if (balance < 500) {
    console.log("less than 500");
}else if (balance > 750) {
    console.log("greater than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
   console.log("less than 1200"); 
}                                 // output = greater than 750




// const UserLoggedIn = true;
// const debitCard = true ; 
// if (UserLoggedIn && debitCard) {
//     console.log("allow to buy course");
// }                                            // output = allow to buy course




const UserLoggedIn = true;
const debitCard = false; 
if (UserLoggedIn && debitCard) {
    console.log("allow to buy course");
} else{
    console.log("do not buy course");
}                                           // output = do not buy course

// Note = && ( and operator) m dono value true honi chahiye





const LoggedInFromGoogle = false ;
const LoggedInFromEmail = true ;
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User Logged In");             //  output = User Logged In
}


// Note = || ( or operator) m dono m se koi ek value true honi chahiye