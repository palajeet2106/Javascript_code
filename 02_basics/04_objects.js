// Object Singleton Or Constructure

const tiderUser = new Object()   // this is  singleton object
// console.log(tiderUser);     // output = {} empty

// const tiderUser = {}       // this is  non  singleton object
// // console.log(tiderUser);     // output = {} empty

tiderUser.id = "123abc";
tiderUser.isLoggedIn = false
tiderUser.name = "Ajeet Pal";

// console.log(tiderUser); 

// const regularUser = {
//     email : "ajeet@gmail.com",
//     fullname : {
//         userfullname:{
//             firstname : "Ajeet",
//             lastname : "pal",
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname);   // output = { firstname: 'Ajeet', lastname: 'pal' }

// console.log(regularUser.fullname.userfullname.firstname);   // output = Ajeet

// console.log(regularUser.fullname);   // output = { userfullname: { firstname: 'Ajeet', lastname: 'pal' } }

// const obj1 = {1:'a',2:'b'}
// const obj2 = {2:'a',3:'b'}

// const obj3 = {obj1 , obj2}
// console.log(obj3);    //  output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'a', '3': 'b' } }


// const obj3 = Object.assign(obj1 , obj2);
// console.log(obj3);    //  output = { '1': 'a', '2': 'a', '3': 'b' }


// const obj3 = Object.assign({} ,obj1 , obj2);
// console.log(obj3);    //  output = { '1': 'a', '2': 'a', '3': 'b' }


// Spread Operator

// const obj3 = {...obj1,...obj2}
// console.log(obj3);  //  output = { '1': 'a', '2': 'a', '3': 'b' }


// const users = [
//     {
//         id : 1,
//         email : "ajet@gmail.com"
//     },
// ]
// users[1].email
console.log(tiderUser);          // output = { id: '123abc', isLoggedIn: false, name: 'Ajeet Pal' }

console.log(Object.keys(tiderUser));   // output = [ 'id', 'isLoggedIn', 'name' ]

console.log(Object.values(tiderUser));   // output = [ '123abc', false, 'Ajeet Pal' ]

console.log(Object.entries(tiderUser));     //  output = [
                                            //            [ 'id', '123abc' ],
                                            //            [ 'isLoggedIn', false ],
                                            //            [ 'name', 'Ajeet Pal' ]
                                            //        ]

 console.log(tiderUser.hasOwnProperty('isLoggedIn'));       // output =   true

 console.log(tiderUser.hasOwnProperty('isLogged'));       // output =   false         
  
 // hasOwnProperty = value ko check kiya jata hai ki value hai ki nhi aur output true ya false m aata hai