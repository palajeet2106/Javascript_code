// Immediately Invoked Function Expression ( IIFE )

// function chai (){
//     console.log(`DB CONNECTED`);   
// }
// chai()     
// output  = DB CONNECTED



// Syntax of IIFE

// ( definition of  function) ( execution)

(function chai () {
    // Named IIFE
    console.log(`DB CONNECTED`);
}) () ;                             // output = DB CONNECTED


(function aurcode(){
    // Simple OR Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
})()  ;                            // output = DB CONNECTED TWO

// Note : jb  do iife ko ek sath execute krvana ho to tb phle vale iife k last m (;) semicollen ka use krte hai tb dusra iife execute hoga




// ( () => {
//     console.log(`DB CONNECTED TWO`);
// }) ()                                    // output = DB CONNECTED TWO



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Ajeet")                                    // output = DB CONNECTED TWO Ajeet