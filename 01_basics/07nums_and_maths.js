// nums
const score = 200;
console.log(score);
// numbers methods
const balance = new Number(100);  // value in number
console.log(balance);

// convert number to strings
console.log(balance .toString());
console.log(balance .toString().length);
console.log( typeof balance .toString());

// fixed value for ex-  fixed value 2 then output 100.00 
// fixed value for ex-  fixed value 3 then output 100.000 
console.log( balance .toFixed(2));
console.log( balance .toFixed(3));
console.log( balance .toFixed(1));

const otherNumber = 23.699;
console.log( otherNumber.toPrecision(3));  // output = 23.7
console.log( otherNumber.toPrecision(4));  // output = 23.70
console.log( otherNumber.toPrecision(1));  // output = 2e+1
console.log( otherNumber.toPrecision(5));  // output = 23.699


const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // to use usa currency

console.log(hundreds.toLocaleString('en-IN')); // to use indian currency

// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹Maths🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹

console.log(Math);


console.log(Math.abs(-4)); //  absolute(abs) is used for to convert negative value in positive value

console.log(Math.round(4.3)); // output = 4
console.log(Math.round(4.6)); // output = 5

console.log(Math.ceil(4.2)); // output = 5 isme big value aaygi


console.log(Math.floor(4.2)); // output = 4 isme small  value aaygi


console.log(Math.min(4,7,6,2));  //output = 2

console.log(Math.max(4,7,6,2));  // output = 7

console.log(Math.random()); // random value between 0 to 1
console.log(Math.random()); // random value between 0 to 1

console.log((Math.random()*10) +1); 

console.log(Math.floor(Math.random()*10) +1); 

const min = 10;
const max = 20;
console.log(Math.random()*(max-min +1));
console.log(Math.floor(Math.random()*(max-min +1)) + min);








