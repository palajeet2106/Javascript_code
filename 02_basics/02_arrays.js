const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // output = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros.length);

// console.log(marvel_heros[3]);  // output = [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);  // output = flash


// const allHeros = marvel_heros.concat(dc_heros);  // output = [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros); 


// spread Operator

// const all_new_heros = [ ... marvel_heros,...dc_heros];  //  output = [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,8,[4,6,7,[3,2]]]
// const real_another_array = another_array.flat(Infinity);    //output  =  [
//                                                             //                1, 2, 3, 4, 5, 6,
//                                                             //                7, 8, 4, 6, 7, 3,
//                                                             //               2
//                                                             //            ]
// console.log(real_another_array);

console.log(Array.isArray("Ajeet"));   // output  = false

console.log(Array.from("Ajeet"));   // output  = [ 'A', 'j', 'e', 'e', 't' ]

console.log(Array.from({name:"Ajeet"}));   // output  = [] means empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // output = [ 100, 200, 300 ]
// of = convert number to array
