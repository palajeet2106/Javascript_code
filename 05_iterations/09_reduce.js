// const myNums = [1,2,3];
// const myTotal = myNums .reduce(function (acc , currval){
//     return acc + currval;
// } , 0)
// console.log(myTotal);     // output = 6



const myNums = [1,2,3];
// const myTotal = myNums .reduce(function (acc , currval){
//     console.log(`accumulator : ${acc} and current value : ${currval}`);
//     return acc + currval;
// } , 0)
// console.log(myTotal);     // output = accumulator : 0 and current value : 1
//                           //            accumulator : 1 and current value : 2
                          //            accumulator : 3 and current value : 3
                          //            6



// Note 
// 1 = map m sabhi value return hoti hai
// 2 = filter m true and false value return hoti hai   
// 3 = jo bhi value ( , ) k bad  di jaygi accumulator usi number se start krega  



// OR 

// Arrow function


const myTotal = myNums.reduce((acc , currval) => acc + currval ,0 )
console.log(myTotal);                                               // output = 6



const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 4999
    },
    {
        itemName : "Android Course",
        price : 7999
    },
    {
        itemName : "Web Development Course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0)
console.log(priceToPay);                                                          // output = 28996