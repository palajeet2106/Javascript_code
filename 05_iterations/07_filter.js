// const coding = ['js','ruby','java','python','cpp'];
// const values = coding.forEach((item) => {
//    // console.log(item);
//    return item;
// })
// console.log(values);    // output = undefined


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);                           // output = [ 5, 6, 7, 8, 9, 10 ]




// const newNums = myNums.filter((num) => {
//     return  num > 4
// })
// console.log(newNums);                           // output = [ 5, 6, 7, 8, 9, 10 ]


// Note = jb scope value {} ko open kroge tb return likhna padega


// OR

const newNums = [];
myNums.forEach((num) => {
    if (num > 4 ) {
        newNums.push(num);

    }
})
console.log(newNums);           // output = [ 5, 6, 7, 8, 9, 10 ]