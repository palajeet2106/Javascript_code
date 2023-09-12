// Arrays
const myArr = [0,1,2,3,4,5];
// console.log(myArr);
// console.log(myArr[3]);

// const myHeros = ["Ajeet","vikas"];
// const myArr2 = new Array(1,2,3,4);


// Array Methods

// myArr.push(6);  // push = to add value in last
// console.log(myArr);  

// myArr.pop();  // to remove value in last
// console.log(myArr);  

// myArr.unshift(6);  // to add value in start
// console.log(myArr); 

// myArr.shift();   // to remove value in start
// console.log(myArr); 

// console.log(myArr.includes(9));  // check the value in array   output = false   9 array m nhi hai

// console.log(myArr.indexOf(3));   // output = 3   means 3 no pr kon si value hai

// const newArr = myArr.join();  // to convert array in strings
// console.log(myArr); 
// console.log(newArr); 
// console.log( typeof newArr); 


// slice , splice

// console.log("A ",myArr);  // output = A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1,4);  // output = [1,2,3]
// console.log(myn1); 

// console.log("B ",myArr);  // output = B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,4);
console.log("C ",myArr);  // output = C  [ 0, 5 ]
console.log(myn2);   // output = [ 1, 2, 3, 4 ]
