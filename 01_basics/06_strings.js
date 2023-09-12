const name = "Ajeet";
const repoCount = 50;
//  console.log(name +  repoCount + "value");
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('ajeet-pal');


 //strings methods

 console.log(gameName);
 console.log(gameName[3]);
console.log(gameName.__proto__); 
console.log(gameName.length); // length - find the length of words
console.log(gameName.toUpperCase()); 
console.log(gameName.toLowerCase()); 
console.log(gameName.charAt('4')); // charArt - kon se number pr kon sa letter hai
console.log(gameName.indexOf('t')); // indexof - letter kon se number hai

const newString = gameName.substring(0,4);  // substring - kha se kha tk ki value chahiye  isme negative value include nhi hoti hai
console.log(newString);


const anotherString = gameName.slice(-9,3);  // slice - kha se kha tk ki value chahiye isme negative value include ho jaygi
console.log(anotherString);
// console.log(gameName.length);


const newStringOne = "       Ajeet.      ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim - remove spaces


const url = "https://ajeet.com/Ajeet%20pal";
console.log(url.replace('%20','-')); // replace - replace value

console.log(url.includes('Ajeet')); // includes - find value
console.log(gameName.split('-'));   // split - convert array

