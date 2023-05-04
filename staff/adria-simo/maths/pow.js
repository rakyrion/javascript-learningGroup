// function powerFunction(value, pow){
//     // TODO implement me
// let result 

//     for (let i=1; i < pow; i++) {
//         if(i === 1) result = value * value
//         else {
//             result = result * value
//         } 
//     }

//     return result

// }

 function powerFunction(value, pow){
      //TODO implement me

    if (pow === 0){
        
    return 1
    }
    
 let result = value * value

     for (let i=2; i < pow; i++) {
        result = result * value
     }

     return result

 }



console.log(powerFunction(10,3))
// 1000

console.log(powerFunction(3,4))
// 81

console.log(powerFunction(2, 3))
// 8 

console.log(powerFunction(2, 0))
// 8 