 function one(){
    const username = "Ajeet"
    function two(){
        const website = " youtube"
        console.log(username);
    }
   // console.log(website); // // output = website is not defined (kyuki block scope ki value ko bahar declare nhi kr skte )
    two();                 // output = Ajeet
 }
 one();

 if (true) {
       const username = "Ajeet"
       if (username === "Ajeet") {
            const website = " youtube"
           console.log(username + website);  //  output = Ajeet youtube
       }
      // console.log(website);   // output = website is not defined (kyuki block scope ki value ko bahar declare nhi kr skte )
 }
// console.log(username);     // output = username is not defined   (kyuki block scope ki value ko bahar declare nhi kr skte )


// 🔹🔹🔹🔹🔹🔹🔹🔹🔹 Intresting 🔹🔹🔹🔹🔹🔹🔹🔹🔹

// function addone (num){
//     return num + 1
// }
// addone(5);
// console.log(addone(5));      // output = 6


// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5);

// console.log(addTwo(5));    // output = 7




console.log(addone(5));      // output = 6

function addone (num){
    return num + 1
}



console.log(addTwo(5));    // output =  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}


