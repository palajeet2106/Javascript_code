// Dates
// let myDate = new Date();
// console.log(myDate);  // output = 2023-09-12T17:53:56.993Z


// console.log(myDate.toString()); //output = 2023-09-12T17:57:35.626Z
//                                   //       Tue Sep 12 2023 17:57:35 GMT+0000 (Coordinated Universal Time) 


// console.log(myDate.toDateString()); //output = 2023-09-12T17:58:58.801Z
//                                      //         Tue Sep 12 2023

// console.log(myDate.toISOString()); //output = 2023-09-12T18:00:11.413Z

// console.log(myDate.toJSON()); //output = 2023-09-12T18:01:19.781Z

// console.log(myDate.toLocaleDateString()); //output = 9/12/2023

// console.log(myDate.toLocaleString()); //output = 9/12/2023, 6:03:06 PM

// console.log( typeof myDate); //output = object

// let myCreatedDate = new Date(2023,0,12);
// console.log(myCreatedDate); 

// console.log(myCreatedDate.toDateString()); //output = Thu Jan 12 2023

// let myCreatedDate = new Date(2023,0,12,5,3);
// console.log(myCreatedDate.toLocaleString()); //output = 1/12/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString()); //output = 1/14/2023, 12:00:00 AM


// ++++++++++++++++++++++++++++++++++++Time+++++++++++++++++++++++++

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);  
// console.log(myCreatedDate.getTime()); 

// console.log(Date.now()); 

// console.log(Date.now()/1000);  

// console.log(Math.floor(Date.now()/1000));  


let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth());

console.log(newDate.getMonth()+1);

console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekday: "long",
})