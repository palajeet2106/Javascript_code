const myObject = {
    JS : "JavaScript",
    CPP : "c++",
    RB : "Ruby",
    Swift : "Swift In apple"
}

// for in loop

for (const key in myObject) {
   //  console.log(key);   
}           
// output =   JS
 //           CPP
 //           RB
  //          Swift



  for (const key in myObject) {
  // console.log(myObject[key]);  
 }  

 // output =      JavaScript
   //             c++
 //               Ruby
  //              Swift In apple


  for (const key in myObject) {
 // console.log(`${key} shortcut is for ${myObject[key]}`); 
   }  

   // output =    JS shortcut is for JavaScript
    //            CPP shortcut is for c++
   //             RB shortcut is for Ruby
   //             Swift shortcut is for Swift In apple


const programming = ["js","rb","py","Java","cpp"];

for (const key in programming) {
  //  console.log(key);
}                           // output = 0 1 2 3 4


for (const key in programming) {
    //  console.log(programming[key]);
  }                                   // output = js rb py java cpp

//  Note = Array ki key by default number hoti hai aur zero se start hoti hai


const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('FR' , "France")

for (const key in map) {
   console.log(key);
}

// Note  = for in loop m Map iterable nhi hai