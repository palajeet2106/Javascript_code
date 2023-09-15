
// for of loop

// [ "","",""]
// [{},{},{}]

// for (const iterator of object) {
   
// }

// Note = yha pr object ka mtlb jis cheez k uper loop lagana hai



const arr = [1,2,3,4,5];

for (const num of arr) {
   //  console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
 //  console.log(`Each char is ${greet}`);
}



// Maps

// const map = new Map();
// map.set('IN' , "India")
// map.set('USA' , "United State Of America")
// map.set('FR' , "France")

// console.log(map);          // output = Map(3) {
//                                             //     'IN' => 'India',
//                                             //     'USA' => 'United State Of America',
//                                             //     'FR' => 'France'
//                                             // }



const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('FR' , "France")
map.set('IN' , "India")    // note = map unique value k liye jane jate hai

//console.log(map);          // output = Map(3) {
                                            //     'IN' => 'India',
                                            //     'USA' => 'United State Of America',
                                            //     'FR' => 'France'
                                            // }


for (const key of map) {
   // console.log(key);
}                       //  output = [ 'IN', 'India' ]
                         //           [ 'USA', 'United State Of America' ]
                          //          [ 'FR', 'France' ]



for (const [key , value] of map) {
   // console.log(key , ':-', value);
}                                     // output = IN :- India
                                      //              USA :- United State Of America
                                      //              FR :- France


const myObject = {
    'game1': "NFS",
    'game2' : "spiderman"
}

for (const [key , value] of myObject) {
    console.log(key , ':-', value);
}                                         //output = myObject is not iterable
// Note =  object m for of loop iterable nhi hai

