// For Loops

// Syntax 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(" 5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 0; i <=10; i++) {
//     console.log(` outer value is : ${i}`);
//   for (let j = 0; j <=10; j++) {
//     console.log(`Inner value is ${j} and outer value ${i}`);
   
    
//   }
    
// }



// for (let i = 1; i <=10; i++) {
//     console.log(` outer value is : ${i}`);
//   for (let j = 1; j <=10; j++) {
//     console.log(i + '*' + j + ' = ' + i*j);


   
    
//   }
    
// }



let myArray = ["flash","batman","supeerman"];
     console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}                                        // output = 3
                                        //      flash
                                        //      batman
                                        //      supeerman

        
for (let i = 1; i <=10; i++) {

         const element = i; 
         console.log(i*2);
}